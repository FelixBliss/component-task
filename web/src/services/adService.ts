// Star economy configuration
export const STAR_ECONOMY = {
  startingBalance: 25,
  costs: {
    premiumProcedureVideo: 3,
    premiumQuiz: 2,
    futureAIFeature: 3,
    futurePremiumResource: 5,
  },
  rewards: {
    rewardedAd: 5,
  },
  limits: {
    maxRewardedAdsPerDay: 5,
  },
} as const;

// Ad result types
export type AdResult =
  | { success: true }
  | { success: false; error: 'NO_CONNECTION' | 'DAILY_LIMIT_REACHED' | 'AD_NOT_AVAILABLE' | 'UNKNOWN_ERROR' };

// Mock ad service interface
export interface AdService {
  showRewardedAd(): Promise<AdResult>;
  showInterstitialAd(): Promise<AdResult>;
  showBannerAd(): Promise<AdResult>;
}

// Re-export isOnline from connectivityService for backward compatibility
import { isOnline as checkOnline } from './connectivityService';

export function isOnline(): boolean {
  return checkOnline();
}

// Track rewarded ads watched per day
const REWARDED_ADS_KEY = 'component-task-rewarded-ads-daily';

interface DailyAdTrack {
  date: string;
  count: number;
}

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

function getDailyAdTrack(): DailyAdTrack {
  try {
    const stored = localStorage.getItem(REWARDED_ADS_KEY);
    if (stored) {
      const track: DailyAdTrack = JSON.parse(stored);
      const today = getTodayDate();
      if (track.date === today) {
        return track;
      }
    }
  } catch {
    // Ignore parse errors
  }
  // Reset for new day or first time
  const track: DailyAdTrack = {
    date: getTodayDate(),
    count: 0,
  };
  localStorage.setItem(REWARDED_ADS_KEY, JSON.stringify(track));
  return track;
}

function incrementDailyAdCount(): number {
  const track = getDailyAdTrack();
  const newCount = track.count + 1;
  const updated: DailyAdTrack = {
    date: track.date,
    count: newCount,
  };
  localStorage.setItem(REWARDED_ADS_KEY, JSON.stringify(updated));
  return newCount;
}

export function getRewardedAdsToday(): number {
  return getDailyAdTrack().count;
}

export function canWatchRewardedAd(): boolean {
  const track = getDailyAdTrack();
  return track.count < STAR_ECONOMY.limits.maxRewardedAdsPerDay;
}

// Mock ad service implementation
class MockAdService implements AdService {
  async showRewardedAd(): Promise<AdResult> {
    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    if (!canWatchRewardedAd()) {
      return { success: false, error: 'DAILY_LIMIT_REACHED' };
    }

    // Simulate short ad experience
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Increment count after successful completion
    incrementDailyAdCount();

    return { success: true };
  }

  async showInterstitialAd(): Promise<AdResult> {
    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    // Simulate successful display
    await new Promise(resolve => setTimeout(resolve, 500));

    return { success: true };
  }

  async showBannerAd(): Promise<AdResult> {
    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    // Simulate successful availability
    return { success: true };
  }
}

// Export singleton instance
export const adService: AdService = new MockAdService();
