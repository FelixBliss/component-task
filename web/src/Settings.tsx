import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout: () => void;
};

export default function Settings({ onAbout }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("nct-dark-mode") === "true"
  );

  const [notifications, setNotifications] = useState(
    localStorage.getItem("nct-notifications") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("nct-dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(
      "nct-notifications",
      String(notifications)
    );
  }, [notifications]);

  const clearHistory = () => {
    localStorage.removeItem("nct-recent-procedures");
    alert("Recent procedure history has been cleared.");
  };

  return (
    <section>
      <div className="page-heading">
        <span className="page-kicker">PERSONALIZE</span>

        <h1 className="page-title">Settings</h1>

        <p className="page-description">
          Manage your Nursing Component Task preferences.
        </p>
      </div>

      <div className="settings-list">

        {/* Appearance */}
        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">🌗</div>

            <div>
              <strong>Appearance</strong>
              <small>
                Switch between light and dark mode
              </small>
            </div>
          </div>

          <button
            className={`setting-toggle ${
              darkMode ? "active" : ""
            }`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <span />
          </button>
        </div>

        {/* Notifications */}
        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">🔔</div>

            <div>
              <strong>Notifications</strong>
              <small>
                Receive learning reminders
              </small>
            </div>
          </div>

          <button
            className={`setting-toggle ${
              notifications ? "active" : ""
            }`}
            onClick={() =>
              setNotifications(!notifications)
            }
            aria-label="Toggle notifications"
          >
            <span />
          </button>
        </div>

        {/* Saved progress */}
        <div className="setting-item">
          <div className="setting-main">
            <div className="setting-icon">💾</div>

            <div>
              <strong>Save Progress</strong>
              <small>
                Your learning progress is saved on this device
              </small>
            </div>
          </div>

          <span className="setting-status">
            On
          </span>
        </div>

        {/* Clear history */}
        <button
          className="setting-action danger-action"
          onClick={clearHistory}
        >
          <span className="setting-icon">🧹</span>

          <span>
            <strong>Clear Recent History</strong>
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
        >
          <span className="setting-icon">ℹ️</span>

          <span>
            <strong>About Nursing Component Task</strong>
            <small>
              Developer, credits and app information
            </small>
          </span>

          <b>›</b>
        </button>

        {/* Version */}
        <div className="version-display">
          Nursing Component Task
          <strong>Version 3.0</strong>
        </div>

      </div>
    </section>
  );
          }
