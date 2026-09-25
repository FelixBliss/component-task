// Native Unity Ads provider (Android only).
// All ad display is delegated to the native `UnityAds` Capacitor plugin
// (android/app/src/main/java/com/my/componenttask/UnityAdsPlugin.java),
// which uses the CURRENT object-based Unity Ads Android SDK API (4.20.1):
// RewardedAd / InterstitialAd / RewardedShowListener.onRewarded() etc.
// Mock ads are NEVER used on Android — if Unity is unavailable a clear
// structured error is returned instead of silently falling back.

import { registerPlugin, Capacitor } from '@capacitor/core';
import type { AdProvider, AdResult } from './adProvider';

type AdError = NonNullable<AdResult['error']>;

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
  // The native plugin resolves failures as { success:false, error, event }, so
  // this path is mostly for missing-plugin rejections (e.g. not registered).
  const message =
    err instanceof Error ? err.message : typeof err === 'string' ? err : JSON.stringify(err ?? '');
  console.error('[UnityAdsProvider] native call failed:', message);
  return { success: false, error: 'AD_NOT_AVAILABLE', event: 'NATIVE_PLUGIN_UNAVAILABLE' };
}

/** Preserve the structured result reported by the native Unity plugin. */
function normalizeResult(result: AdResult | null | undefined): AdResult {
  if (!result || typeof result !== 'object') {
    return { success: false, error: 'UNKNOWN_ERROR', event: 'INVALID_NATIVE_RESULT' };
  }
  if (result.success) {
    return { success: true, event: result.event };
  }
  const error: AdError = result.error ?? 'AD_NOT_AVAILABLE';
  return {
    success: false,
    error,
    event: result.event,
  };
}

export class UnityAdsProvider implements AdProvider {
  private initPromise: Promise<AdResult> | null = null;

  /**
   * Initialize the Unity Ads SDK exactly once. Concurrent callers share the
   * same in-flight initialization promise, so no ad can be requested before
   * initialization has completed. On failure the promise is cleared so a
   * later call can retry initialization.
   */
  private initialize(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      // This provider must never run on web; adService routes web to mock.
      return Promise.resolve({ success: false, error: 'AD_NOT_AVAILABLE' });
    }

    if (!this.initPromise) {
      this.initPromise = UnityAds.initialize()
        .then((result): AdResult => {
          const normalized = normalizeResult(result);
          if (!normalized.success) {
            // Allow a retry on the next request after an initialization failure.
            this.initPromise = null;
          }
          return normalized;
        })
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
      // Native plugin uses the current RewardedAd API: it shows a cached,
      // non-expired ad or loads one first. success:true is returned ONLY
      // after RewardedShowListener.onRewarded() fired (REWARDED_EARNED).
      // Skips resolve { error: 'REWARDED_SKIPPED' } and load/show failures
      // resolve AD_LOAD_FAILED / AD_SHOW_FAILED — never a mock fallback.
      return normalizeResult(await UnityAds.showRewarded());
    } catch (err) {
      return toAdResult(err);
    }
  }

  async showInterstitialAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      // Native plugin uses the current InterstitialAd API; success is
      // reported once the interstitial actually starts showing.
      return normalizeResult(await UnityAds.showInterstitial());
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
      return normalizeResult(await UnityAds.showBanner());
    } catch (err) {
      return toAdResult(err);
    }
  }

  async hideBannerAd(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      return { success: true };
    }

    try {
      return normalizeResult(await UnityAds.hideBanner());
    } catch (err) {
      return toAdResult(err);
    }
  }
}

export const unityAdsProvider = new UnityAdsProvider();
