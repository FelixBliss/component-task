import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout: () => void;
  onClearRecentHistory?: () => void;
};

const RECENTLY_VIEWED_KEY =
  "nursing-component-task-recently-viewed";

const NOTIFICATIONS_KEY = "nct-notifications";
const DARK_MODE_KEY = "nct-dark-mode";
const SAVE_PROGRESS_KEY = "nct-save-progress";

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem(DARK_MODE_KEY) === "true";
  });

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem(NOTIFICATIONS_KEY) === "true";
  });

  const [saveProgress, setSaveProgress] = useState(() => {
    const saved = localStorage.getItem(SAVE_PROGRESS_KEY);

    // Default to ON for existing users.
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark-mode",
      darkMode
    );

    localStorage.setItem(
      DARK_MODE_KEY,
      String(darkMode)
    );
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(
      NOTIFICATIONS_KEY,
      String(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem(
      SAVE_PROGRESS_KEY,
      String(saveProgress)
    );
  }, [saveProgress]);

  const handleNotifications = async () => {
    const nextValue = !notifications;

    if (
      nextValue &&
      "Notification" in window
    ) {
      try {
        const permission =
          await Notification.requestPermission();

        if (permission !== "granted") {
          setNotifications(false);

          alert(
            "Notifications were not enabled. Please allow notifications in your browser/device settings."
          );

          return;
        }
      } catch {
        // Keep the preference disabled if permission
        // cannot be requested.
        setNotifications(false);
        return;
      }
    }

    setNotifications(nextValue);
  };

  const clearHistory = () => {
    const confirmed = window.confirm(
      "Clear all recently viewed procedures?"
    );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem(
      RECENTLY_VIEWED_KEY
    );

    if (onClearRecentHistory) {
      onClearRecentHistory();
    }

    alert(
      "Recent procedure history has been cleared."
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

        {/* Appearance */}
        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">
              🌗
            </div>

            <div>
              <strong>
                Appearance
              </strong>

              <small>
                Switch between light and dark mode
              </small>
            </div>
          </div>

          <button
            className={`setting-toggle ${
              darkMode ? "active" : ""
            }`}
            onClick={() =>
              setDarkMode((value) => !value)
            }
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
          >
            <span />
          </button>
        </div>

        {/* Notifications */}
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
            className={`setting-toggle ${
              notifications ? "active" : ""
            }`}
            onClick={handleNotifications}
            aria-label="Toggle notifications"
            aria-pressed={notifications}
          >
            <span />
          </button>
        </div>

        {/* Save Progress */}
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
                Your learning progress is saved on
                this device
              </small>
            </div>
          </div>

          <button
            className={`setting-toggle ${
              saveProgress ? "active" : ""
            }`}
            onClick={() =>
              setSaveProgress((value) => !value)
            }
            aria-label="Toggle save progress"
            aria-pressed={saveProgress}
          >
            <span />
          </button>
        </div>

        {/* Clear Recent History */}
        <button
          className="setting-action danger-action"
          onClick={clearHistory}
          type="button"
        >
          <span className="setting-icon">
            🧹
          </span>

          <span>
            <strong>
              Clear Recent History
            </strong>

            <small>
              Remove recently viewed procedures
            </small>
          </span>

          <b>›</b>
        </button>

        {/* About */}
        <button
          className="setting-action"
          onClick={onAbout}
          type="button"
        >
          <span className="setting-icon">
            ℹ️
          </span>

          <span>
            <strong>
              About Nursing Component Task
            </strong>

            <small>
              Developer, credits and app information
            </small>
          </span>

          <b>›</b>
        </button>

        {/* Version */}
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
