import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type InstallAppPromptProps = {
  isHome: boolean;
};

const DISMISSED_UNTIL_KEY = "component-task-pwa-prompt-dismissed-until";
const DISMISS_DAYS = 7;

export default function InstallAppPrompt({ isHome }: InstallAppPromptProps) {
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      return;
    }

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
    if (standalone) return;

    const userAgent = navigator.userAgent;
    const ios =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const mobile =
      ios ||
      /Android|Mobile/i.test(userAgent) ||
      window.matchMedia("(max-width: 768px)").matches;
    setIsIOS(ios);

    if (!mobile) return;

    try {
      const dismissedUntil = Number(
        localStorage.getItem(DISMISSED_UNTIL_KEY) || "0"
      );
      if (dismissedUntil > Date.now()) return;
    } catch {
      // Continue with the install hint if storage is unavailable.
    }

    const timer = window.setTimeout(() => setVisible(true), 7000);
    const handleBeforeInstallPrompt = (event: Event) => {
      const installEvent = event as BeforeInstallPromptEvent;
      event.preventDefault();
      setDeferredPrompt(installEvent);
      setVisible(true);
    };
    const handleAppInstalled = () => {
      setVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [isHome]);

  const dismiss = () => {
    try {
      localStorage.setItem(
        DISMISSED_UNTIL_KEY,
        String(Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000)
      );
    } catch {
      // Dismiss for this render even if storage is unavailable.
    }
    setVisible(false);
    setInstructionsOpen(false);
  };

  const installOrExplain = async () => {
    if (!deferredPrompt) {
      setInstructionsOpen((open) => !open);
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      if (choice.outcome === "accepted") {
        setVisible(false);
        return;
      }
    } catch {
      // Fall back to manual installation instructions.
    }
    setInstructionsOpen(true);
  };

  if (!isHome || !visible) return null;

  return (
    <aside className="pwa-install-prompt" aria-label="Install Component Task">
      <div className="pwa-install-copy">
        <strong>Keep Component Task on your Home Screen</strong>
        <span>Open nursing procedures faster next time.</span>
      </div>
      <div className="pwa-install-actions">
        <button type="button" className="pwa-install-action" onClick={installOrExplain}>
          {deferredPrompt ? "Install" : "How to install"}
        </button>
        <button
          type="button"
          className="pwa-install-dismiss"
          aria-label="Dismiss install suggestion"
          onClick={dismiss}
        >
          ×
        </button>
      </div>
      {instructionsOpen && (
        <div className="pwa-install-instructions">
          {isIOS ? (
            <>
              <strong>On iPhone:</strong> Open this page in Safari, tap the Share
              button (square with an upward arrow), choose <strong>Add to Home Screen</strong>,
              then tap <strong>Add</strong>.
            </>
          ) : (
            <>
              <strong>On Android:</strong> Open your browser menu (⋮) and choose
              <strong> Install app</strong> or <strong>Add to Home screen</strong>.
            </>
          )}
        </div>
      )}
    </aside>
  );
}
