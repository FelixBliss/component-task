import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout?: () => void;
  onClearRecentHistory?: () => void;
};

type Appearance =
  | "light"
  | "dark"
  | "system";

const NOTIFICATIONS_KEY =
  "nct-notifications-enabled";

const SAVE_PROGRESS_KEY =
  "nct-save-progress";

const APPEARANCE_KEY =
  "nct-appearance";

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);

  const [saveProgressEnabled, setSaveProgressEnabled] =
    useState<boolean>(true);

  const [appearance, setAppearance] =
    useState<Appearance>("system");

  const [showClearModal, setShowClearModal] =
    useState(false);

  const [notificationMessage, setNotificationMessage] =
    useState("");

  /* =====================================================
     LOAD SETTINGS
     ===================================================== */

  useEffect(() => {
    try {
      const savedNotifications =
        localStorage.getItem(
          NOTIFICATIONS_KEY
        );

      if (savedNotifications !== null) {
        setNotificationsEnabled(
          savedNotifications === "true"
        );
      }

      const savedProgress =
        localStorage.getItem(
          SAVE_PROGRESS_KEY
        );

      if (savedProgress !== null) {
        setSaveProgressEnabled(
          savedProgress === "true"
        );
      }

      const savedAppearance =
        localStorage.getItem(
          APPEARANCE_KEY
        );

      if (
        savedAppearance === "light" ||
        savedAppearance === "dark" ||
        savedAppearance === "system"
      ) {
        setAppearance(
          savedAppearance
        );
      }
    } catch {
      // Ignore localStorage errors.
    }
  }, []);

  /* =====================================================
     APPLY APPEARANCE
     ===================================================== */

  useEffect(() => {
    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark"
    );

    if (appearance === "light") {
      root.classList.add("light");
    }

    if (appearance === "dark") {
      root.classList.add("dark");
    }

    try {
      localStorage.setItem(
        APPEARANCE_KEY,
        appearance
      );
    } catch {
      // Ignore localStorage errors.
    }
  }, [appearance]);

  /* =====================================================
     NOTIFICATION SUPPORT
     ===================================================== */

  const showBrowserNotification = () => {
    if (
      typeof window === "undefined" ||
      !("Notification" in window)
    ) {
      setNotificationMessage(
        "Notifications are not supported by this browser."
      );

      return;
    }

    if (
      Notification.permission ===
      "granted"
    ) {
      new Notification(
        "Nursing Component Task",
        {
          body:
            "Learning reminders are enabled. Keep learning and practicing your nursing procedures.",
          icon: "/icon-192.png",
        }
      );

      setNotificationMessage(
        "Notification test sent successfully."
      );

      return;
    }

    if (
      Notification.permission ===
      "denied"
    ) {
      setNotificationMessage(
        "Notifications are blocked. Enable them in your browser or device settings."
      );

      return;
    }
  };

  /* =====================================================
     TOGGLE NOTIFICATIONS
     ===================================================== */

  const toggleNotifications = async () => {
    if (notificationsEnabled) {
      setNotificationsEnabled(false);

      try {
        localStorage.setItem(
          NOTIFICATIONS_KEY,
          "false"
        );
      } catch {
        // Ignore storage errors.
      }

      setNotificationMessage(
        "Learning notifications have been turned off."
      );

      return;
    }

    /*
     * Check browser support.
     */
    if (
      typeof window === "undefined" ||
      !("Notification" in window)
    ) {
      setNotificationMessage(
        "This browser does not support notifications."
      );

      return;
    }

    /*
     * Request permission when necessary.
     */
    if (
      Notification.permission ===
      "default"
    ) {
      try {
        const permission =
          await Notification.requestPermission();

        if (permission !== "granted") {
          setNotificationsEnabled(false);

          try {
            localStorage.setItem(
              NOTIFICATIONS_KEY,
              "false"
            );
          } catch {
            // Ignore storage errors.
          }

          setNotificationMessage(
            "Notification permission was not granted."
          );

          return;
        }
      } catch {
        setNotificationMessage(
          "Unable to request notification permission."
        );

        return;
      }
    }

    /*
     * Permission is granted.
     */
    if (
      Notification.permission ===
      "granted"
    ) {
      setNotificationsEnabled(true);

      try {
        localStorage.setItem(
          NOTIFICATIONS_KEY,
          "true"
        );
      } catch {
        // Ignore storage errors.
      }

      setNotificationMessage(
        "Notifications enabled."
      );

      /*
       * Send a test notification.
       */
      showBrowserNotification();
    }
  };

  /* =====================================================
     SAVE PROGRESS
     ===================================================== */

  const toggleSaveProgress = () => {
    setSaveProgressEnabled(
      (current) => {
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
      }
    );
  };

  /* =====================================================
     CLEAR HISTORY — OPEN CUSTOM MODAL
     ===================================================== */

  const handleClearRecentHistory = () => {
    setShowClearModal(true);
  };

  /* =====================================================
     CONFIRM CLEAR HISTORY
     ===================================================== */

  const confirmClearRecentHistory = () => {
    setShowClearModal(false);

    if (onClearRecentHistory) {
      onClearRecentHistory();
    }
  };

  /* =====================================================
     CANCEL CLEAR HISTORY
     ===================================================== */

  const cancelClearRecentHistory = () => {
    setShowClearModal(false);
  };

  /* =====================================================
     APPEARANCE LABEL
     ===================================================== */

  const appearanceLabel =
    appearance === "light"
      ? "Light"
      : appearance === "dark"
      ? "Dark"
      : "System";

  return (
    <>
      <section className="settings-page">

        {/* ================= PAGE HEADER ================= */}

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

        {/* ================= SETTINGS LIST ================= */}

        <div className="settings-list">

          {/* ================= NOTIFICATIONS ================= */}

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

              {notificationMessage && (
                <small
                  style={{
                    display: "block",
                    marginTop: "4px",
                    opacity: 0.75,
                  }}
                >
                  {notificationMessage}
                </small>
              )}
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notificationsEnabled
                  ? "active"
                  : ""
              }`}
              onClick={
                toggleNotifications
              }
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

          {/* ================= SAVE PROGRESS ================= */}

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

          {/* ================= APPEARANCE ================= */}

          <div className="settings-card">

            <div className="settings-card-icon">
              🎨
            </div>

            <div className="settings-card-content">
              <strong>
                Appearance
              </strong>

              <small>
                {appearanceLabel} mode
              </small>
            </div>

            <select
              value={appearance}
              onChange={(event) =>
                setAppearance(
                  event.target.value as Appearance
                )
              }
              aria-label="Choose appearance"
              style={{
                border: "none",
                background:
                  "transparent",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="system">
                System
              </option>

              <option value="light">
                Light
              </option>

              <option value="dark">
                Dark
              </option>
            </select>

          </div>

          {/* ================= CLEAR HISTORY ================= */}

          <button
            type="button"
            className="settings-action-card danger"
            onClick={
              handleClearRecentHistory
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

        {/* ================= ABOUT ================= */}

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

        {/* ================= VERSION ================= */}

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

      {/* ==================================================
          CUSTOM CLEAR HISTORY MODAL
          ================================================== */}

      {showClearModal && (
        <div
          role="presentation"
          onClick={
            cancelClearRecentHistory
          }
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background:
              "rgba(0, 0, 0, 0.5)",
          }}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-history-title"
            onClick={(event) =>
              event.stopPropagation()
            }
            style={{
              width: "100%",
              maxWidth: "400px",
              background:
                "var(--card-bg, #ffffff)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >

            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "rgba(220, 38, 38, 0.1)",
                fontSize: "26px",
                marginBottom: "16px",
              }}
            >
              🧹
            </div>

            <h2
              id="clear-history-title"
              style={{
                margin: "0 0 8px",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Clear recent history?
            </h2>

            <p
              style={{
                margin: "0",
                lineHeight: 1.6,
                opacity: 0.75,
                fontSize: "14px",
              }}
            >
              This will remove all procedures
              from your Recently Viewed list.
              Your procedures and saved
              learning progress will not be
              affected.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "24px",
              }}
            >

              <button
                type="button"
                onClick={
                  cancelClearRecentHistory
                }
                style={{
                  flex: 1,
                  minHeight: "46px",
                  borderRadius: "12px",
                  border:
                    "1px solid rgba(0,0,0,0.12)",
                  background:
                    "transparent",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={
                  confirmClearRecentHistory
                }
                style={{
                  flex: 1,
                  minHeight: "46px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "#dc2626",
                  color: "#ffffff",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
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
