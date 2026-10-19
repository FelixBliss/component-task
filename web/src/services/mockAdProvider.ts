// Web ad provider: Bliss Innovation self-promo, not a third-party ad network.
import type { AdProvider, AdResult } from "./adProvider";
import { showWebPromoAd } from "./webPromoAd";

export class MockAdProvider implements AdProvider {
  async showRewardedAd(): Promise<AdResult> {
    // Reward only after the promotion overlay completes its 10-second run.
    return showWebPromoAd("rewarded");
  }

  async showInterstitialAd(): Promise<AdResult> {
    // Show the same Bliss Innovation promotion between content.
    return showWebPromoAd("interstitial");
  }

  async showBannerAd(): Promise<AdResult> {
    // The compact web banner is rendered by BannerAd.tsx.
    return { success: true, event: "WEB_PROMO_BANNER" };
  }

  async hideBannerAd(): Promise<AdResult> {
    return { success: true };
  }
}

export const mockAdProvider = new MockAdProvider();
