import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout: () => void;
  onClearRecentHistory?: () => void;
};

const RECENTLY_VIEWED_KEY =
  "nursing-component-task-recently-viewed";

const NOTIFICATIONS_KEY =
  "nct-notifications";

const SAVE_PROGRESS_KEY =
  "nct-save-progress";

const DARK_MODE_KEY =
  "nct-dark-mode";

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return (
        localStorage.getItem(DARK_MODE_KEY) ===
        "true"
      );
    } catch {
      return false;
    }
  });

  const [notifications, setNotifications] =
    useState<boolean>(() => {
      try {
        return (
          localStorage.getItem(
            NOTIFICATIONS_KEY
          ) === "true"
        );
      } catch {
        return false;
      }
    });

  const [saveProgress, setSaveProgress] =
    useState<boolean>(() => {
      try {
        const saved =
          localStorage.getItem(
            SAVE_PROGRESS_KEY
          );

        // Existing users default to ON.
        return saved === null
          ? true
          : saved === "true";
      } catch {
        return true;
      }
    });

  /*
   * Persist appearance preference.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        DARK_MODE_KEY,
        String(darkMode)
      );
    } catch {
      // Ignore storage errors.
    }

    document.documentElement.classList.toggle(
      "dark-mode",
      darkMode
    );
  }, [darkMode]);

  /*
   * Persist notification preference.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        NOTIFICATIONS_KEY,
        String(notifications)
      );
    } catch {
      // Ignore storage errors.
    }
  }, [notifications]);

  /*
   * Persist Save Progress preference.
   *
   * ProcedureDetails.tsx reads the same key.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        SAVE_PROGRESS_KEY,
        String(saveProgress)
      );
    } catch {
      // Ignore storage errors.
    }
  }, [saveProgress]);

  /*
   * Notifications.
   *
   * This requests browser permission when available.
   * It does not falsely claim that a background
   * reminder has been scheduled.
   */
  const toggleNotifications = async () => {
    const nextValue = !notifications;

    if (!nextValue) {
      setNotifications(false);
      return;
    }

    if (
      typeof window === "undefined" ||
      !("Notification" in window)
    ) {
      setNotifications(true);

      alert(
        "Notifications are not supported by this browser. Your preference has been saved."
      );

      return;
    }

    try {
      if (
        Notification.permission ===
        "granted"
      ) {
        setNotifications(true);
        return;
      }

      if (
        Notification.permission ===
        "denied"
      ) {
        setNotifications(false);

        alert(
          "Notifications are blocked for this site. Please enable them in your browser or device settings."
        );

        return;
      }

      const permission =
        await Notification.requestPermission();

      if (permission === "granted") {
        setNotifications(true);

        /*
         * Optional immediate confirmation.
         * This verifies that browser notifications
         * are actually working.
         */
        try {
          new Notification(
            "Nursing Component Task",
            {
              body:
                "Learning notifications are now enabled.",
              icon: "/pwa-192x192.png",
            }
          );
        } catch {
          // Permission was granted even if
          // constructing the notification fails.
        }
      } else {
        setNotifications(false);

        alert(
          "Notification permission was not granted."
        );
      }
    } catch {
      setNotifications(false);

      alert(
        "Unable to enable notifications on this device."
      );
    }
  };

  /*
   * Clear Recently Viewed.
   *
   * IMPORTANT:
   * This uses exactly the same key used by App.tsx.
   */
  const clearHistory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all recently viewed procedures?"
    );

    if (!confirmed) {
      return;
    }

    try {
      localStorage.removeItem(
        RECENTLY_VIEWED_KEY
      );
    } catch {
      // Ignore storage errors.
    }

    /*
     * Tell App.tsx to clear its React state too.
     */
    if (onClearRecentHistory) {
      onClearRecentHistory();
    }

    alert(
      "Recently viewed procedures have been cleared."
    );
  };

  return (
    <section>
      <div className="page-heading">
        <span className="page-kicker">
          PERSONALIZE
        </span>

        <h1 className="page-title">
          Settings
        </h1>

        <p className="page-description">
          Manage your Nursing Component Task
          preferences.
        </p>
      </div>

      <div className="settings-list">

        {/* ================= NOTIFICATIONS ================= */}

        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">
              🔔
            </div>

            <div>
              <strong>
                Notifications
              </strong>

              <small>
                Receive learning reminders
              </small>
            </div>
          </div>

          <button
            type="button"
            className={`setting-toggle ${
              notifications
                ? "active"
                : ""
            }`}
            onClick={
              toggleNotifications
            }
            aria-label="Toggle notifications"
            aria-pressed={
              notifications
            }
          >
            <span />
          </button>
        </div>

        {/* ================= SAVE PROGRESS ================= */}

        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">
              💾
            </div>

            <div>
              <strong>
                Save Progress
              </strong>

              <small>
                Your quiz and learning progress
                is saved on this device
              </small>
            </div>
          </div>

          <button
            type="button"
            className={`setting-toggle ${
              saveProgress
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSaveProgress(
                (value) => !value
              )
            }
            aria-label="Toggle save progress"
            aria-pressed={
              saveProgress
            }
          >
            <span />
          </button>
        </div>

        {/* ================= CLEAR HISTORY ================= */}

        <button
          type="button"
          className="setting-action danger-action"
          onClick={clearHistory}
        >
          <span className="setting-icon">
            🧹
          </span>

          <span>
            <strong>
              Clear Recent History
            </strong>

            <small>
              Remove recently viewed
              procedures
            </small>
          </span>

          <b>›</b>
        </button>

        {/* ================= ABOUT ================= */}

        <button
          type="button"
          className="setting-action"
          onClick={onAbout}
        >
          <span className="setting-icon">
            ℹ️
          </span>

          <span>
            <strong>
              About Nursing Component Task
            </strong>

            <small>
              Developer, credits and app
              information
            </small>
          </span>

          <b>›</b>
        </button>

        {/* ================= VERSION ================= */}

        <div className="version-display">
          Nursing Component Task

          <strong>
            Version 3.0
          </strong>
        </div>

      </div>
    </section>
  );
        }
