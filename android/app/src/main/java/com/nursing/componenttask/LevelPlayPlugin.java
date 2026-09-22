package com.nursing.componenttask;

import android.app.Activity;
import android.content.Context;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.unity3d.mediation.LevelPlay;
import com.unity3d.mediation.LevelPlayAdError;
import com.unity3d.mediation.LevelPlayAdInfo;
import com.unity3d.mediation.LevelPlayAdSize;
import com.unity3d.mediation.LevelPlayBannerAdView;
import com.unity3d.mediation.LevelPlayBannerAdViewListener;
import com.unity3d.mediation.LevelPlayInitError;
import com.unity3d.mediation.LevelPlayInitListener;
import com.unity3d.mediation.LevelPlayInitRequest;
import com.unity3d.mediation.LevelPlayInterstitialAd;
import com.unity3d.mediation.LevelPlayInterstitialAdListener;
import com.unity3d.mediation.LevelPlayReward;
import com.unity3d.mediation.LevelPlayRewardedAd;
import com.unity3d.mediation.LevelPlayRewardedAdListener;

@CapacitorPlugin(name = "LevelPlayAds")
public class LevelPlayPlugin extends Plugin {
    private LevelPlayRewardedAd rewardedAd;
    private LevelPlayInterstitialAd interstitialAd;
    private LevelPlayBannerAdView bannerAd;
    private FrameLayout bannerContainer;
    private boolean initialized = false;
    private PluginCall pendingRewardedCall;
    private boolean rewardedGranted = false;

    private static final String APP_KEY = BuildConfig.LEVELPLAY_APP_KEY;
    private static final String REWARDED_AD_UNIT_ID = BuildConfig.LEVELPLAY_REWARDED_AD_UNIT_ID;
    private static final String INTERSTITIAL_AD_UNIT_ID = BuildConfig.LEVELPLAY_INTERSTITIAL_AD_UNIT_ID;
    private static final String BANNER_AD_UNIT_ID = BuildConfig.LEVELPLAY_BANNER_AD_UNIT_ID;

    @PluginMethod
    public void initialize(PluginCall call) {
        if (initialized) {
            resolveSuccess(call);
            return;
        }

        if (isBlank(APP_KEY)) {
            reject(call, "LEVELPLAY_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        LevelPlayInitRequest request = new LevelPlayInitRequest.Builder(APP_KEY).build();
        LevelPlay.init(activity.getApplicationContext(), request, new LevelPlayInitListener() {
            @Override
            public void onInitSuccess(com.unity3d.mediation.LevelPlayConfiguration configuration) {
                initialized = true;
                activity.runOnUiThread(() -> {
                    createAds(activity);
                    resolveSuccess(call);
                });
            }

            @Override
            public void onInitFailed(@NonNull LevelPlayInitError error) {
                reject(call, "INIT_FAILED");
            }
        });
    }

    @PluginMethod
    public void showRewarded(PluginCall call) {
        if (!ensureInitialized(call) || isBlank(REWARDED_AD_UNIT_ID)) {
            if (isBlank(REWARDED_AD_UNIT_ID)) reject(call, "LEVELPLAY_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (rewardedAd == null) {
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }
            if (!rewardedAd.isAdReady()) {
                rewardedAd.loadAd();
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }

            pendingRewardedCall = call;
            rewardedGranted = false;
            rewardedAd.showAd(activity);
        });
    }

    @PluginMethod
    public void showInterstitial(PluginCall call) {
        if (!ensureInitialized(call) || isBlank(INTERSTITIAL_AD_UNIT_ID)) {
            if (isBlank(INTERSTITIAL_AD_UNIT_ID)) reject(call, "LEVELPLAY_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (interstitialAd == null || !interstitialAd.isAdReady()) {
                if (interstitialAd != null) interstitialAd.loadAd();
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }
            interstitialAd.showAd(activity);
            resolveSuccess(call);
        });
    }

    @PluginMethod
    public void showBanner(PluginCall call) {
        if (!ensureInitialized(call) || isBlank(BANNER_AD_UNIT_ID)) {
            if (isBlank(BANNER_AD_UNIT_ID)) reject(call, "LEVELPLAY_NOT_CONFIGURED");
            return;
        }

        Activity activity = getActivity();
        if (activity == null) {
            reject(call, "NO_ACTIVITY");
            return;
        }

        activity.runOnUiThread(() -> {
            if (bannerAd == null) {
                reject(call, "AD_NOT_AVAILABLE");
                return;
            }
            if (bannerContainer == null) {
                bannerContainer = new FrameLayout(activity);
                bannerContainer.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                activity.addContentView(
                    bannerContainer,
                    new ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.WRAP_CONTENT
                    )
                );
                FrameLayout.LayoutParams params =
                    (FrameLayout.LayoutParams) bannerContainer.getLayoutParams();
                params.gravity = Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL;
                bannerContainer.setLayoutParams(params);
                bannerContainer.setPadding(0, 0, 0, 0);
            }

            if (bannerAd.getParent() == null) {
                bannerContainer.addView(
                    bannerAd,
                    new FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.WRAP_CONTENT,
                        Gravity.CENTER_HORIZONTAL
                    )
                );
            }

            bannerAd.loadAd();
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

    private void createAds(Activity activity) {
        if (!isBlank(REWARDED_AD_UNIT_ID)) {
            rewardedAd = new LevelPlayRewardedAd(REWARDED_AD_UNIT_ID);
            rewardedAd.setListener(new LevelPlayRewardedAdListener() {
                @Override public void onAdLoaded(LevelPlayAdInfo adInfo) {}
                @Override public void onAdLoadFailed(LevelPlayAdError error) {}
                @Override public void onAdDisplayed(LevelPlayAdInfo adInfo) {}
                @Override public void onAdRewarded(@NonNull LevelPlayReward reward, @NonNull LevelPlayAdInfo adInfo) {
                    rewardedGranted = true;
                    if (pendingRewardedCall != null) {
                        resolveSuccess(pendingRewardedCall);
                        pendingRewardedCall = null;
                    }
                }
                @Override public void onAdDisplayFailed(LevelPlayAdError error, LevelPlayAdInfo adInfo) {
                    finishRewarded(false, "AD_NOT_AVAILABLE");
                }
                @Override public void onAdClicked(LevelPlayAdInfo adInfo) {}
                @Override public void onAdClosed(LevelPlayAdInfo adInfo) {
                    if (!rewardedGranted) {
                        finishRewarded(false, "AD_NOT_AVAILABLE");
                    }
                    rewardedAd.loadAd();
                }
                @Override public void onAdInfoChanged(LevelPlayAdInfo adInfo) {}
            });
            rewardedAd.loadAd();
        }

        if (!isBlank(INTERSTITIAL_AD_UNIT_ID)) {
            interstitialAd = new LevelPlayInterstitialAd(INTERSTITIAL_AD_UNIT_ID);
            interstitialAd.setListener(new LevelPlayInterstitialAdListener() {
                @Override public void onAdLoaded(LevelPlayAdInfo adInfo) {}
                @Override public void onAdLoadFailed(LevelPlayAdError error) {}
                @Override public void onAdDisplayed(LevelPlayAdInfo adInfo) {}
                @Override public void onAdDisplayFailed(LevelPlayAdError error, LevelPlayAdInfo adInfo) {}
                @Override public void onAdClicked(LevelPlayAdInfo adInfo) {}
                @Override public void onAdClosed(LevelPlayAdInfo adInfo) {
                    interstitialAd.loadAd();
                }
                @Override public void onAdInfoChanged(LevelPlayAdInfo adInfo) {}
            });
            interstitialAd.loadAd();
        }

        if (!isBlank(BANNER_AD_UNIT_ID)) {
            bannerAd = new LevelPlayBannerAdView(activity, BANNER_AD_UNIT_ID);
            bannerAd.setAdSize(LevelPlayAdSize.createAdaptiveAdSize(activity));
            bannerAd.setBannerListener(new LevelPlayBannerAdViewListener() {
                @Override public void onAdLoaded(LevelPlayAdInfo adInfo) {}
                @Override public void onAdLoadFailed(LevelPlayAdError error) {}
                @Override public void onAdDisplayed(LevelPlayAdInfo adInfo) {}
                @Override public void onAdDisplayFailed(LevelPlayAdInfo adInfo, LevelPlayAdError error) {}
                @Override public void onAdClicked(LevelPlayAdInfo adInfo) {}
                @Override public void onAdExpanded(LevelPlayAdInfo adInfo) {}
                @Override public void onAdCollapsed(LevelPlayAdInfo adInfo) {}
                @Override public void onAdLeftApplication(LevelPlayAdInfo adInfo) {}
            });
        }
    }

    private boolean ensureInitialized(PluginCall call) {
        if (!initialized) {
            reject(call, "LEVELPLAY_NOT_INITIALIZED");
            return false;
        }
        return true;
    }

    private void finishRewarded(boolean success, String error) {
        if (pendingRewardedCall == null) return;
        PluginCall call = pendingRewardedCall;
        pendingRewardedCall = null;
        if (success) resolveSuccess(call);
        else reject(call, error);
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
        if (rewardedAd != null) rewardedAd.destroy();
        if (interstitialAd != null) interstitialAd.destroy();
        if (bannerAd != null) bannerAd.destroy();
        if (bannerContainer != null) {
            ViewGroup parent = (ViewGroup) bannerContainer.getParent();
            if (parent != null) parent.removeView(bannerContainer);
        }
        pendingRewardedCall = null;
        super.handleOnDestroy();
    }
}
