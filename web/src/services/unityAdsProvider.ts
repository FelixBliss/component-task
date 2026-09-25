// Native Unity Ads provider (Android only).
// All ad display is delegated to the native `UnityAds` Capacitor plugin
// (android/app/src/main/java/com/my/componenttask/UnityAdsPlugin.java),
// which uses the real Unity Ads SDK. Mock ads are NEVER used on Android.

import { registerPlugin, Capacitor } from '@capacitor/core';
import type { AdProvider, AdResult } from './adProvider';

type AdError = 'NO_CONNECTION' | 'DAILY_LIMIT_REACHED' | 'AD_NOT_AVAILABLE' | 'UNKNOWN_ERROR';

interface UnityAdsPlugin {
  initialize(): Promise<AdResult>;
  showRewarded(): Promise<AdResult>;
  showInterstitial(): Promise<AdResult>;
  showBanner(): Promise<AdResult>;
  hideBanner(): Promise<AdResult>;
}

const UnityAds = registerPlugin<UnityAdsPlugin>('UnityAds');

/** Normalize whatever the native side resolves/rejects into an AdResult. */
function toAdResult(err: unknown): AdResult {
  // The native plugin resolves failures as { success:false, error }, so this
  // path is mostly for missing-plugin rejections (e.g. not registered).
  const message =
    err instanceof Error ? err.message : typeof err === 'string' ? err : JSON.stringify(err ?? '');
  console.error('[UnityAdsProvider] native call failed:', message);
  return { success: false, error: 'AD_NOT_AVAILABLE' };
}

export class UnityAdsProvider implements AdProvider {
  private initPromise: Promise<AdResult> | null = null;

  /**
   * Initialize the Unity Ads SDK exactly once. Concurrent callers share the
   * same in-flight initialization promise, so no ad can be requested before
   * initialization has completed.
   */
  private initialize(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      // This provider must never run on web; adService routes web to mock.
      return Promise.resolve({ success: false, error: 'AD_NOT_AVAILABLE' });
    }

    if (!this.initPromise) {
      this.initPromise = UnityAds.initialize()
        .then((result): AdResult =>
          result && result.success
            ? { success: true }
            : { success: false, error: (result?.error as AdError) ?? 'AD_NOT_AVAILABLE' }
        )
        .catch((err): AdResult => {
          // Allow a retry on the next request after a failure.
          this.initPromise = null;
          return toAdResult(err);
        });
    }

    return this.initPromise;
  }

  async showRewardedAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      // Native plugin waits for the rewarded placement to LOAD before it
      // calls show(), and only resolves success when the user COMPLETES the
      // ad (UnityAdsShowCompletionState.COMPLETED).
      return await UnityAds.showRewarded();
    } catch (err) {
      return toAdResult(err);
    }
  }

  async showInterstitialAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      // Native plugin waits for the interstitial placement to LOAD before
      // calling show(); success is reported once the ad actually starts.
      return await UnityAds.showInterstitial();
    } catch (err) {
      return toAdResult(err);
    }
  }

  async showBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      // Native plugin loads a REAL Unity banner view and reports load
      // success/failure through the Unity banner listener.
      return await UnityAds.showBanner();
    } catch (err) {
      return toAdResult(err);
    }
  }

  async hideBannerAd(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      return { success: true };
    }

    try {
      return await UnityAds.hideBanner();
    } catch (err) {
      return toAdResult(err);
    }
  }
}

export const unityAdsProvider = new UnityAdsProvider();
