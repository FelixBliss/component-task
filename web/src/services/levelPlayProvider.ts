import { registerPlugin, Capacitor } from '@capacitor/core';
import type { AdProvider, AdResult } from './adProvider';

interface LevelPlayPlugin {
  initialize(): Promise<AdResult>;
  showRewarded(): Promise<AdResult>;
  showInterstitial(): Promise<AdResult>;
  showBanner(): Promise<AdResult>;
  hideBanner(): Promise<AdResult>;
}

const LevelPlayAds = registerPlugin<LevelPlayPlugin>('LevelPlayAds');

export class LevelPlayAdProvider implements AdProvider {
  private initialized = false;

  private async initialize(): Promise<AdResult> {
    if (!Capacitor.isNativePlatform()) {
      return { success: false, error: 'AD_NOT_AVAILABLE' };
    }

    if (this.initialized) {
      return { success: true };
    }

    const result = await LevelPlayAds.initialize();
    if (result.success) {
      this.initialized = true;
    }
    return result;
  }

  async showRewardedAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    return LevelPlayAds.showRewarded();
  }

  async showInterstitialAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    return LevelPlayAds.showInterstitial();
  }

  async showBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    return LevelPlayAds.showBanner();
  }

  async hideBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    return LevelPlayAds.hideBanner();
  }
}

export const levelPlayAdProvider = new LevelPlayAdProvider();
