import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { adService } from "../services/adService";

export default function BannerAd() {
  const [online, setOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const onOnline = () => {
      setOnline(true);
      void adService.showBannerAd().catch(() => undefined);
    };
    const onOffline = () => {
      setOnline(false);
      if (Capacitor.isNativePlatform()) {
        void adService.hideBannerAd().catch(() => undefined);
      }
    };
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    if (navigator.onLine) {
      void adService.showBannerAd().catch(() => undefined);
    }

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      if (Capacitor.isNativePlatform()) {
        void adService.hideBannerAd().catch(() => undefined);
      }
    };
  }, []);

  if (!online) return null;

  if (Capacitor.isNativePlatform()) {
    return null;
  }

  return (
    <div className="banner-ad-container">
      <div className="banner-ad">
        <span className="banner-ad-label">Advertisement</span>
        <div className="banner-ad-content">Mock Banner Ad Space</div>
      </div>
    </div>
  );
}
