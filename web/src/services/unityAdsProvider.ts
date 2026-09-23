import { registerPlugin, Capacitor } from '@capacitor/core';
import type { AdProvider, AdResult } from './adProvider';

interface UnityAdsPlugin {
  initialize(): Promise<AdResult>;
  showRewarded(): Promise<AdResult>;
  showInterstitial(): Promise<AdResult>;
  showBanner(): Promise<AdResult>;
  hideBanner(): Promise<AdResult>;
}

const UnityAds = registerPlugin<UnityAdsPlugin>('UnityAds');

export class UnityAdsProvider implements AdProvider {
  private initialized = false;

  private async initialize(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      return { success: false, error: 'AD_NOT_AVAILABLE' };
    }

    if (this.initialized) {
      return { success: true };
    }

    try {
      const result = await UnityAds.initialize();
      if (result.success) {
        this.initialized = true;
      }
      return result;
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async showRewardedAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      return await UnityAds.showRewarded();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async showInterstitialAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      return await UnityAds.showInterstitial();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async showBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;

    try {
      return await UnityAds.showBanner();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async hideBannerAd(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      return { success: true };
    }

    try {
      return await UnityAds.hideBanner();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }
}

export const unityAdsProvider = new UnityAdsProvider();
