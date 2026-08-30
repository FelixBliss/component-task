import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout?: () => void;
  onClearRecentHistory?: () => void;
  onAppearance?: () => void;
};

const SAVE_PROGRESS_KEY = "nct-save-progress";

export default function Settings({
  onAbout,
  onClearRecentHistory,
  onAppearance,
}: SettingsProps) {
  const [saveProgressEnabled, setSaveProgressEnabled] =
    useState<boolean>(true);

  const [showClearConfirmation, setShowClearConfirmation] =
    useState<boolean>(false);

  /*
   * Load saved settings.
   */
  useEffect(() => {
    try {
      const savedProgress =
        localStorage.getItem(SAVE_PROGRESS_KEY);

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
   * Toggle Save Progress.
   */
  const toggleSaveProgress = () => {
    setSaveProgressEnabled((current) => {
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
    });
  };

  /*
   * Open custom confirmation box.
   */
  const handleClearRecentHistory = () => {
    setShowClearConfirmation(true);
  };

  /*
   * Confirm clearing recent history.
   */
  const confirmClearHistory = () => {
    setShowClearConfirmation(false);

    if (onClearRecentHistory) {
      onClearRecentHistory();
    }
  };

  /*
   * Cancel clearing history.
   */
  const cancelClearHistory = () => {
    setShowClearConfirmation(false);
  };

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
              onClick={toggleSaveProgress}
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

          <button
            type="button"
            className="settings-action-card"
            onClick={onAppearance}
          >

            <div className="settings-card-icon">
              🎨
            </div>

            <div className="settings-card-content">
              <strong>
                Appearance
              </strong>

              <small>
                Customize the app appearance
                and display style
              </small>
            </div>

            <span className="settings-action-arrow">
              ›
            </span>

          </button>

          {/* ================= CLEAR HISTORY ================= */}

          <button
            type="button"
            className="settings-action-card danger"
            onClick={handleClearRecentHistory}
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

      {/* =====================================================
          CUSTOM CLEAR CONFIRMATION MODAL
      ===================================================== */}

      {showClearConfirmation && (
        <div
          className="confirmation-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="clear-history-title"
        >

          <div className="confirmation-box">

            <div className="confirmation-icon">
              🧹
            </div>

            <h2 id="clear-history-title">
              Clear Recent History?
            </h2>

            <p>
              Are you sure you want to remove
              all recently viewed procedures?
            </p>

            <div className="confirmation-actions">

              <button
                type="button"
                className="confirmation-cancel"
                onClick={cancelClearHistory}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirmation-danger"
                onClick={confirmClearHistory}
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
