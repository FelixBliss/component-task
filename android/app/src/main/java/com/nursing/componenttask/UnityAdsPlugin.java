package com.my.componenttask;

import android.app.Activity;
import android.graphics.Color;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;

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

@CapacitorPlugin(name = "UnityAds")
public class UnityAdsPlugin extends Plugin {
    private static final String GAME_ID = BuildConfig.UNITY_ADS_GAME_ID;
    private static final String INTERSTITIAL_ID = BuildConfig.UNITY_ADS_INTERSTITIAL_ID;
    private static final String REWARDED_ID = BuildConfig.UNITY_ADS_REWARDED_ID;
    private static final String BANNER_ID = BuildConfig.UNITY_ADS_BANNER_ID;

    private boolean initialized = false;
    private PluginCall pendingRewardedCall;
    private PluginCall pendingInterstitialCall;
    private FrameLayout bannerContainer;
    private BannerView bannerView;
    private volatile boolean rewardedReady = false;
    private volatile boolean interstitialReady = false;

    private final IUnityAdsLoadListener rewardedLoadListener = new IUnityAdsLoadListener() {
        @Override
        public void onUnityAdsAdLoaded(String placementId) {
            if (REWARDED_ID.equals(placementId)) {
                rewardedReady = true;
                Activity activity = getActivity();
                if (activity != null && pendingRewardedCall != null) {
                    PluginCall call = pendingRewardedCall;
                    activity.runOnUiThread(() -> {
                        if (pendingRewardedCall == call && rewardedReady) {
                            UnityAds.show(activity, REWARDED_ID, new UnityAdsShowOptions(), rewardedShowListener);
                        }
                    });
                }
            }
        }

        @Override
        public void onUnityAdsFailedToLoad(
                String placementId,
                UnityAds.UnityAdsLoadError error,
                String message
        ) {
            if (REWARDED_ID.equals(placementId)) {
                rewardedReady = false;
                finishCall(pendingRewardedCall, false, "AD_NOT_AVAILABLE");
                pendingRewardedCall = null;
            }
        }
    };

    private final IUnityAdsLoadListener interstitialLoadListener = new IUnityAdsLoadListener() {
        @Override
        public void onUnityAdsAdLoaded(String placementId) {
            if (INTERSTITIAL_ID.equals(placementId)) {
                interstitialReady = true;
                Activity activity = getActivity();
                if (activity != null && pendingInterstitialCall != null) {
                    PluginCall call = pendingInterstitialCall;
                    activity.runOnUiThread(() -> {
                        if (pendingInterstitialCall == call && interstitialReady) {
                            UnityAds.show(activity, INTERSTITIAL_ID, new UnityAdsShowOptions(), interstitialShowListener);
                        }
                    });
                }
            }
        }

        @Override
        public void onUnityAdsFailedToLoad(
                String placementId,
                UnityAds.UnityAdsLoadError error,
                String message
        ) {
            if (INTERSTITIAL_ID.equals(placementId)) {
                interstitialReady = false;
                finishCall(pendingInterstitialCall, false, "AD_NOT_AVAILABLE");
                pendingInterstitialCall = null;
            }
        }
    };

    private final IUnityAdsShowListener rewardedShowListener = new IUnityAdsShowListener() {
        @Override
        public void onUnityAdsShowFailure(
                String placementId,
                UnityAds.UnityAdsShowError error,
                String message
        ) {
            rewardedReady = false;
            finishCall(pendingRewardedCall, false, "AD_NOT_AVAILABLE");
            pendingRewardedCall = null;
        }

        @Override
        public void onUnityAdsShowStart(String placementId) {
        }

        @Override
        public void onUnityAdsShowClick(String placementId) {
        }

        @Override
        public void onUnityAdsShowComplete(
                String placementId,
                UnityAds.UnityAdsShowCompletionState state
        ) {
            if (REWARDED_ID.equals(placementId)) {
                rewardedReady = false;
                boolean completed = state == UnityAds.UnityAdsShowCompletionState.COMPLETED;
                finishCall(pendingRewardedCall, completed, completed ? null : "AD_NOT_AVAILABLE");
                pendingRewardedCall = null;
                Activity activity = getActivity();
                if (activity != null) {
                    activity.runOnUiThread(() -> {
                        if (!rewardedReady) {
                            UnityAds.load(REWARDED_ID, rewardedLoadListener);
                        }
                    });
                }
            }
        }
    };

    private final IUnityAdsShowListener interstitialShowListener = new IUnityAdsShowListener() {
        @Override
        public void onUnityAdsShowFailure(
                String placementId,
                UnityAds.UnityAdsShowError error,
                String message
        ) {
            interstitialReady = false;
            finishCall(pendingInterstitialCall, false, "AD_NOT_AVAILABLE");
            pendingInterstitialCall = null;
        }

        @Override
        public void onUnityAdsShowStart(String placementId) {
            if (INTERSTITIAL_ID.equals(placementId)) {
                interstitialReady = false;
                finishCall(pendingInterstitialCall, true, null);
                pendingInterstitialCall = null;
            }
        }

        @Override
        public void onUnityAdsShowClick(String placementId) {
        }

        @Override
        public void onUnityAdsShowComplete(
                String placementId,
                UnityAds.UnityAdsShowCompletionState state
        ) {
            if (INTERSTITIAL_ID.equals(placementId)) {
                Activity activity = getActivity();
                if (activity != null) {
                    activity.runOnUiThread(() -> {
                        if (!interstitialReady) {
                            UnityAds.load(INTERSTITIAL_ID, interstitialLoadListener);
                        }
                    });
                }
            }
        }
    };

    private final BannerView.IListener bannerListener = new BannerView.IListener() {
        @Override
        public void onBannerLoaded(BannerView bannerAdView) {
        }

        @Override
        public void onBannerFailedToLoad(
                BannerView bannerAdView,
                BannerErrorInfo errorInfo
        ) {
        }

        @Override
        public void onBannerClick(BannerView bannerAdView) {
        }

        @Override
        public void onBannerShown(BannerView bannerAdView) {
        }

        @Override
        public void onBannerLeftApplication(BannerView bannerAdView) {
        }
    };

    @PluginMethod
    public void initialize(PluginCall call) {
        if (initialized || UnityAds.isInitialized()) {
            initialized = true;
            resolveSuccess(call);
            return;
        }

        if (isBlank(GAME_ID)) {
            reject(call, "UNITY_ADS_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        UnityAds.initialize(
                activity.getApplicationContext(),
                GAME_ID,
                false,
                new IUnityAdsInitializationListener() {
                    @Override
                    public void onInitializationComplete() {
                        initialized = true;
                        activity.runOnUiThread(() -> {
                            preloadAds(activity);
                            resolveSuccess(call);
                        });
                    }

                    @Override
                    public void onInitializationFailed(
                            UnityAds.UnityAdsInitializationError error,
                            String message
                    ) {
                        reject(call, "INIT_FAILED");
                    }
                }
        );
    }

    @PluginMethod
    public void showRewarded(PluginCall call) {
        if (!ensureInitialized(call)) return;
        if (isBlank(REWARDED_ID)) {
            reject(call, "UNITY_ADS_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (pendingRewardedCall != null) {
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }

            pendingRewardedCall = call;

            if (!rewardedReady) {
                UnityAds.load(REWARDED_ID, rewardedLoadListener);
                return;
            }

            UnityAds.show(activity, REWARDED_ID, new UnityAdsShowOptions(), rewardedShowListener);
        });
    }

    @PluginMethod
    public void showInterstitial(PluginCall call) {
        if (!ensureInitialized(call)) return;
        if (isBlank(INTERSTITIAL_ID)) {
            reject(call, "UNITY_ADS_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (pendingInterstitialCall != null) {
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }

            pendingInterstitialCall = call;

            if (!interstitialReady) {
                UnityAds.load(INTERSTITIAL_ID, interstitialLoadListener);
                return;
            }

            UnityAds.show(activity, INTERSTITIAL_ID, new UnityAdsShowOptions(), interstitialShowListener);
        });
    }

    @PluginMethod
    public void showBanner(PluginCall call) {
        if (!ensureInitialized(call)) return;
        if (isBlank(BANNER_ID)) {
            reject(call, "UNITY_ADS_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerView == null) {
                bannerView = new BannerView(
                        activity,
                        BANNER_ID,
                        new UnityBannerSize(320, 50)
                );
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
            bannerView.load();
            resolveSuccess(call);
        });
    }

    @PluginMethod
    public void hideBanner(PluginCall call) {
        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerContainer != null) {
                bannerContainer.setVisibility(FrameLayout.GONE);
            }
            resolveSuccess(call);
        });
    }

    private void preloadAds(Activity activity) {
        if (!isBlank(REWARDED_ID) && !rewardedReady) {
            UnityAds.load(REWARDED_ID, rewardedLoadListener);
        }

        if (!isBlank(INTERSTITIAL_ID) && !interstitialReady) {
            UnityAds.load(INTERSTITIAL_ID, interstitialLoadListener);
        }
    }

    private boolean ensureInitialized(PluginCall call) {
        if (!initialized && !UnityAds.isInitialized()) {
            reject(call, "UNITY_ADS_NOT_INITIALIZED");
            return false;
        }
        initialized = true;
        return true;
    }

    private void finishCall(PluginCall call, boolean success, String error) {
        if (call == null) return;
        if (success) {
            resolveSuccess(call);
        } else {
            reject(call, error == null ? "AD_NOT_AVAILABLE" : error);
        }
    }

    private void resolveSuccess(PluginCall call) {
        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    private void reject(PluginCall call, String error) {
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
