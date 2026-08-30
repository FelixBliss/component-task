import React, { useEffect, useState } from "react";

type SettingsProps = {
  onAbout?: () => void;
  onClearRecentHistory?: () => void;
};

const SAVE_PROGRESS_KEY = "nct-save-progress";
const APPEARANCE_KEY = "nct-appearance";

type Appearance = "light" | "dark" | "system";

function getSavedAppearance(): Appearance {
  try {
    const saved = localStorage.getItem(APPEARANCE_KEY);

    if (
      saved === "light" ||
      saved === "dark" ||
      saved === "system"
    ) {
      return saved;
    }
  } catch {
    // Ignore localStorage errors.
  }

  return "system";
}

function applyAppearance(appearance: Appearance) {
  const root = document.documentElement;

  if (appearance === "dark") {
    root.classList.add("dark-mode");
    return;
  }

  if (appearance === "light") {
    root.classList.remove("dark-mode");
    return;
  }

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  root.classList.toggle("dark-mode", prefersDark);
}

function appearanceLabel(
  appearance: Appearance
): string {
  switch (appearance) {
    case "light":
      return "Light";

    case "dark":
      return "Dark";

    case "system":
    default:
      return "System";
  }
}

export default function Settings({
  onAbout,
  onClearRecentHistory,
}: SettingsProps) {
  const [
    saveProgressEnabled,
    setSaveProgressEnabled,
  ] = useState<boolean>(true);

  const [
    showClearConfirmation,
    setShowClearConfirmation,
  ] = useState<boolean>(false);

  const [
    showAppearanceDialog,
    setShowAppearanceDialog,
  ] = useState<boolean>(false);

  const [
    appearance,
    setAppearance,
  ] = useState<Appearance>(
    getSavedAppearance()
  );

  const [
    pendingAppearance,
    setPendingAppearance,
  ] = useState<Appearance>(
    getSavedAppearance()
  );

  /*
   * Load saved settings.
   */
  useEffect(() => {
    try {
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

    const savedAppearance =
      getSavedAppearance();

    setAppearance(savedAppearance);
    applyAppearance(savedAppearance);
  }, []);

  /*
   * Keep System appearance synchronized
   * with the device/browser preference.
   */
  useEffect(() => {
    if (appearance !== "system") {
      return;
    }

    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

    const handleSystemThemeChange = () => {
      applyAppearance("system");
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [appearance]);

  /*
   * Toggle Save Progress.
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
   * Open Appearance dialog.
   */
  const openAppearanceDialog = () => {
    setPendingAppearance(appearance);
    setShowAppearanceDialog(true);
  };

  /*
   * Select appearance inside dialog.
   * Does not save or close the dialog.
   */
  const selectAppearance = (
    value: Appearance
  ) => {
    setPendingAppearance(value);
  };

  /*
   * Apply appearance.
   */
  const applySelectedAppearance = () => {
    try {
      localStorage.setItem(
        APPEARANCE_KEY,
        pendingAppearance
      );
    } catch {
      // Ignore localStorage errors.
    }

    setAppearance(pendingAppearance);
    applyAppearance(pendingAppearance);
    setShowAppearanceDialog(false);
  };

  /*
   * Cancel Appearance dialog.
   */
  const cancelAppearance = () => {
    setPendingAppearance(appearance);
    setShowAppearanceDialog(false);
  };

  /*
   * Open clear-history confirmation.
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

  /*
   * Close dialogs when Escape is pressed.
   */
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      if (showClearConfirmation) {
        cancelClearHistory();
        return;
      }

      if (showAppearanceDialog) {
        cancelAppearance();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    showClearConfirmation,
    showAppearanceDialog,
    appearance,
  ]);

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
            onClick={
              openAppearanceDialog
            }
          >
            <div className="settings-card-icon">
              🎨
            </div>

            <div className="settings-card-content">
              <strong>
                Appearance
              </strong>

              <small>
                Choose light, dark, or
                system appearance
              </small>
            </div>

            <span className="settings-action-value">
              {appearanceLabel(
                appearance
              )}
            </span>

            <span className="settings-action-arrow">
              ›
            </span>
          </button>

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

      {/* =====================================================
          CLEAR RECENT HISTORY MODAL
      ===================================================== */}

      {showClearConfirmation && (
        <div
          className="confirmation-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="clear-history-title"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              cancelClearHistory();
            }
          }}
        >
          <div
            className="confirmation-box"
            role="document"
          >
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
                onClick={
                  cancelClearHistory
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirmation-danger"
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

      {/* =====================================================
          APPEARANCE MODAL
      ===================================================== */}

      {showAppearanceDialog && (
        <div
          className="appearance-dialog-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appearance-dialog-title"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              cancelAppearance();
            }
          }}
        >
          <div
            className="appearance-dialog"
            role="document"
          >
            <div className="appearance-dialog-header">
              <div>
                <h2 id="appearance-dialog-title">
                  Appearance
                </h2>

                <p>
                  Choose how the app should
                  appear.
                </p>
              </div>

              <button
                type="button"
                className="appearance-dialog-close"
                onClick={
                  cancelAppearance
                }
                aria-label="Close appearance dialog"
              >
                ×
              </button>
            </div>

            <div
              className="appearance-options"
              role="radiogroup"
              aria-label="Appearance options"
            >

              <button
                type="button"
                role="radio"
                aria-checked={
                  pendingAppearance ===
                  "light"
                }
                className={`appearance-option ${
                  pendingAppearance ===
                  "light"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectAppearance(
                    "light"
                  )
                }
              >
                <span className="appearance-option-icon">
                  ☀️
                </span>

                <span className="appearance-option-content">
                  <strong>
                    Light
                  </strong>

                  <small>
                    Use the light theme
                  </small>
                </span>

                {pendingAppearance ===
                  "light" && (
                  <span className="appearance-option-check">
                    ✓
                  </span>
                )}
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={
                  pendingAppearance ===
                  "dark"
                }
                className={`appearance-option ${
                  pendingAppearance ===
                  "dark"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectAppearance(
                    "dark"
                  )
                }
              >
                <span className="appearance-option-icon">
                  🌙
                </span>

                <span className="appearance-option-content">
                  <strong>
                    Dark
                  </strong>

                  <small>
                    Use the dark theme
                  </small>
                </span>

                {pendingAppearance ===
                  "dark" && (
                  <span className="appearance-option-check">
                    ✓
                  </span>
                )}
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={
                  pendingAppearance ===
                  "system"
                }
                className={`appearance-option ${
                  pendingAppearance ===
                  "system"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectAppearance(
                    "system"
                  )
                }
              >
                <span className="appearance-option-icon">
                  ⚙️
                </span>

                <span className="appearance-option-content">
                  <strong>
                    System
                  </strong>

                  <small>
                    Follow device appearance
                  </small>
                </span>

                {pendingAppearance ===
                  "system" && (
                  <span className="appearance-option-check">
                    ✓
                  </span>
                )}
              </button>

            </div>

            <div className="appearance-dialog-actions">

              <button
                type="button"
                className="appearance-cancel-button"
                onClick={
                  cancelAppearance
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="appearance-apply-button"
                onClick={
                  applySelectedAppearance
                }
              >
                Apply
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

CSS that fixes the Clear History dialog

The important part for the issue you just described is that the confirmation overlay must be fixed to the viewport, with the dialog box itself styled as a modal. Add this CSS without removing your existing CSS:

/* =========================================================
   CLEAR HISTORY CONFIRMATION MODAL
   ========================================================= */

.confirmation-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.55);

  overflow-y: auto;
}

.confirmation-box {
  width: min(100%, 420px);

  margin: auto;

  padding: 24px;

  background: #ffffff;
  color: #1f2937;

  border: 1px solid #e3e9e5;
  border-radius: 20px;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25);

  text-align: center;

  position: relative;
  z-index: 10000;
}

.confirmation-icon {
  width: 56px;
  height: 56px;

  margin: 0 auto 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #e8f5ee;

  font-size: 26px;
}

.confirmation-box h2 {
  margin: 0 0 10px;

  color: #006b3c;

  font-size: 21px;
  font-weight: 700;
}

.confirmation-box p {
  margin: 0;

  color: #4b5563;

  font-size: 14px;
  line-height: 1.6;
}

.confirmation-actions {
  display: flex;

  gap: 12px;

  margin-top: 24px;
}

.confirmation-actions button {
  flex: 1;

  min-height: 46px;

  padding: 11px 16px;

  border-radius: 12px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease;
}

.confirmation-actions button:active {
  transform: scale(0.97);
}

.confirmation-cancel {
  background: #ffffff;

  color: #006b3c;

  border: 1px solid #b8d8c7;
}

.confirmation-cancel:hover {
  background: #e8f5ee;
}

.confirmation-danger {
  background: #008a4b;

  color: #ffffff;

  border: 1px solid #008a4b;
}

.confirmation-danger:hover {
  background: #006b3c;
}


/* =========================================================
   DARK MODE — CLEAR HISTORY MODAL
   ========================================================= */

html.dark-mode .confirmation-overlay {
  background: rgba(0, 0, 0, 0.72);
}

html.dark-mode .confirmation-box {
  background: #1f2933;
  color: #f3f4f6;

  border-color: #374151;
}

html.dark-mode .confirmation-icon {
  background: #173d2c;
}

html.dark-mode .confirmation-box h2 {
  color: #8ee0b5;
}

html.dark-mode .confirmation-box p {
  color: #d1d5db;
}

html.dark-mode .confirmation-cancel {
  background: #1f2933;

  color: #8ee0b5;

  border-color: #4b7f65;
}

html.dark-mode .confirmation-cancel:hover {
  background: #173d2c;
}

html.dark-mode .confirmation-danger {
  background: #008a4b;
  color: #ffffff;
}


/* =========================================================
   APPEARANCE DIALOG
   ========================================================= */

.appearance-dialog-overlay {
  position: fixed;
  inset: 0;

  z-index: 9998;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.55);

  overflow-y: auto;
}

.appearance-dialog {
  width: min(100%, 440px);

  margin: auto;

  padding: 24px;

  background: #ffffff;
  color: #1f2937;

  border: 1px solid #e3e9e5;
  border-radius: 20px;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25);

  position: relative;
  z-index: 9999;
}

.appearance-dialog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 16px;

  margin-bottom: 20px;
}

.appearance-dialog-header h2 {
  margin: 0 0 5px;

  color: #006b3c;

  font-size: 21px;
  font-weight: 700;
}

.appearance-dialog-header p {
  margin: 0;

  color: #6b7280;

  font-size: 13px;
}

.appearance-dialog-close {
  width: 36px;
  height: 36px;

  flex: 0 0 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background: #f5f7f6;

  color: #374151;

  border: 1px solid #e3e9e5;
  border-radius: 10px;

  font-size: 24px;
  line-height: 1;

  cursor: pointer;
}

.appearance-dialog-close:hover {
  background: #e8f5ee;
  color: #006b3c;
}

.appearance-options {
  display: flex;
  flex-direction: column;

  gap: 10px;
}

.appearance-option {
  width: 100%;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 14px;

  background: #ffffff;

  color: #1f2937;

  border: 1px solid #e3e9e5;
  border-radius: 14px;

  text-align: left;

  cursor: pointer;

  font-family: inherit;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.appearance-option:active {
  transform: scale(0.985);
}

.appearance-option:hover {
  background: #f8faf9;
}

.appearance-option.active {
  background: #e8f5ee;

  color: #006b3c;

  border-color: #008a4b;
}

.appearance-option-icon {
  width: 38px;
  height: 38px;

  flex: 0 0 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: #f5f7f6;

  font-size: 19px;
}

.appearance-option.active
  .appearance-option-icon {
  background: #ffffff;
}

.appearance-option-content {
  min-width: 0;

  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 3px;
}

.appearance-option-content strong {
  font-size: 15px;
  font-weight: 700;
}

.appearance-option-content small {
  color: #6b7280;

  font-size: 12px;
}

.appearance-option.active
  .appearance-option-content small {
  color: #367455;
}

.appearance-option-check {
  width: 24px;
  height: 24px;

  flex: 0 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #008a4b;

  color: #ffffff;

  border-radius: 50%;

  font-size: 14px;
  font-weight: 700;
}

.appearance-dialog-actions {
  display: flex;

  gap: 12px;

  margin-top: 24px;
}

.appearance-dialog-actions button {
  flex: 1;

  min-height: 46px;

  padding: 11px 16px;

  border-radius: 12px;

  font-family: inherit;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.appearance-dialog-actions button:active {
  transform: scale(0.97);
}

.appearance-cancel-button {
  background: #ffffff;

  color: #006b3c;

  border: 1px solid #b8d8c7;
}

.appearance-cancel-button:hover {
  background: #e8f5ee;
}

.appearance-apply-button {
  background: #008a4b;

  color: #ffffff;

  border: 1px solid #008a4b;
}

.appearance-apply-button:hover {
  background: #006b3c;
}


/* =========================================================
   DARK MODE — APPEARANCE DIALOG
   ========================================================= */

html.dark-mode .appearance-dialog-overlay {
  background: rgba(0, 0, 0, 0.72);
}

html.dark-mode .appearance-dialog {
  background: #1f2933;

  color: #f3f4f6;

  border-color: #374151;
}

html.dark-mode .appearance-dialog-header h2 {
  color: #8ee0b5;
}

html.dark-mode .appearance-dialog-header p {
  color: #cbd5e1;
}

html.dark-mode .appearance-dialog-close {
  background: #27323d;

  color: #f3f4f6;

  border-color: #3f4b57;
}

html.dark-mode .appearance-dialog-close:hover {
  background: #173d2c;

  color: #8ee0b5;
}

html.dark-mode .appearance-option {
  background: #27323d;

  color: #f3f4f6;

  border-color: #3f4b57;
}

html.dark-mode .appearance-option:hover {
  background: #303d49;
}

html.dark-mode .appearance-option.active {
  background: #173d2c;

  color: #8ee0b5;

  border-color: #008a4b;
}

html.dark-mode
  .appearance-option-icon {
  background: #1f2933;
}

html.dark-mode
  .appearance-option.active
  .appearance-option-icon {
  background: #214c38;
}

html.dark-mode
  .appearance-option-content small {
  color: #cbd5e1;
}

html.dark-mode
  .appearance-option.active
  .appearance-option-content small {
  color: #a7d9bc;
}

html.dark-mode .appearance-cancel-button {
  background: #27323d;

  color: #8ee0b5;

  border-color: #4b7f65;
}

html.dark-mode .appearance-cancel-button:hover {
  background: #173d2c;
}

html.dark-mode .appearance-apply-button {
  background: #008a4b;

  color: #ffffff;

  border-color: #008a4b;
}
