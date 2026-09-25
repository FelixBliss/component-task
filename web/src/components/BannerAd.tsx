import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { adService } from "../services/adService";

/**
 * BannerAd manages the REAL Unity Ads banner on Android (rendered natively
 * by the UnityAds Capacitor plugin). On web/browser development it renders
 * nothing — mock banner UI has been removed entirely.
 */
export default function BannerAd() {
  const [online, setOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const isNative = Capacitor.isNativePlatform();

    const syncBanner = () => {
      if (isNative && navigator.onLine) {
        void adService.showBannerAd().catch(() => undefined);
      }
    };

    const onOnline = () => {
      setOnline(true);
      syncBanner();
    };
    const onOffline = () => {
      setOnline(false);
      if (isNative) {
        void adService.hideBannerAd().catch(() => undefined);
      }
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    // Only Android gets a real native Unity banner; web never shows mock ads.
    syncBanner();

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      if (isNative) {
        void adService.hideBannerAd().catch(() => undefined);
      }
    };
  }, []);

  // No DOM banner is rendered anywhere:
  // - Android: the Unity banner is drawn by the native plugin.
  // - Web dev: no mock banner placeholder is displayed.
  void online;
  return null;
}
