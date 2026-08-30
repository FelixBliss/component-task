import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout?: () => void;
  onClearRecentHistory?: () => void;
};

const NOTIFICATIONS_KEY =
  "nct-notifications-enabled";

const SAVE_PROGRESS_KEY =
  "nct-save-progress";

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);

  const [saveProgressEnabled, setSaveProgressEnabled] =
    useState<boolean>(true);

  /*
   * Load settings when Settings opens.
   */
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
    } catch {
      // Ignore localStorage errors.
    }
  }, []);

  /*
   * Toggle learning notifications.
   */
  const toggleNotifications = () => {
    setNotificationsEnabled(
      (current) => {
        const next = !current;

        try {
          localStorage.setItem(
            NOTIFICATIONS_KEY,
            String(next)
          );
        } catch {
          // Ignore localStorage errors.
        }

        return next;
      }
    );
  };

  /*
   * Toggle saved learning progress.
   */
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
          // Ignore localStorage errors.
        }

        return next;
      }
    );
  };

  /*
   * Clear Recently Viewed.
   *
   * IMPORTANT:
   * App.tsx owns the Recently Viewed state.
   * Settings only requests the App to clear it.
   */
  const handleClearRecentHistory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all recently viewed procedures?"
    );

    if (!confirmed) {
      return;
    }

    if (onClearRecentHistory) {
      onClearRecentHistory();
    }
  };

  return (
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
  );
      }
