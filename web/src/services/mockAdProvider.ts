// Mock Ad Provider - simulates ad network behavior for development/testing
// This provider simulates the behavior of a real ad network without actual SDK integration.

import type { AdProvider, AdResult } from './adProvider';

/**
 * MockAdProvider - A simulated ad provider for development and testing.
 * 
 * This provider mimics how a real ad network would behave:
 * - Simulates network latency with short delays
 * - Returns success/failure results
 * - Does NOT manage business logic (limits, cooldowns, connectivity)
 * 
 * When integrating a real ad network (Unity Ads, LevelPlay, AdMob, etc.),
 * create a new provider implementing the AdProvider interface and replace
 * this one in adService.ts.
 */
export class MockAdProvider implements AdProvider {
  async showRewardedAd(): Promise<AdResult> {
    // Simulate short ad experience (network latency + ad display)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful ad completion
    return { success: true };
  }

  async showInterstitialAd(): Promise<AdResult> {
    // Simulate interstitial ad display
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulate successful ad display
    return { success: true };
  }

  async showBannerAd(): Promise<AdResult> {
    return { success: true };
  }

  async hideBannerAd(): Promise<AdResult> {
    return { success: true };
  }
}

// Export singleton instance for use in adService
export const mockAdProvider = new MockAdProvider();
