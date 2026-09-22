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

    try {
      const result = await LevelPlayAds.initialize();
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
      return await LevelPlayAds.showRewarded();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async showInterstitialAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    try {
      return await LevelPlayAds.showInterstitial();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async showBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    try {
      return await LevelPlayAds.showBanner();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }

  async hideBannerAd(): Promise<AdResult> {
    const init = await this.initialize();
    if (!init.success) return init;
    try {
      return await LevelPlayAds.hideBanner();
    } catch {
      return { success: false, error: 'UNKNOWN_ERROR' };
    }
  }
}

export const levelPlayAdProvider = new LevelPlayAdProvider();
