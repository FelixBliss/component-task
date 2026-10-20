import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { adService } from "../services/adService";

/**
 * Keeps the native Unity Ads banner unchanged on Android.
 * Monetag In-Page Push is loaded once from web/index.html and positions its
 * own web ad; do not render a second web banner or duplicate the Monetag tag.
 */
export default function BannerAd() {
  useEffect(() => {
    const isNative = Capacitor.isNativePlatform();
    if (!isNative) return;

    const syncBanner = () => {
      if (navigator.onLine) {
        void adService.showBannerAd().catch(() => undefined);
      }
    };

    const onOnline = () => syncBanner();
    const onOffline = () => {
      void adService.hideBannerAd().catch(() => undefined);
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    syncBanner();

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      void adService.hideBannerAd().catch(() => undefined);
    };
  }, []);

  // The Monetag web zone is global and self-positioning, not an inline slot.
  // Android continues using the native Unity banner above.
  return null;
}
