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

// Track interstitial ads shown per day
const INTERSTITIAL_ADS_KEY = 'component-task-interstitial-ads-daily';
const INTERSTITIAL_COOLDOWN_KEY = 'component-task-interstitial-cooldown';

// Interstitial ad configuration
export const INTERSTITIAL_CONFIG = {
  cooldownMinutes: 5,
  maxPerDay: 3,
} as const;

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

// Interstitial ad tracking functions
function getInterstitialDailyTrack(): DailyAdTrack {
  try {
    const stored = localStorage.getItem(INTERSTITIAL_ADS_KEY);
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
  localStorage.setItem(INTERSTITIAL_ADS_KEY, JSON.stringify(track));
  return track;
}

function incrementInterstitialDailyCount(): number {
  const track = getInterstitialDailyTrack();
  const newCount = track.count + 1;
  const updated: DailyAdTrack = {
    date: track.date,
    count: newCount,
  };
  localStorage.setItem(INTERSTITIAL_ADS_KEY, JSON.stringify(updated));
  return newCount;
}

export function getInterstitialAdsToday(): number {
  return getInterstitialDailyTrack().count;
}

function canShowInterstitialToday(): boolean {
  const track = getInterstitialDailyTrack();
  return track.count < INTERSTITIAL_CONFIG.maxPerDay;
}

function getLastInterstitialTime(): number {
  try {
    const stored = localStorage.getItem(INTERSTITIAL_COOLDOWN_KEY);
    if (stored) {
      return parseInt(stored, 10);
    }
  } catch {
    // Ignore parse errors
  }
  return 0;
}

function setLastInterstitialTime(): void {
  localStorage.setItem(INTERSTITIAL_COOLDOWN_KEY, Date.now().toString());
}

function isInterstitialCooldownActive(): boolean {
  const lastTime = getLastInterstitialTime();
  if (lastTime === 0) {
    return false;
  }
  const now = Date.now();
  const elapsedMinutes = (now - lastTime) / (1000 * 60);
  return elapsedMinutes < INTERSTITIAL_CONFIG.cooldownMinutes;
}

export function canShowInterstitialAd(): boolean {
  if (!isOnline()) {
    return false;
  }
  if (!canShowInterstitialToday()) {
    return false;
  }
  if (isInterstitialCooldownActive()) {
    return false;
  }
  return true;
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

    // Check daily limit and cooldown before showing
    if (!canShowInterstitialToday()) {
      return { success: false, error: 'DAILY_LIMIT_REACHED' };
    }

    if (isInterstitialCooldownActive()) {
      return { success: false, error: 'AD_NOT_AVAILABLE' };
    }

    // Simulate successful display
    await new Promise(resolve => setTimeout(resolve, 500));

    // Track the ad after successful display
    incrementInterstitialDailyCount();
    setLastInterstitialTime();

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
