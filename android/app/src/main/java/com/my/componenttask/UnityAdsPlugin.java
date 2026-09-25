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
import com.unity3d.ads.IUnityAdsInitializationListener;
import com.unity3d.ads.IUnityAdsLoadListener;
import com.unity3d.ads.IUnityAdsShowListener;
import com.unity3d.ads.UnityAds;
import com.unity3d.ads.UnityAdsShowOptions;
import com.unity3d.services.banners.BannerErrorInfo;
import com.unity3d.services.banners.BannerView;
import com.unity3d.services.banners.UnityBannerSize;

/**
 * Native Unity Ads provider for Capacitor (Android only).
 *
 * Flow guarantees:
 *  - initialize() must complete before any ad request is served.
 *  - showRewarded()/showInterstitial() WAIT for the placement to finish
 *    loading (onUnityAdsAdLoaded) before calling UnityAds.show().
 *  - The rewarded call resolves success ONLY when the user completed the ad
 *    (UnityAdsShowCompletionState.COMPLETED).
 *  - showBanner() attaches a REAL Unity BannerView (no placeholder) and
 *    resolves once Unity reports the banner loaded (or fails).
 */
@CapacitorPlugin(name = "UnityAds")
public class UnityAdsPlugin extends Plugin {
    private static final String TAG = "UnityAdsPlugin";

    // Production IDs (overridable via gradle properties / env in build.gradle).
    private static final String GAME_ID = BuildConfig.UNITY_ADS_GAME_ID;
    private static final String INTERSTITIAL_ID = BuildConfig.UNITY_ADS_INTERSTITIAL_ID;
    private static final String REWARDED_ID = BuildConfig.UNITY_ADS_REWARDED_ID;
    private static final String BANNER_ID = BuildConfig.UNITY_ADS_BANNER_ID;

    private boolean initialized = false;

    private PluginCall pendingRewardedCall;
    private PluginCall pendingInterstitialCall;
    private PluginCall pendingBannerCall;

    private FrameLayout bannerContainer;
    private BannerView bannerView;

    private volatile boolean rewardedReady = false;
    private volatile boolean interstitialReady = false;

    // ------------------------------------------------------------------
    // Load listeners: an ad is shown ONLY after Unity reports it loaded.
    // ------------------------------------------------------------------

    private final IUnityAdsLoadListener rewardedLoadListener = new IUnityAdsLoadListener() {
        @Override
        public void onUnityAdsAdLoaded(String placementId) {
            if (!REWARDED_ID.equals(placementId)) return;
            Log.i(TAG, "Rewarded ad loaded successfully: " + placementId);
            rewardedReady = true;

            final PluginCall call = pendingRewardedCall;
            final Activity activity = getActivity();
            if (call == null || activity == null) return;

            activity.runOnUiThread(() -> {
                if (pendingRewardedCall != call) return;
                Log.i(TAG, "Showing rewarded ad (placement=" + REWARDED_ID + ")");
                UnityAds.show(activity, REWARDED_ID, new UnityAdsShowOptions(), rewardedShowListener);
            });
        }

        @Override
        public void onUnityAdsFailedToLoad(String placementId,
                                           UnityAds.UnityAdsLoadError error,
                                           String message) {
            if (!REWARDED_ID.equals(placementId)) return;
            Log.e(TAG, "Rewarded ad FAILED to load: placement=" + placementId
                    + " error=" + error + " message=" + message);
            rewardedReady = false;
            resolveFailure(pendingRewardedCall, "AD_NOT_AVAILABLE");
            pendingRewardedCall = null;
        }
    };

    private final IUnityAdsLoadListener interstitialLoadListener = new IUnityAdsLoadListener() {
        @Override
        public void onUnityAdsAdLoaded(String placementId) {
            if (!INTERSTITIAL_ID.equals(placementId)) return;
            Log.i(TAG, "Interstitial ad loaded successfully: " + placementId);
            interstitialReady = true;

            final PluginCall call = pendingInterstitialCall;
            final Activity activity = getActivity();
            if (call == null || activity == null) return;

            activity.runOnUiThread(() -> {
                if (pendingInterstitialCall != call) return;
                Log.i(TAG, "Showing interstitial ad (placement=" + INTERSTITIAL_ID + ")");
                UnityAds.show(activity, INTERSTITIAL_ID, new UnityAdsShowOptions(), interstitialShowListener);
            });
        }

        @Override
        public void onUnityAdsFailedToLoad(String placementId,
                                           UnityAds.UnityAdsLoadError error,
                                           String message) {
            if (!INTERSTITIAL_ID.equals(placementId)) return;
            Log.e(TAG, "Interstitial ad FAILED to load: placement=" + placementId
                    + " error=" + error + " message=" + message);
            interstitialReady = false;
            resolveFailure(pendingInterstitialCall, "AD_NOT_AVAILABLE");
            pendingInterstitialCall = null;
        }
    };

    // ------------------------------------------------------------------
    // Show listeners
    // ------------------------------------------------------------------

    private final IUnityAdsShowListener rewardedShowListener = new IUnityAdsShowListener() {
        @Override
        public void onUnityAdsShowFailure(String placementId,
                                          UnityAds.UnityAdsShowError error,
                                          String message) {
            if (!REWARDED_ID.equals(placementId)) return;
            Log.e(TAG, "Rewarded ad SHOW FAILURE: placement=" + placementId
                    + " error=" + error + " message=" + message);
            rewardedReady = false;
            // Failure => no reward.
            resolveFailure(pendingRewardedCall, "AD_NOT_AVAILABLE");
            pendingRewardedCall = null;
            preloadRewarded();
        }

        @Override
        public void onUnityAdsShowStart(String placementId) {
            if (REWARDED_ID.equals(placementId)) {
                Log.i(TAG, "Rewarded ad started showing.");
            }
        }

        @Override
        public void onUnityAdsShowClick(String placementId) {
        }

        @Override
        public void onUnityAdsShowComplete(String placementId,
                                           UnityAds.UnityAdsShowCompletionState state) {
            if (!REWARDED_ID.equals(placementId)) return;
            rewardedReady = false;
            boolean completed = state == UnityAds.UnityAdsShowCompletionState.COMPLETED;
            Log.i(TAG, "Rewarded ad show complete: state=" + state
                    + " (success=" + completed + ")");
            if (completed) {
                // User finished the ad -> success (reward granted upstream).
                resolveSuccess(pendingRewardedCall);
            } else {
                // Skipped / unknown / not completed -> NO reward.
                resolveFailure(pendingRewardedCall, "AD_NOT_AVAILABLE");
            }
            pendingRewardedCall = null;
            preloadRewarded();
        }
    };

    private final IUnityAdsShowListener interstitialShowListener = new IUnityAdsShowListener() {
        @Override
        public void onUnityAdsShowFailure(String placementId,
                                          UnityAds.UnityAdsShowError error,
                                          String message) {
            if (!INTERSTITIAL_ID.equals(placementId)) return;
            Log.e(TAG, "Interstitial ad SHOW FAILURE: placement=" + placementId
                    + " error=" + error + " message=" + message);
            interstitialReady = false;
            resolveFailure(pendingInterstitialCall, "AD_NOT_AVAILABLE");
            pendingInterstitialCall = null;
            preloadInterstitial();
        }

        @Override
        public void onUnityAdsShowStart(String placementId) {
            if (INTERSTITIAL_ID.equals(placementId)) {
                Log.i(TAG, "Interstitial ad started showing: SUCCESS");
                interstitialReady = false;
                // The ad actually displayed -> report success to JS now.
                resolveSuccess(pendingInterstitialCall);
                pendingInterstitialCall = null;
            }
        }

        @Override
        public void onUnityAdsShowClick(String placementId) {
        }

        @Override
        public void onUnityAdsShowComplete(String placementId,
                                            UnityAds.UnityAdsShowCompletionState state) {
            if (!INTERSTITIAL_ID.equals(placementId)) return;
            Log.i(TAG, "Interstitial ad dismissed: state=" + state);
            preloadInterstitial();
        }
    };

    // ------------------------------------------------------------------
    // Banner listener (REAL Unity banner view)
    // ------------------------------------------------------------------

    private final BannerView.IListener bannerListener = new BannerView.IListener() {
        @Override
        public void onBannerLoaded(BannerView bannerAdView) {
            Log.i(TAG, "Unity banner LOADED successfully (placement=" + BANNER_ID + ")");
            final PluginCall call = pendingBannerCall;
            pendingBannerCall = null;
            if (call != null) {
                resolveSuccess(call);
            }
        }

        @Override
        public void onBannerFailedToLoad(BannerView bannerAdView, BannerErrorInfo errorInfo) {
            Log.e(TAG, "Unity banner FAILED to load: error=" + errorInfo.errorMessage);
            final PluginCall call = pendingBannerCall;
            pendingBannerCall = null;
            if (call != null) {
                resolveFailure(call, "AD_NOT_AVAILABLE");
            }
        }

        @Override
        public void onBannerClick(BannerView bannerAdView) {
            Log.i(TAG, "Unity banner clicked.");
        }

        @Override
        public void onBannerShown(BannerView bannerAdView) {
            Log.i(TAG, "Unity banner shown.");
        }

        @Override
        public void onBannerLeftApplication(BannerView bannerAdView) {
            Log.i(TAG, "Unity banner left application (user tapped through).");
        }
    };

    // ------------------------------------------------------------------
    // Plugin methods
    // ------------------------------------------------------------------

    @PluginMethod
    public void initialize(PluginCall call) {
        Log.i(TAG, "initialize() requested. gameId=" + GAME_ID
                + " rewarded=" + REWARDED_ID + " interstitial=" + INTERSTITIAL_ID
                + " banner=" + BANNER_ID);

        if (initialized || UnityAds.isInitialized()) {
            initialized = true;
            Log.i(TAG, "Unity Ads already initialized.");
            preloadAds();
            resolveSuccess(call);
            return;
        }

        if (isBlank(GAME_ID)) {
            Log.e(TAG, "Unity Ads GAME_ID is not configured; cannot initialize.");
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            Log.e(TAG, "No activity available for Unity Ads initialization.");
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        UnityAds.initialize(
                activity.getApplicationContext(),
                GAME_ID,
                false,
                new IUnityAdsInitializationListener() {
                    @Override
                    public void onInitializationComplete() {
                        Log.i(TAG, "Unity Ads initialized successfully (gameId=" + GAME_ID + ").");
                        initialized = true;
                        preloadAds();
                        resolveSuccess(call);
                    }

                    @Override
                    public void onInitializationFailed(
                            UnityAds.UnityAdsInitializationError error,
                            String message) {
                        Log.e(TAG, "Unity Ads INITIALIZATION FAILED: error=" + error
                                + " message=" + message);
                        resolveFailure(call, "AD_NOT_AVAILABLE");
                    }
                }
        );
    }

    @PluginMethod
    public void showRewarded(PluginCall call) {
        if (!ensureInitialized(call, "showRewarded")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        activity.runOnUiThread(() -> {
            if (pendingRewardedCall != null) {
                Log.w(TAG, "Rewarded ad request ignored: another rewarded ad is already in flight.");
                resolveFailure(call, "AD_NOT_AVAILABLE");
                return;
            }
            pendingRewardedCall = call;

            if (rewardedReady) {
                Log.i(TAG, "Rewarded ad already loaded; showing immediately.");
                UnityAds.show(activity, REWARDED_ID, new UnityAdsShowOptions(), rewardedShowListener);
            } else {
                Log.i(TAG, "Rewarded ad not cached; waiting for load before show.");
                UnityAds.load(REWARDED_ID, rewardedLoadListener);
            }
        });
    }

    @PluginMethod
    public void showInterstitial(PluginCall call) {
        if (!ensureInitialized(call, "showInterstitial")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        activity.runOnUiThread(() -> {
            if (pendingInterstitialCall != null) {
                Log.w(TAG, "Interstitial request ignored: another interstitial is already in flight.");
                resolveFailure(call, "AD_NOT_AVAILABLE");
                return;
            }
            pendingInterstitialCall = call;

            if (interstitialReady) {
                Log.i(TAG, "Interstitial already loaded; showing immediately.");
                UnityAds.show(activity, INTERSTITIAL_ID, new UnityAdsShowOptions(), interstitialShowListener);
            } else {
                Log.i(TAG, "Interstitial not cached; waiting for load before show.");
                UnityAds.load(INTERSTITIAL_ID, interstitialLoadListener);
            }
        });
    }

    @PluginMethod
    public void showBanner(PluginCall call) {
        if (!ensureInitialized(call, "showBanner")) return;

        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerView == null) {
                Log.i(TAG, "Creating Unity banner view (placement=" + BANNER_ID + ", size=320x50).");
                bannerView = new BannerView(activity, BANNER_ID, new UnityBannerSize(320, 50));
                bannerView.setListener(bannerListener);
            }

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

            if (bannerView.getParent() == null) {
                bannerContainer.addView(
                        bannerView,
                        new FrameLayout.LayoutParams(
                                ViewGroup.LayoutParams.MATCH_PARENT,
                                ViewGroup.LayoutParams.WRAP_CONTENT,
                                Gravity.CENTER_HORIZONTAL
                        )
                );
            }

            bannerContainer.setVisibility(FrameLayout.VISIBLE);

            // Resolve once Unity reports the banner actually loaded (or fails).
            pendingBannerCall = call;
            bannerView.load();
        });
    }

    @PluginMethod
    public void hideBanner(PluginCall call) {
        Activity activity = getActivity();
        if (activity == null) {
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerContainer != null) {
                bannerContainer.setVisibility(FrameLayout.GONE);
                Log.i(TAG, "Unity banner hidden.");
            }
            resolveSuccess(call);
        });
    }

    // ------------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------------

    private void preloadAds() {
        preloadRewarded();
        preloadInterstitial();
    }

    private void preloadRewarded() {
        Activity activity = getActivity();
        if (activity == null || isBlank(REWARDED_ID)) return;
        activity.runOnUiThread(() -> {
            if (!rewardedReady) {
                Log.i(TAG, "Preloading rewarded placement: " + REWARDED_ID);
                UnityAds.load(REWARDED_ID, rewardedLoadListener);
            }
        });
    }

    private void preloadInterstitial() {
        Activity activity = getActivity();
        if (activity == null || isBlank(INTERSTITIAL_ID)) return;
        activity.runOnUiThread(() -> {
            if (!interstitialReady) {
                Log.i(TAG, "Preloading interstitial placement: " + INTERSTITIAL_ID);
                UnityAds.load(INTERSTITIAL_ID, interstitialLoadListener);
            }
        });
    }

    private boolean ensureInitialized(PluginCall call, String method) {
        if (!initialized && !UnityAds.isInitialized()) {
            Log.e(TAG, method + "() called before Unity Ads was initialized.");
            resolveFailure(call, "AD_NOT_AVAILABLE");
            return false;
        }
        initialized = true;
        return true;
    }

    private void resolveSuccess(PluginCall call) {
        if (call == null) return;
        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    /**
     * Failures are RESOLVED (not rejected) with { success:false, error } so
     * the JS provider layer receives a structured AdResult. The detailed
     * Unity error messages are captured in logcat (see Log.e calls above).
     */
    private void resolveFailure(PluginCall call, String error) {
        if (call == null) return;
        JSObject result = new JSObject();
        result.put("success", false);
        result.put("error", error);
        call.resolve(result);
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty() || value.startsWith("__");
    }

    @Override
    protected void handleOnDestroy() {
        pendingRewardedCall = null;
        pendingInterstitialCall = null;
        pendingBannerCall = null;

        if (bannerView != null) {
            bannerView.destroy();
            bannerView = null;
        }

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
