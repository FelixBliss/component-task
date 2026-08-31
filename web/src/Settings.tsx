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

  return "light";
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
    setPendingAppearance(savedAppearance);
    applyAppearance(savedAppearance);
  }, []);

  /*
   * Keep System appearance synchronized
   * with device/browser preference.
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
   */
  const selectAppearance = (
    value: Appearance
  ) => {
    setPendingAppearance(value);
  };

  /*
   * Apply selected appearance.
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
   * Close dialogs with Escape.
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

            {/* ================= DIALOG HEADER ================= */}

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

            {/* ================= APPEARANCE OPTIONS ================= */}

            <div
              className="appearance-options"
              role="radiogroup"
              aria-label="Appearance options"
            >

              {/* ================= LIGHT ================= */}

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

              {/* ================= DARK ================= */}

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

              {/* ================= SYSTEM ================= */}

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

            {/* ================= DIALOG ACTIONS ================= */}

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
