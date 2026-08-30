import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout?: () => void;
  onClearRecentHistory?: () => void;
};

const NOTIFICATIONS_KEY = "nct-notifications-enabled";
const SAVE_PROGRESS_KEY = "nct-save-progress";
const APPEARANCE_KEY = "nct-appearance";
const STYLE_KEY = "nct-style";

type Appearance = "light" | "dark";
type AppStyle = "default" | "compact";

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);

  const [saveProgressEnabled, setSaveProgressEnabled] =
    useState<boolean>(true);

  const [appearance, setAppearance] =
    useState<Appearance>("light");

  const [appStyle, setAppStyle] =
    useState<AppStyle>("default");

  const [showClearConfirm, setShowClearConfirm] =
    useState(false);

  const [notificationMessage, setNotificationMessage] =
    useState("");

  /* =====================================================
     LOAD SETTINGS
  ===================================================== */

  useEffect(() => {
    try {
      const savedNotifications =
        localStorage.getItem(NOTIFICATIONS_KEY);

      if (savedNotifications !== null) {
        setNotificationsEnabled(
          savedNotifications === "true"
        );
      }

      const savedProgress =
        localStorage.getItem(SAVE_PROGRESS_KEY);

      if (savedProgress !== null) {
        setSaveProgressEnabled(
          savedProgress === "true"
        );
      }

      const savedAppearance =
        localStorage.getItem(APPEARANCE_KEY);

      if (
        savedAppearance === "dark" ||
        savedAppearance === "light"
      ) {
        setAppearance(savedAppearance);
      }

      const savedStyle =
        localStorage.getItem(STYLE_KEY);

      if (
        savedStyle === "compact" ||
        savedStyle === "default"
      ) {
        setAppStyle(savedStyle);
      }
    } catch {
      // Ignore storage errors.
    }
  }, []);

  /* =====================================================
     APPLY APPEARANCE
  ===================================================== */

  useEffect(() => {
    const root = document.documentElement;

    if (appearance === "dark") {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }

    try {
      localStorage.setItem(
        APPEARANCE_KEY,
        appearance
      );
    } catch {
      // Ignore storage errors.
    }
  }, [appearance]);

  /* =====================================================
     APPLY APP STYLE
  ===================================================== */

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      "style-default",
      "style-compact"
    );

    root.classList.add(
      appStyle === "compact"
        ? "style-compact"
        : "style-default"
    );

    try {
      localStorage.setItem(
        STYLE_KEY,
        appStyle
      );
    } catch {
      // Ignore storage errors.
    }
  }, [appStyle]);

  /* =====================================================
     NOTIFICATIONS
  ===================================================== */

  const toggleNotifications = async () => {
    const next = !notificationsEnabled;

    if (next) {
      /*
       * Browser notification permission.
       */
      if ("Notification" in window) {
        try {
          if (
            Notification.permission === "denied"
          ) {
            setNotificationMessage(
              "Notifications are blocked in your browser. Enable them in your browser settings."
            );
            return;
          }

          if (
            Notification.permission !== "granted"
          ) {
            const permission =
              await Notification.requestPermission();

            if (permission !== "granted") {
              setNotificationMessage(
                "Notification permission was not granted."
              );
              return;
            }
          }

          /*
           * Send a test notification.
           */
          new Notification(
            "Nursing Component Task",
            {
              body:
                "Learning notifications are now enabled.",
              icon: "/icon-192.png",
            }
          );

          setNotificationMessage(
            "Notifications enabled."
          );
        } catch {
          setNotificationMessage(
            "Your device/browser does not support notifications."
          );
        }
      } else {
        setNotificationMessage(
          "Notifications are not supported on this device."
        );
      }
    } else {
      setNotificationMessage(
        "Learning notifications disabled."
      );
    }

    setNotificationsEnabled(next);

    try {
      localStorage.setItem(
        NOTIFICATIONS_KEY,
        String(next)
      );
    } catch {
      // Ignore storage errors.
    }

    window.setTimeout(() => {
      setNotificationMessage("");
    }, 3500);
  };

  /* =====================================================
     SAVE PROGRESS
  ===================================================== */

  const toggleSaveProgress = () => {
    setSaveProgressEnabled((current) => {
      const next = !current;

      try {
        localStorage.setItem(
          SAVE_PROGRESS_KEY,
          String(next)
        );
      } catch {
        // Ignore storage errors.
      }

      return next;
    });
  };

  /* =====================================================
     APPEARANCE
  ===================================================== */

  const toggleAppearance = () => {
    setAppearance((current) =>
      current === "light"
        ? "dark"
        : "light"
    );
  };

  /* =====================================================
     STYLE
  ===================================================== */

  const toggleStyle = () => {
    setAppStyle((current) =>
      current === "default"
        ? "compact"
        : "default"
    );
  };

  /* =====================================================
     CLEAR HISTORY
  ===================================================== */

  const requestClearHistory = () => {
    setShowClearConfirm(true);
  };

  const cancelClearHistory = () => {
    setShowClearConfirm(false);
  };

  const confirmClearHistory = () => {
    setShowClearConfirm(false);

    if (onClearRecentHistory) {
      onClearRecentHistory();
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      <section className="settings-page">

        {/* =================================================
           HEADER
        ================================================= */}

        <div className="page-heading">
          <span className="page-kicker">
            APP PREFERENCES
          </span>

          <h1 className="page-title">
            Settings
          </h1>

          <p className="page-description">
            Manage your learning preferences
            and app settings.
          </p>
        </div>

        {/* =================================================
           SETTINGS
        ================================================= */}

        <div className="settings-list">

          {/* NOTIFICATIONS */}

          <div className="settings-card">

            <div className="settings-card-icon">
              🔔
            </div>

            <div className="settings-card-content">
              <strong>
                Notifications
              </strong>

              <small>
                Receive learning reminders
              </small>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notificationsEnabled
                  ? "active"
                  : ""
              }`}
              onClick={toggleNotifications}
              aria-label={
                notificationsEnabled
                  ? "Disable notifications"
                  : "Enable notifications"
              }
              aria-pressed={
                notificationsEnabled
              }
            >
              <span />
            </button>

          </div>

          {/* APPEARANCE */}

          <button
            type="button"
            className="settings-action-card"
            onClick={toggleAppearance}
          >

            <div className="settings-card-icon">
              {appearance === "dark"
                ? "🌙"
                : "☀️"}
            </div>

            <div className="settings-card-content">
              <strong>
                Appearance
              </strong>

              <small>
                {appearance === "dark"
                  ? "Dark mode is currently active"
                  : "Light mode is currently active"}
              </small>
            </div>

            <span className="settings-value">
              {appearance === "dark"
                ? "Dark"
                : "Light"}
            </span>

            <span className="settings-action-arrow">
              ›
            </span>

          </button>

          {/* STYLE */}

          <button
            type="button"
            className="settings-action-card"
            onClick={toggleStyle}
          >

            <div className="settings-card-icon">
              🎨
            </div>

            <div className="settings-card-content">
              <strong>
                Style
              </strong>

              <small>
                {appStyle === "compact"
                  ? "Compact layout"
                  : "Standard layout"}
              </small>
            </div>

            <span className="settings-value">
              {appStyle === "compact"
                ? "Compact"
                : "Standard"}
            </span>

            <span className="settings-action-arrow">
              ›
            </span>

          </button>

          {/* SAVE PROGRESS */}

          <div className="settings-card">

            <div className="settings-card-icon">
              💾
            </div>

            <div className="settings-card-content">
              <strong>
                Save Progress
              </strong>

              <small>
                Your learning progress is
                saved on this device
              </small>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                saveProgressEnabled
                  ? "active"
                  : ""
              }`}
              onClick={
                toggleSaveProgress
              }
              aria-label={
                saveProgressEnabled
                  ? "Disable save progress"
                  : "Enable save progress"
              }
              aria-pressed={
                saveProgressEnabled
              }
            >
              <span />
            </button>

          </div>

          {/* CLEAR HISTORY */}

          <button
            type="button"
            className="settings-action-card danger"
            onClick={
              requestClearHistory
            }
          >

            <div className="settings-card-icon">
              🧹
            </div>

            <div className="settings-card-content">
              <strong>
                Clear Recent History
              </strong>

              <small>
                Remove all recently viewed
                procedures
              </small>
            </div>

            <span className="settings-action-arrow">
              ›
            </span>

          </button>

        </div>

        {/* =================================================
           NOTIFICATION MESSAGE
        ================================================= */}

        {notificationMessage && (
          <div className="settings-notification-message">
            {notificationMessage}
          </div>
        )}

        {/* =================================================
           ABOUT
        ================================================= */}

        <div className="settings-section">

          <h2 className="settings-section-title">
            About
          </h2>

          <button
            type="button"
            className="settings-action-card"
            onClick={onAbout}
          >

            <div className="settings-card-icon">
              ℹ️
            </div>

            <div className="settings-card-content">
              <strong>
                About Nursing Component Task
              </strong>

              <small>
                App information and developer
                details
              </small>
            </div>

            <span className="settings-action-arrow">
              ›
            </span>

          </button>

        </div>

        {/* =================================================
           VERSION
        ================================================= */}

        <div className="settings-footer">

          <div className="settings-footer-logo">
            🩺
          </div>

          <strong>
            Nursing Component Task
          </strong>

          <span>
            Version 3.0
          </span>

          <small>
            Bliss Innovation
          </small>

        </div>

      </section>

      {/* ===================================================
         CUSTOM CLEAR CONFIRMATION MODAL
      =================================================== */}

      {showClearConfirm && (
        <div
          className="settings-modal-overlay"
          role="presentation"
        >

          <div
            className="settings-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-history-title"
          >

            <div className="settings-confirm-icon">
              🧹
            </div>

            <h2 id="clear-history-title">
              Clear Recent History?
            </h2>

            <p>
              This will remove all recently
              viewed procedures from this
              device.
            </p>

            <div className="settings-confirm-actions">

              <button
                type="button"
                className="settings-confirm-cancel"
                onClick={
                  cancelClearHistory
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="settings-confirm-danger"
                onClick={
                  confirmClearHistory
                }
              >
                Clear History
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
          }
