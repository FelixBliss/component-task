package com.my.componenttask;

import android.app.Activity;
import android.graphics.Color;
import android.util.Log;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.unity3d.ads.AdExpiredListener;
import com.unity3d.ads.InitializationConfiguration;
import com.unity3d.ads.InitializationListener;
import com.unity3d.ads.InterstitialAd;
import com.unity3d.ads.InterstitialShowListener;
import com.unity3d.ads.LoadConfiguration;
import com.unity3d.ads.LoadListener;
import com.unity3d.ads.RewardedAd;
import com.unity3d.ads.RewardedShowListener;
import com.unity3d.ads.ShowConfiguration;
import com.unity3d.ads.ShowFinishState;
import com.unity3d.ads.UnityAds;
import com.unity3d.ads.UnityAdsError;
import com.unity3d.ads.BannerAd;
import com.unity3d.ads.BannerConfiguration;
import com.unity3d.ads.BannerSize;
import com.unity3d.ads.BannerShowListener;

/**
 * Native Unity Ads provider for Capacitor (Android only).
 *
 * Uses the CURRENT object-based Unity Ads Android API shipped with SDK 4.20.1:
 *   - RewardedAd / InterstitialAd + LoadConfiguration / ShowConfiguration
 *   - LoadListener<RewardedAd|InterstitialAd> (onAdLoaded(ad, error))
 *   - RewardedShowListener (onStarted / onClicked / onRewarded /
 *     onCompleted(ad, ShowFinishState) / onFailed)
 *   - InterstitialShowListener
 *   - UnityAds.initialize(InitializationConfiguration, InitializationListener)
 *
 * The legacy/deprecated flow (IUnityAdsLoadListener, IUnityAdsShowListener,
 * UnityAds.show(...), UnityAdsShowCompletionState) is NOT used anywhere.
 *
 * Reward guarantee: Stars are granted ONLY through RewardedShowListener
 * .onRewarded() (the authoritative reward event). onCompleted(COMPLETED)
 * finalizes the ad without ever awarding a second time (per-ad reward guard).
 * Skips, show failures and load failures resolve structured unsuccessful
 * results so JavaScript never rewards and never increments the daily count.
 */
@CapacitorPlugin(name = "UnityAds")
public class UnityAdsPlugin extends Plugin {
    private static final String TAG = "UnityAdsPlugin";

    // Production IDs (overridable via gradle properties / env in build.gradle).
    private static final String GAME_ID = BuildConfig.UNITY_ADS_GAME_ID;
    private static final String INTERSTITIAL_ID = BuildConfig.UNITY_ADS_INTERSTITIAL_ID;
    private static final String REWARDED_ID = BuildConfig.UNITY_ADS_REWARDED_ID;
    private static final String BANNER_ID = BuildConfig.UNITY_ADS_BANNER_ID;

    /** Ad lifecycle states so duplicate load/show requests cannot occur. */
    private enum AdState { IDLE, LOADING, READY, SHOWING }

    private volatile boolean initialized = false;

    // ------------------------------------------------------------------
    // Rewarded ad state (cached RewardedAd instance + per-ad guards)
    // ------------------------------------------------------------------
    private RewardedAd cachedRewardedAd;
    private volatile AdState rewardedState = AdState.IDLE;
    private PluginCall pendingRewardedCall;
    /** Authoritative reward flag: true once onRewarded() fired for this ad. */
    private volatile boolean currentRewardEarned = false;
    /** Finalization guard: resolves the pending call exactly once per show. */
    private volatile boolean currentShowFinalized = false;

    // ------------------------------------------------------------------
    // Interstitial ad state
    // ------------------------------------------------------------------
    private InterstitialAd cachedInterstitialAd;
    private volatile AdState interstitialState = AdState.IDLE;
    private PluginCall pendingInterstitialCall;
    private volatile boolean interstitialCounted = false;

    // ------------------------------------------------------------------
    // Banner state (single real Unity BannerView instance)
    // ------------------------------------------------------------------
    private PluginCall pendingBannerCall;
    private FrameLayout bannerContainer;
    private BannerAd bannerView;
    private volatile boolean bannerLoaded = false;

    // ==================================================================
    // Logcat diagnostic tags (Section 15)
    // ==================================================================
    private static void logEvent(String event) {
        Log.i(TAG, event);
    }

    private static void logEventError(String event, UnityAdsError error) {
        String code = error != null ? String.valueOf(error.getCode()) : "unknown";
        String message = error != null ? error.getMessage() : "no error details";
        Log.e(TAG, event + " unityError=" + code + " message=" + message);
    }

    private static void logEventError(String event, String detail) {
        Log.e(TAG, event + " " + detail);
    }

    // ==================================================================
    // Unity initialization (current API: InitializationConfiguration)
    // ==================================================================

    @PluginMethod
    public void initialize(PluginCall call) {
        logEvent("UNITY_INIT_START gameIdConfigured=" + !isBlank(GAME_ID));

        if (initialized || UnityAds.isInitialized()) {
            initialized = true;
            logEvent("UNITY_INIT_SUCCESS (already initialized)");
            preloadRewarded();
            preloadInterstitial();
            resolveSuccess(call, "ALREADY_INITIALIZED", null);
            return;
        }

        if (isBlank(GAME_ID)) {
            logEventError("UNITY_INIT_FAILED", "reason=GAME_ID_NOT_CONFIGURED");
            resolveFailure(call, "AD_NOT_AVAILABLE", "UNITY_INIT_FAILED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            logEventError("UNITY_INIT_FAILED", "reason=NO_ACTIVITY");
            resolveFailure(call, "AD_NOT_AVAILABLE", "UNITY_INIT_FAILED");
            return;
        }

        InitializationConfiguration config =
                new InitializationConfiguration.Builder(GAME_ID)
                        // Debug APKs always use Unity test ads. Release builds use live mode.
                        .withTestMode(BuildConfig.DEBUG)
                        .build();
        logEvent("UNITY_INIT_CONFIG testMode=" + BuildConfig.DEBUG + " sdk=" + UnityAds.getVersion());

        UnityAds.initialize(config, new InitializationListener() {
            @Override
            public void onInitializationComplete(UnityAdsError error) {
                if (error == null) {
                    logEvent("UNITY_INIT_SUCCESS");
                    initialized = true;
                    // Preload after successful init so the first tap is fast.
                    preloadRewarded();
                    preloadInterstitial();
                    resolveSuccess(call, "UNITY_INIT_SUCCESS", null);
                } else {
                    logEventError("UNITY_INIT_FAILED", error);
                    // Do not crash, do not use mock ads; JS may retry later.
                    resolveFailure(call, mapInitError(error), "UNITY_INIT_FAILED");
                }
            }
        });
    }

    // ==================================================================
    // Rewarded workflow (current RewardedAd API)
    // ==================================================================

    @PluginMethod
    public void showRewarded(PluginCall call) {
        if (!ensureInitialized(call, "showRewarded")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_SHOW_FAILED", "REWARDED_SHOW_FAILED");
            return;
        }

        // Keep the JS call alive across all async Unity callbacks so the ad
        // result can be delivered when the show flow finishes.
        call.setKeepAlive(true);

        activity.runOnUiThread(() -> {
            synchronized (this) {
                if (pendingRewardedCall != null) {
                    Log.w(TAG, "Rewarded request ignored: another rewarded ad is already in flight.");
                    resolveFailure(call, "AD_SHOW_FAILED", "REWARDED_IN_FLIGHT");
                    return;
                }
                pendingRewardedCall = call;
                currentRewardEarned = false;
                currentShowFinalized = false;
            }

            RewardedAd ad = cachedRewardedAd;
            if (ad != null && rewardedState == AdState.READY) {
                showRewardedAdNow(activity, ad);
            } else if (rewardedState == AdState.LOADING) {
                logEvent("REWARDED_LOAD_START (already loading; show will follow when loaded)");
            } else {
                startRewardedLoad(true /* showWhenLoaded */);
            }
        });
    }

    private void showRewardedAdNow(Activity activity, RewardedAd ad) {
        rewardedState = AdState.SHOWING;
        currentRewardEarned = false;
        currentShowFinalized = false;
        logEvent("REWARDED_SHOW_START placement=" + REWARDED_ID);

        ShowConfiguration showConfig = new ShowConfiguration.Builder().build();
        ad.show(activity, showConfig, new RewardedShowListener() {
            @Override
            public void onStarted(RewardedAd rewardedAd) {
                // The ad is actually playing on screen.
                logEvent("REWARDED_STARTED");
            }

            @Override
            public void onClicked(RewardedAd rewardedAd) {
                // A click NEVER grants Stars.
                logEvent("REWARDED_CLICKED");
            }

            @Override
            public void onRewarded(RewardedAd rewardedAd) {
                // AUTHORITATIVE Unity reward event — grant exactly once.
                if (currentRewardEarned) return;
                currentRewardEarned = true;
                logEvent("REWARDED_EARNED");
            }

            @Override
            public void onCompleted(RewardedAd rewardedAd, ShowFinishState state) {
                // Finalize the ad WITHOUT awarding again; reward was already
                // delivered through onRewarded() if it was earned.
                boolean rewarded = currentRewardEarned;
                finalizeRewardedCall(state, rewarded);
            }

            @Override
            public void onFailed(RewardedAd rewardedAd, UnityAdsError error) {
                logEventError("REWARDED_SHOW_FAILED", error);
                finalizeRewardedFailure();
            }
        });
    }

    private void finalizeRewardedCall(ShowFinishState state, boolean rewardEarned) {
        PluginCall call;
        synchronized (this) {
            if (currentShowFinalized) return;
            currentShowFinalized = true;
            call = pendingRewardedCall;
            pendingRewardedCall = null;
        }

        rewardedState = AdState.IDLE;
        cachedRewardedAd = null; // consumed by the show

        if (rewardEarned) {
            logEvent("REWARDED_COMPLETED state=" + state + " reward=granted");
            resolveSuccess(call, "REWARDED_EARNED", null);
        } else if (state == ShowFinishState.COMPLETED) {
            // Completed but Unity did not fire onRewarded() -> no reward.
            logEventError("REWARDED_COMPLETED_NO_REWARD", "state=" + state);
            resolveFailure(call, "AD_SHOW_FAILED", "REWARDED_NO_REWARD");
        } else {
            // User skipped/closed before earning the reward -> NO Stars.
            logEvent("REWARDED_SKIPPED state=" + state);
            resolveFailure(call, "REWARDED_SKIPPED", "REWARDED_SKIPPED");
        }

        // Preload the next rewarded ad immediately.
        preloadRewarded();
    }

    private void finalizeRewardedFailure() {
        PluginCall call;
        synchronized (this) {
            if (currentShowFinalized) return;
            currentShowFinalized = true;
            call = pendingRewardedCall;
            pendingRewardedCall = null;
        }
        rewardedState = AdState.IDLE;
        cachedRewardedAd = null;
        resolveFailure(call, "AD_SHOW_FAILED", "REWARDED_SHOW_FAILED");
        preloadRewarded();
    }

    private void startRewardedLoad(boolean showWhenLoaded) {
        rewardedState = AdState.LOADING;
        logEvent("REWARDED_LOAD_START placement=" + REWARDED_ID);

        LoadConfiguration loadConfig =
                new LoadConfiguration.Builder(REWARDED_ID).build();

        RewardedAd.load(loadConfig, new LoadListener<RewardedAd>() {
            @Override
            public void onAdLoaded(RewardedAd ad, UnityAdsError error) {
                if (error != null || ad == null) {
                    rewardedState = AdState.IDLE;
                    logEventError("REWARDED_LOAD_FAILED", error);
                    handleRewardedLoadFailure();
                    return;
                }

                cachedRewardedAd = ad;
                rewardedState = AdState.READY;
                logEvent("REWARDED_LOAD_SUCCESS placement=" + REWARDED_ID);

                // Handle expiration: discard the expired ad and load a new one.
                ad.setOnAdExpired(new AdExpiredListener<RewardedAd>() {
                    @Override
                    public void onAdExpired(RewardedAd expiredAd) {
                        logEventError("REWARDED_AD_EXPIRED", "discarding and reloading");
                        synchronized (UnityAdsPlugin.this) {
                            if (cachedRewardedAd == expiredAd) {
                                cachedRewardedAd = null;
                                rewardedState = AdState.IDLE;
                            }
                        }
                        // Never attempt to show an expired ad.
                        preloadRewarded();
                    }
                });

                if (showWhenLoaded) {
                    Activity activity = getActivity();
                    PluginCall call;
                    synchronized (this) {
                        call = pendingRewardedCall;
                    }
                    if (call != null && activity != null && cachedRewardedAd == ad) {
                        showRewardedAdNow(activity, ad);
                    }
                }
            }
        });
    }

    private void handleRewardedLoadFailure() {
        PluginCall call;
        synchronized (this) {
            call = pendingRewardedCall;
            if (call != null) {
                pendingRewardedCall = null;
                currentShowFinalized = true;
            }
        }
        if (call != null) {
            resolveFailure(call, "AD_LOAD_FAILED", "REWARDED_LOAD_FAILED");
        }
    }

    private void preloadRewarded() {
        Activity activity = getActivity();
        if (activity == null || isBlank(REWARDED_ID)) return;
        activity.runOnUiThread(() -> {
            if (rewardedState == AdState.READY || rewardedState == AdState.LOADING) {
                return; // already loaded or loading — no duplicate requests
            }
            if (rewardedState == AdState.SHOWING) {
                return; // an ad is currently playing
            }
            startRewardedLoad(false /* cache only */);
        });
    }

    // ==================================================================
    // Interstitial workflow (current InterstitialAd API)
    // ==================================================================

    @PluginMethod
    public void showInterstitial(PluginCall call) {
        if (!ensureInitialized(call, "showInterstitial")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_SHOW_FAILED", "INTERSTITIAL_SHOW_FAILED");
            return;
        }

        // Keep the JS call alive across all async Unity callbacks.
        call.setKeepAlive(true);

        activity.runOnUiThread(() -> {
            synchronized (this) {
                if (pendingInterstitialCall != null) {
                    Log.w(TAG, "Interstitial request ignored: another interstitial is in flight.");
                    resolveFailure(call, "AD_SHOW_FAILED", "INTERSTITIAL_IN_FLIGHT");
                    return;
                }
                pendingInterstitialCall = call;
                interstitialCounted = false;
            }

            InterstitialAd ad = cachedInterstitialAd;
            if (ad != null && interstitialState == AdState.READY) {
                showInterstitialNow(activity, ad);
            } else if (interstitialState == AdState.LOADING) {
                logEvent("INTERSTITIAL_LOAD_START (already loading; show will follow when loaded)");
            } else {
                startInterstitialLoad(true /* showWhenLoaded */);
            }
        });
    }

    private void showInterstitialNow(Activity activity, InterstitialAd ad) {
        interstitialState = AdState.SHOWING;
        logEvent("INTERSTITIAL_SHOW_START placement=" + INTERSTITIAL_ID);

        ShowConfiguration showConfig = new ShowConfiguration.Builder().build();
        ad.show(activity, showConfig, new InterstitialShowListener() {
            @Override
            public void onStarted(InterstitialAd interstitialAd) {
                // The ad actually displayed -> count it (success to JS now).
                logEvent("INTERSTITIAL_STARTED");
                PluginCall call;
                synchronized (UnityAdsPlugin.this) {
                    call = pendingInterstitialCall;
                    if (call != null && !interstitialCounted) {
                        interstitialCounted = true;
                        pendingInterstitialCall = null;
                    } else {
                        call = null;
                    }
                }
                resolveSuccess(call, "INTERSTITIAL_STARTED", null);
            }

            @Override
            public void onClicked(InterstitialAd interstitialAd) {
                logEvent("INTERSTITIAL_CLICKED");
            }

            @Override
            public void onCompleted(InterstitialAd interstitialAd, ShowFinishState state) {
                logEvent("INTERSTITIAL_COMPLETED state=" + state);
                finishInterstitial(null);
            }

            @Override
            public void onFailed(InterstitialAd interstitialAd, UnityAdsError error) {
                logEventError("INTERSTITIAL_SHOW_FAILED", error);
                finishInterstitial(error);
            }
        });
    }

    private void finishInterstitial(UnityAdsError error) {
        interstitialState = AdState.IDLE;
        cachedInterstitialAd = null; // consumed

        PluginCall call;
        synchronized (this) {
            call = pendingInterstitialCall;
            pendingInterstitialCall = null;
        }
        if (call != null) {
            // Show failed before ever starting -> no success, no counting.
            resolveFailure(call, "AD_SHOW_FAILED", "INTERSTITIAL_SHOW_FAILED");
        }
        preloadInterstitial();
    }

    private void startInterstitialLoad(boolean showWhenLoaded) {
        interstitialState = AdState.LOADING;
        logEvent("INTERSTITIAL_LOAD_START placement=" + INTERSTITIAL_ID);

        LoadConfiguration loadConfig =
                new LoadConfiguration.Builder(INTERSTITIAL_ID).build();

        InterstitialAd.load(loadConfig, new LoadListener<InterstitialAd>() {
            @Override
            public void onAdLoaded(InterstitialAd ad, UnityAdsError error) {
                if (error != null || ad == null) {
                    interstitialState = AdState.IDLE;
                    logEventError("INTERSTITIAL_LOAD_FAILED", error);
                    handleInterstitialLoadFailure();
                    return;
                }

                cachedInterstitialAd = ad;
                interstitialState = AdState.READY;
                logEvent("INTERSTITIAL_LOAD_SUCCESS placement=" + INTERSTITIAL_ID);

                ad.setOnAdExpired(new AdExpiredListener<InterstitialAd>() {
                    @Override
                    public void onAdExpired(InterstitialAd expiredAd) {
                        logEventError("INTERSTITIAL_AD_EXPIRED", "discarding and reloading");
                        synchronized (UnityAdsPlugin.this) {
                            if (cachedInterstitialAd == expiredAd) {
                                cachedInterstitialAd = null;
                                interstitialState = AdState.IDLE;
                            }
                        }
                        preloadInterstitial();
                    }
                });

                // If a user tapped while the preload was still in progress,
                // pendingInterstitialCall is now non-null. Show the freshly
                // loaded ad immediately instead of leaving the JS call hanging.
                Activity activity = getActivity();
                PluginCall call;
                synchronized (UnityAdsPlugin.this) {
                    call = pendingInterstitialCall;
                }
                if ((showWhenLoaded || call != null) && call != null
                        && activity != null && cachedInterstitialAd == ad) {
                    showInterstitialNow(activity, ad);
                }
            }
        });
    }

    private void handleInterstitialLoadFailure() {
        PluginCall call;
        synchronized (this) {
            call = pendingInterstitialCall;
            pendingInterstitialCall = null;
        }
        if (call != null) {
            resolveFailure(call, "AD_LOAD_FAILED", "INTERSTITIAL_LOAD_FAILED");
        }
    }

    private void preloadInterstitial() {
        Activity activity = getActivity();
        if (activity == null || isBlank(INTERSTITIAL_ID)) return;
        activity.runOnUiThread(() -> {
            if (interstitialState == AdState.READY
                    || interstitialState == AdState.LOADING
                    || interstitialState == AdState.SHOWING) {
                return;
            }
            startInterstitialLoad(false /* cache only */);
        });
    }

    // ==================================================================
    // Banner workflow (REAL Unity BannerView — single instance)
    // ==================================================================

    @PluginMethod
    public void showBanner(PluginCall call) {
        if (!ensureInitialized(call, "showBanner")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_SHOW_FAILED", "BANNER_SHOW_FAILED");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerContainer == null) {
                bannerContainer = new FrameLayout(activity);
                bannerContainer.setBackgroundColor(Color.TRANSPARENT);

                FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.WRAP_CONTENT
                );
                params.gravity = Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL;
                params.bottomMargin =
                        (int) (72 * activity.getResources().getDisplayMetrics().density);

                activity.addContentView(bannerContainer, params);
            }

            bannerContainer.setVisibility(FrameLayout.VISIBLE);

            if (bannerLoaded && bannerView != null && bannerView.getView() != null) {
                if (bannerView.getView().getParent() == null) {
                    bannerContainer.addView(
                            bannerView.getView(),
                            new FrameLayout.LayoutParams(
                                    ViewGroup.LayoutParams.MATCH_PARENT,
                                    ViewGroup.LayoutParams.WRAP_CONTENT,
                                    Gravity.CENTER_HORIZONTAL
                            )
                    );
                }
                resolveSuccess(call, "BANNER_ALREADY_LOADED", null);
                return;
            }

            logEvent("BANNER_LOAD_START placement=" + BANNER_ID);

            BannerSize bannerSize = new BannerSize(320, 50);
            BannerConfiguration loadConfig =
                    new BannerConfiguration.Builder(BANNER_ID, bannerSize, bannerShowListener)
                            .build();

            pendingBannerCall = call;
            BannerAd.load(loadConfig, (loadedBanner, error) -> {
                if (loadedBanner == null || error != null) {
                    bannerLoaded = false;
                    logEventError(
                            "BANNER_LOAD_FAILED",
                            error != null
                                    ? "code=" + error.getCode() + " message=" + error.getMessage()
                                    : "unknown error"
                    );
                    PluginCall pending = pendingBannerCall;
                    pendingBannerCall = null;
                    if (pending != null) {
                        resolveFailure(pending, "AD_LOAD_FAILED", "BANNER_LOAD_FAILED");
                    }
                    return;
                }

                bannerView = loadedBanner;
                bannerLoaded = true;
                logEvent("BANNER_LOAD_SUCCESS placement=" + BANNER_ID);

                ViewGroup bannerParent = (ViewGroup) loadedBanner.getView().getParent();
                if (bannerParent != null) {
                    bannerParent.removeView(loadedBanner.getView());
                }

                bannerContainer.addView(
                        loadedBanner.getView(),
                        new FrameLayout.LayoutParams(
                                ViewGroup.LayoutParams.MATCH_PARENT,
                                ViewGroup.LayoutParams.WRAP_CONTENT,
                                Gravity.CENTER_HORIZONTAL
                        )
                );

                PluginCall pending = pendingBannerCall;
                pendingBannerCall = null;
                if (pending != null) {
                    resolveSuccess(pending, "BANNER_LOADED", null);
                }
            });
        });
    }

    private final BannerShowListener bannerShowListener = new BannerShowListener() {
        @Override
        public void onImpression(BannerAd bannerAd) {
            logEvent("BANNER_SHOWN");
        }

        @Override
        public void onClicked(BannerAd bannerAd) {
            logEvent("BANNER_CLICKED");
        }

        @Override
        public void onFailedToShow(BannerAd bannerAd, UnityAdsError error) {
            logEventError("BANNER_SHOW_FAILED", error);
        }
    };

    @PluginMethod
    public void hideBanner(PluginCall call) {
        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_SHOW_FAILED", "BANNER_HIDE_FAILED");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerContainer != null) {
                bannerContainer.setVisibility(FrameLayout.GONE);
                logEvent("BANNER_HIDDEN");
            }
            resolveSuccess(call, "BANNER_HIDDEN", null);
        });
    }

    // ==================================================================
    // Helpers
    // ==================================================================

    private boolean ensureInitialized(PluginCall call, String method) {
        if (!initialized && !UnityAds.isInitialized()) {
            logEventError("UNITY_NOT_INITIALIZED", method + "() called before Unity Ads init completed.");
            resolveFailure(call, "AD_NOT_AVAILABLE", "UNITY_NOT_INITIALIZED");
            return false;
        }
        initialized = true;
        return true;
    }

    private static String mapInitError(UnityAdsError error) {
        // Structured, non-sensitive error string for JS consumption.
        return error != null ? "UNITY_ERROR_" + error.getCode() : "UNITY_INIT_FAILED";
    }

    private void resolveSuccess(PluginCall call, String event, String extra) {
        if (call == null) return;
        JSObject result = new JSObject();
        result.put("success", true);
        result.put("event", event);
        if (extra != null) {
            result.put("detail", extra);
        }
        call.resolve(result);
        call.setKeepAlive(false);
    }

    /**
     * Failures are RESOLVED (not rejected) with a structured AdResult so the
     * JS provider layer receives { success:false, error, event }. Detailed
     * Unity error enums/messages stay in logcat (never exposed to JS).
     */
    private void resolveFailure(PluginCall call, String error, String event) {
        if (call == null) return;
        JSObject result = new JSObject();
        result.put("success", false);
        result.put("error", error);
        result.put("event", event);
        call.resolve(result);
        call.setKeepAlive(false);
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty() || value.startsWith("__");
    }

    @Override
    protected void handleOnDestroy() {
        synchronized (this) {
            pendingRewardedCall = null;
            pendingInterstitialCall = null;
            pendingBannerCall = null;
            cachedRewardedAd = null;
            cachedInterstitialAd = null;
            rewardedState = AdState.IDLE;
            interstitialState = AdState.IDLE;
        }

        if (bannerView != null) {
            ViewGroup bannerParent = bannerView.getView() != null
                    ? (ViewGroup) bannerView.getView().getParent()
                    : null;
            if (bannerParent != null && bannerView.getView() != null) {
                bannerParent.removeView(bannerView.getView());
            }
            bannerView = null;
        }
        bannerLoaded = false;

        if (bannerContainer != null) {
            ViewGroup parent = (ViewGroup) bannerContainer.getParent();
            if (parent != null) {
                parent.removeView(bannerContainer);
            }
            bannerContainer = null;
        }

        super.handleOnDestroy();
    }
}
