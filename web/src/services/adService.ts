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

// Ad result types - re-export from adProvider for backward compatibility
import type { AdResult } from './adProvider';
export type { AdResult };

// Re-export isOnline from connectivityService for backward compatibility
import { isOnline as checkOnline } from './connectivityService';
import { mockAdProvider } from './mockAdProvider';
import { levelPlayAdProvider } from './levelPlayProvider';
import { Capacitor } from '@capacitor/core';
import type { AdProvider } from './adProvider';

export function isOnline(): boolean {
  return checkOnline();
}

// Internal ad provider - can be swapped for real SDK integration
const adProvider: AdProvider = Capacitor.isNativePlatform() ? levelPlayAdProvider : mockAdProvider;

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

let rewardedAdInFlight = false;
let rewardedMemoryTrack: DailyAdTrack | null = null;

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

function isValidDailyTrack(value: unknown): value is DailyAdTrack {
  if (!value || typeof value !== 'object') return false;
  const track = value as Partial<DailyAdTrack>;
  return (
    typeof track.date === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(track.date) &&
    typeof track.count === 'number' &&
    Number.isInteger(track.count) &&
    track.count >= 0
  );
}

function createTodayTrack(): DailyAdTrack {
  return { date: getTodayDate(), count: 0 };
}

function getDailyAdTrack(): DailyAdTrack {
  const today = getTodayDate();

  if (rewardedMemoryTrack?.date === today) {
    return rewardedMemoryTrack;
  }

  try {
    const stored = localStorage.getItem(REWARDED_ADS_KEY);
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      if (isValidDailyTrack(parsed) && parsed.date === today) {
        const safeTrack: DailyAdTrack = {
          date: parsed.date,
          count: Math.min(parsed.count, STAR_ECONOMY.limits.maxRewardedAdsPerDay),
        };
        rewardedMemoryTrack = safeTrack;
        if (safeTrack.count !== parsed.count) {
          try {
            localStorage.setItem(REWARDED_ADS_KEY, JSON.stringify(safeTrack));
          } catch {}
        }
        return safeTrack;
      }
    }
  } catch {
    // Fall back to the in-memory tracker.
  }

  const track = createTodayTrack();
  rewardedMemoryTrack = track;

  try {
    localStorage.setItem(REWARDED_ADS_KEY, JSON.stringify(track));
  } catch {
    // Keep the in-memory tracker when storage is unavailable.
  }

  return track;
}

function incrementDailyAdCount(): number {
  const track = getDailyAdTrack();
  const newCount = Math.min(
    track.count + 1,
    STAR_ECONOMY.limits.maxRewardedAdsPerDay
  );

  const updated: DailyAdTrack = {
    date: track.date,
    count: newCount,
  };
  rewardedMemoryTrack = updated;

  try {
    localStorage.setItem(REWARDED_ADS_KEY, JSON.stringify(updated));
  } catch {
    // Keep the in-memory count for this session.
  }

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
      const parsed: unknown = JSON.parse(stored);
      const today = getTodayDate();
      if (isValidDailyTrack(parsed) && parsed.date === today) {
        return {
          date: parsed.date,
          count: Math.min(parsed.count, INTERSTITIAL_CONFIG.maxPerDay),
        };
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
  try {
    localStorage.setItem(INTERSTITIAL_ADS_KEY, JSON.stringify(track));
  } catch {}
  return track;
}

function incrementInterstitialDailyCount(): number {
  const track = getInterstitialDailyTrack();
  const newCount = Math.min(track.count + 1, INTERSTITIAL_CONFIG.maxPerDay);
  const updated: DailyAdTrack = {
    date: track.date,
    count: newCount,
  };
  try {
    localStorage.setItem(INTERSTITIAL_ADS_KEY, JSON.stringify(updated));
  } catch {}
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
      const parsed = Number(stored);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    }
  } catch {
    // Ignore parse errors
  }
  return 0;
}

function setLastInterstitialTime(): void {
  try {
    localStorage.setItem(INTERSTITIAL_COOLDOWN_KEY, Date.now().toString());
  } catch {}
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

// ============================================================
// PUBLIC AD SERVICE API
// ============================================================
// This is the main entry point for the app to interact with ads.
// All business logic (limits, cooldowns, connectivity) lives here.
// The provider only handles actual ad display.

export const adService = {
  async showRewardedAd(): Promise<AdResult> {
    if (rewardedAdInFlight) {
      return { success: false, error: 'AD_NOT_AVAILABLE' };
    }

    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    if (!canWatchRewardedAd()) {
      return { success: false, error: 'DAILY_LIMIT_REACHED' };
    }

    rewardedAdInFlight = true;

    try {
      const result = await adProvider.showRewardedAd();

      // Only a successful provider result consumes one daily allowance.
      if (result.success) {
        incrementDailyAdCount();
      }

      return result;
    } finally {
      rewardedAdInFlight = false;
    }
  },

  async showInterstitialAd(): Promise<AdResult> {
    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    if (!canShowInterstitialToday()) {
      return { success: false, error: 'DAILY_LIMIT_REACHED' };
    }

    if (isInterstitialCooldownActive()) {
      return { success: false, error: 'AD_NOT_AVAILABLE' };
    }

    const result = await adProvider.showInterstitialAd();

    if (result.success) {
      incrementInterstitialDailyCount();
      setLastInterstitialTime();
    }

    return result;
  },

  async showBannerAd(): Promise<AdResult> {
    if (!isOnline()) {
      return { success: false, error: 'NO_CONNECTION' };
    }

    return await adProvider.showBannerAd();
  },
};
