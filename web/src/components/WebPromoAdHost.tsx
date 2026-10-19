import { useEffect, useRef, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { track } from "@vercel/analytics/react";
import type { AdResult } from "../services/adProvider";
import {
  registerWebPromoAdHandler,
  type WebPromoAdKind,
} from "../services/webPromoAd";

const WHATSAPP_URL =
  "https://wa.me/233541743817?text=Hello%20Bliss%20Innovation%2C%20I%27m%20interested%20in%20discussing%20an%20app%20idea.";
const PROMO_SECONDS = 10;

export default function WebPromoAdHost() {
  const [kind, setKind] = useState<WebPromoAdKind | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(PROMO_SECONDS);
  const resolveRef = useRef<((result: AdResult) => void) | null>(null);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;

    return registerWebPromoAdHandler((requestedKind) => new Promise((resolve) => {
      if (resolveRef.current) {
        resolve({ success: false, error: "AD_SHOW_FAILED", event: "WEB_PROMO_ALREADY_OPEN" });
        return;
      }
      resolveRef.current = resolve;
      setSecondsLeft(PROMO_SECONDS);
      setKind(requestedKind);
    }));
  }, []);

  useEffect(() => {
    if (!kind || secondsLeft <= 0) return;
    const timer = window.setTimeout(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [kind, secondsLeft]);

  useEffect(() => {
    if (!kind || secondsLeft !== 0) return;
    const completedKind = kind;
    const resolver = resolveRef.current;
    resolveRef.current = null;
    setKind(null);
    if (completedKind === "rewarded") {
      resolver?.({ success: true, event: "REWARDED_EARNED" });
    } else {
      resolver?.({ success: true, event: "WEB_PROMO_INTERSTITIAL_COMPLETED" });
    }
  }, [kind, secondsLeft]);

  useEffect(() => () => {
    resolveRef.current?.({
      success: false,
      error: "AD_SHOW_FAILED",
      event: "WEB_PROMO_HOST_UNMOUNTED",
    });
    resolveRef.current = null;
  }, []);

  if (Capacitor.isNativePlatform() || !kind) return null;

  const isRewarded = kind === "rewarded";

  return (
    <div className="bliss-promo-overlay" role="presentation">
      <section
        className="bliss-promo-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bliss-promo-title"
        aria-describedby="bliss-promo-description"
      >
        <span className="bliss-promo-dialog-kicker">BLISS INNOVATION PRESENTS</span>
        <div className="bliss-promo-mark" aria-hidden="true">BI</div>
        <h2 id="bliss-promo-title">Have an App Idea? Let&apos;s Build It.</h2>
        <p id="bliss-promo-description">
          We build practical mobile apps and web applications for businesses,
          organisations and entrepreneurs.
        </p>
        <a
          className="bliss-promo-dialog-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            try {
              track("bliss_innovation_contact_click", { placement: kind });
            } catch {
              // The promotion still works if analytics is unavailable.
            }
          }}
        >
          Discuss Your App Idea on WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <div className="bliss-promo-countdown" aria-live="polite">
          {secondsLeft > 0
            ? <>Continue in <strong>{secondsLeft}s</strong></>
            : "Promotion complete"}
        </div>
        <div className="bliss-promo-progress" aria-hidden="true">
          <span style={{ width: `${((PROMO_SECONDS - secondsLeft) / PROMO_SECONDS) * 100}%` }} />
        </div>
        <p className="bliss-promo-footnote">
          {isRewarded
            ? "Complete this 10-second promotion to receive your in-app reward."
            : "Thanks for supporting Bliss Innovation."}
        </p>
      </section>
    </div>
  );
}
