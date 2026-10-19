import type { AdResult } from "./adProvider";

export type WebPromoAdKind = "interstitial" | "rewarded";
type WebPromoHandler = (kind: WebPromoAdKind) => Promise<AdResult>;

let handler: WebPromoHandler | null = null;

export function registerWebPromoAdHandler(nextHandler: WebPromoHandler): () => void {
  handler = nextHandler;
  return () => {
    if (handler === nextHandler) handler = null;
  };
}

export function showWebPromoAd(kind: WebPromoAdKind): Promise<AdResult> {
  if (!handler) {
    return Promise.resolve({
      success: false,
      error: "AD_NOT_AVAILABLE",
      event: "WEB_PROMO_HOST_UNAVAILABLE",
    });
  }
  return handler(kind);
}
