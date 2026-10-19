import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { adService } from "../services/adService";

const WHATSAPP_URL =
  "https://wa.me/233541743817?text=Hello%20Bliss%20Innovation%2C%20I%27m%20interested%20in%20discussing%20an%20app%20idea.";

/**
 * Uses the native Unity Ads banner unchanged on Android. On web, the same
 * banner slot displays a compact Bliss Innovation self-promotion.
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
      if (isNative) void adService.hideBannerAd().catch(() => undefined);
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    syncBanner();
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      if (isNative) void adService.hideBannerAd().catch(() => undefined);
    };
  }, []);

  if (Capacitor.isNativePlatform() || !online) return null;

  return (
    <aside className="bliss-banner-ad" aria-label="Bliss Innovation advertisement">
      <div className="bliss-banner-brand">BLISS<br />INNOVATION</div>
      <div className="bliss-banner-message">
        <strong>Have an app idea?</strong>
        <span>Let&apos;s build it.</span>
      </div>
      <a
        className="bliss-banner-cta"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          window.dispatchEvent(new CustomEvent("bliss-promo-contact-click", {
            detail: { placement: "web_banner" },
          }));
        }}
        aria-label="Discuss your app idea with Bliss Innovation on WhatsApp"
      >
        WhatsApp <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
