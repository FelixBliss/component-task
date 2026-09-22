// Ad Provider Interface
// This defines the contract that all ad providers must implement.
// The provider is responsible ONLY for showing ads, not for business logic.

export interface AdResult {
  success: boolean;
  error?: 'NO_CONNECTION' | 'DAILY_LIMIT_REACHED' | 'AD_NOT_AVAILABLE' | 'UNKNOWN_ERROR' | 'LEVELPLAY_NOT_CONFIGURED' | 'LEVELPLAY_NOT_INITIALIZED';
}

/**
 * AdProvider interface - defines the contract for ad network implementations.
 * 
 * Providers are responsible ONLY for:
 * - Actually displaying/showing the ad
 * - Returning success/failure status
 * 
 * Providers are NOT responsible for:
 * - Connectivity checks (handled by adService)
 * - Daily limits (handled by adService)
 * - Cooldowns (handled by adService)
 * - Star balance management (handled by creditService)
 * - Any business logic (handled by adService)
 */
export interface AdProvider {
  /**
   * Show a rewarded ad that users can watch voluntarily.
   * Should only be called when business rules allow it.
   * @returns AdResult indicating success or failure reason
   */
  showRewardedAd(): Promise<AdResult>;

  /**
   * Show an interstitial ad that appears between content.
   * Should only be called when business rules allow it.
   * @returns AdResult indicating success or failure reason
   */
  showInterstitialAd(): Promise<AdResult>;

  /**
   * Show/check availability of a banner ad.
   * Should only be called when connectivity allows it.
   * @returns AdResult indicating success or failure reason
   */
  showBannerAd(): Promise<AdResult>;
}
