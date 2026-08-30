import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import ProcedureList from "./components/ProcedureList";
import ProcedureDetails from "./components/ProcedureDetails";
import { procedures, type Procedure } from "./data/procedures";

type Tab =
  | "home"
  | "procedures"
  | "about"
  | "settings"
  | "credits";

type Category = {
  icon: string;
  name: string;
  description: string;
};

const RECENTLY_VIEWED_KEY =
  "nursing-component-task-recently-viewed";

const RECENTLY_VIEWED_CLEARED_EVENT =
  "nct-recently-viewed-cleared";

const MAX_RECENTLY_VIEWED = 5;

const procedureCategories: Category[] = [
  {
    icon: "🩺",
    name: "General Nursing (RGN)",
    description:
      "Registered General Nursing procedures",
  },
  {
    icon: "🤰",
    name: "Midwifery (RM)",
    description: "Midwifery procedures",
  },
  {
    icon: "🧠",
    name: "Community Mental Health Nursing (RCMN)",
    description:
      "Community mental health procedures",
  },
  {
    icon: "🧠",
    name: "Mental Health Nursing (RMN)",
    description: "Mental health nursing procedures",
  },
  {
    icon: "🌍",
    name: "Public Health Nursing (PHN)",
    description: "Public health nursing procedures",
  },
  {
    icon: "👶",
    name: "Paediatric Nursing (PAED)",
    description: "Paediatric nursing procedures",
  },
  {
    icon: "❤️",
    name: "Pain Management (PM)",
    description: "Pain management procedures",
  },
];

/* =========================================================
   RECENTLY VIEWED HELPERS
   ========================================================= */

function loadRecentlyViewed(): string[] {
  try {
    const saved = localStorage.getItem(
      RECENTLY_VIEWED_KEY
    );

    if (!saved) {
      return [];
    }

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter(
        (id): id is string =>
          typeof id === "string"
      )
      .slice(0, MAX_RECENTLY_VIEWED);
  } catch {
    return [];
  }
}

function saveRecentlyViewed(
  ids: string[]
) {
  try {
    localStorage.setItem(
      RECENTLY_VIEWED_KEY,
      JSON.stringify(
        ids.slice(
          0,
          MAX_RECENTLY_VIEWED
        )
      )
    );
  } catch {
    // Ignore storage errors.
  }
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
  const [showSplash, setShowSplash] =
    useState(true);

  const [activeTab, setActiveTab] =
    useState<Tab>("home");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<Category | null>(null);

  const [
    selectedProcedure,
    setSelectedProcedure,
  ] = useState<Procedure | null>(null);

  const [
    procedureSearch,
    setProcedureSearch,
  ] = useState("");

  const [
    recentlyViewedIds,
    setRecentlyViewedIds,
  ] = useState<string[]>([]);

  /* =======================================================
     LOAD + SYNCHRONIZE RECENTLY VIEWED
     ======================================================= */

  useEffect(() => {
    const loadRecent = () => {
      setRecentlyViewedIds(
        loadRecentlyViewed()
      );
    };

    // Load when application starts
    loadRecent();

    // Listen for the Settings clear action
    window.addEventListener(
      RECENTLY_VIEWED_CLEARED_EVENT,
      loadRecent
    );

    return () => {
      window.removeEventListener(
        RECENTLY_VIEWED_CLEARED_EVENT,
        loadRecent
      );
    };
  }, []);

  /* =======================================================
     SPLASH SCREEN
     ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     RESOLVE RECENTLY VIEWED IDS
     ======================================================= */

  const recentlyViewedProcedures =
    recentlyViewedIds
      .map((id) =>
        procedures.find(
          (procedure) =>
            procedure.id === id
        )
      )
      .filter(
        (
          procedure
        ): procedure is Procedure =>
          Boolean(procedure)
      );

  /* =======================================================
     NAVIGATION
     ======================================================= */

  const navigate = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedCategory(null);
    setSelectedProcedure(null);
    setProcedureSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     OPEN CATEGORY
     ======================================================= */

  const openCategory = (
    category: Category
  ) => {
    setActiveTab("procedures");
    setSelectedCategory(category);
    setSelectedProcedure(null);
    setProcedureSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     OPEN PROCEDURE
     ======================================================= */

  const openProcedure = (
    procedure: Procedure
  ) => {
    setSelectedProcedure(procedure);

    setRecentlyViewedIds(
      (currentIds) => {
        const updatedIds = [
          procedure.id,
          ...currentIds.filter(
            (id) =>
              id !== procedure.id
          ),
        ].slice(
          0,
          MAX_RECENTLY_VIEWED
        );

        saveRecentlyViewed(
          updatedIds
        );

        return updatedIds;
      }
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     OPEN FROM RECENTLY VIEWED
     ======================================================= */

  const openRecentlyViewedProcedure = (
    procedure: Procedure
  ) => {
    const matchingCategory =
      procedureCategories.find(
        (category) =>
          category.name ===
          procedure.category
      );

    setActiveTab("procedures");

    if (matchingCategory) {
      setSelectedCategory(
        matchingCategory
      );
    } else {
      setSelectedCategory({
        icon: "🩺",
        name: procedure.category,
        description:
          "Nursing procedures",
      });
    }

    openProcedure(procedure);
  };

  /* =======================================================
     CLEAR RECENTLY VIEWED
     ======================================================= */

  const clearRecentlyViewed = () => {
    /*
     * Remove the saved history first.
     */
    try {
      localStorage.removeItem(
        RECENTLY_VIEWED_KEY
      );
    } catch {
      // Ignore storage errors.
    }

    /*
     * Immediately update App's React state.
     */
    setRecentlyViewedIds([]);

    /*
     * Notify any component that needs to know
     * that Recently Viewed has been cleared.
     */
    window.dispatchEvent(
      new Event(
        RECENTLY_VIEWED_CLEARED_EVENT
      )
    );
  };

  /* =======================================================
     BACK TO CATEGORIES
     ======================================================= */

  const backToCategories = () => {
    setSelectedCategory(null);
    setSelectedProcedure(null);
    setProcedureSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     SPLASH
     ======================================================= */

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-decoration splash-decoration-one" />
        <div className="splash-decoration splash-decoration-two" />

        <div className="splash-content">
          <div className="splash-logo">
            <span>✚</span>
          </div>

          <h1 className="splash-title">
            NURSING
            <strong>
              COMPONENT TASK
            </strong>
          </h1>

          <p className="splash-subtitle">
            Nursing procedures & clinical
            learning
          </p>

          <div className="splash-visual">
            <div className="floating-procedure procedure-one">
              🩺
              <small>
                Assessment
              </small>
            </div>

            <div className="nurse-illustration">
              👩🏾‍⚕️
            </div>

            <div className="floating-procedure procedure-two">
              💉
              <small>
                Medication
              </small>
            </div>

            <div className="floating-procedure procedure-three">
              🩹
              <small>
                Wound Care
              </small>
            </div>
          </div>

          <div className="splash-loading">
            <div className="loading-track">
              <div className="loading-progress" />
            </div>

            <p>
              Preparing your clinical
              learning experience...
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     MAIN APP
     ======================================================= */

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="header-inner">

          <div className="brand">
            <div className="brand-icon">
              🩺
            </div>

            <div>
              <div className="logo">
                Nursing Component Task
              </div>

              <div className="tagline">
                Nursing procedures & clinical
                learning
              </div>
            </div>
          </div>

          <button
            className="credits-badge"
            onClick={() =>
              navigate("credits")
            }
            type="button"
          >
            <span>⭐</span>
            <strong>25</strong>
            <small>Credits</small>
          </button>

        </div>
      </header>

      <main className="content">

        {/* =================================================
           HOME
           ================================================= */}

        {activeTab === "home" && (
          <>
            <section className="home-welcome">
              <span className="welcome-label">
                WELCOME 👋
              </span>

              <h1>
                Learn. Practice. Care.
              </h1>

              <p>
                Your practical companion for
                learning and reviewing nursing
                procedures and clinical skills.
              </p>
            </section>

            <section className="featured-procedure">
              <div className="featured-icon">
                🩺
              </div>

              <div className="featured-content">
                <span className="featured-label">
                  PRACTICAL LEARNING
                </span>

                <h2>
                  Nursing Procedures
                </h2>

                <p>
                  Explore nursing procedures
                  organized into clear
                  professional categories.
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    navigate(
                      "procedures"
                    )
                  }
                  type="button"
                >
                  Browse Procedures
                  <span>→</span>
                </button>
              </div>
            </section>

            {/* ================= QUICK ACCESS ================= */}

            <section className="quick-section">
              <h2 className="section-title">
                Quick Access
              </h2>

              <div className="quick-grid">

                <button
                  className="quick-card"
                  onClick={() =>
                    navigate(
                      "procedures"
                    )
                  }
                  type="button"
                >
                  <span className="quick-icon">
                    📋
                  </span>

                  <span className="quick-text">
                    <strong>
                      All Procedures
                    </strong>

                    <small>
                      Browse the procedure
                      library
                    </small>
                  </span>

                  <span className="arrow">
                    ›
                  </span>
                </button>

                <button
                  className="quick-card"
                  onClick={() =>
                    navigate(
                      "credits"
                    )
                  }
                  type="button"
                >
                  <span className="quick-icon">
                    ⭐
                  </span>

                  <span className="quick-text">
                    <strong>
                      My Credits
                    </strong>

                    <small>
                      View your available
                      credits
                    </small>
                  </span>

                  <span className="arrow">
                    ›
                  </span>
                </button>

              </div>
            </section>

            {/* ================= RECENTLY VIEWED ================= */}

            <section className="recent-section">
              <h2 className="section-title">
                Recently Viewed
              </h2>

              {recentlyViewedProcedures.length ===
              0 ? (
                <div className="empty-state">
                  <div className="empty-icon">
                    🕘
                  </div>

                  <h3>
                    No procedures viewed yet
                  </h3>

                  <p>
                    Procedures you open will
                    appear here for quick
                    access.
                  </p>
                </div>
              ) : (
                <div className="category-list">

                  {recentlyViewedProcedures.map(
                    (procedure) => (
                      <button
                        key={procedure.id}
                        className="category-card"
                        onClick={() =>
                          openRecentlyViewedProcedure(
                            procedure
                          )
                        }
                        type="button"
                      >
                        <span className="category-icon">
                          🩺
                        </span>

                        <span className="category-content">
                          <strong>
                            {procedure.title}
                          </strong>

                          <small>
                            {procedure.category}
                          </small>
                        </span>

                        <span className="category-arrow">
                          ›
                        </span>
                      </button>
                    )
                  )}

                </div>
              )}
            </section>

            {/* ================= NMC INFO ================= */}

            <section className="nmc-info">
              <div className="nmc-icon">
                ✓
              </div>

              <div>
                <h3>
                  N&MC Procedure Resources
                </h3>

                <p>
                  Procedure resources are
                  organized using the relevant
                  Nursing and Midwifery Council
                  procedure manuals.
                </p>
              </div>
            </section>
          </>
        )}

        {/* =================================================
           PROCEDURE CATEGORIES
           ================================================= */}

        {activeTab === "procedures" &&
          !selectedCategory && (
            <section>

              <div className="page-heading">
                <span className="page-kicker">
                  CLINICAL SKILLS
                </span>

                <h1 className="page-title">
                  Nursing Procedures
                </h1>

                <p className="page-description">
                  Choose your nursing programme
                  to explore its procedure
                  library.
                </p>
              </div>

              <div className="procedure-search">
                <span>🔍</span>

                <input
                  type="search"
                  placeholder="Search categories..."
                  value={
                    procedureSearch
                  }
                  onChange={(event) =>
                    setProcedureSearch(
                      event.target.value
                    )
                  }
                />
              </div>

              <div className="procedure-helper">
                <span>🩺</span>

                <div>
                  <strong>
                    Choose a category
                  </strong>

                  <small>
                    Select your programme to
                    view its procedures.
                  </small>
                </div>
              </div>

              <div className="category-list">

                {procedureCategories
                  .filter((category) =>
                    category.name
                      .toLowerCase()
                      .includes(
                        procedureSearch
                          .toLowerCase()
                      )
                  )
                  .map((category) => (
                    <button
                      className="category-card"
                      key={category.name}
                      onClick={() =>
                        openCategory(
                          category
                        )
                      }
                      type="button"
                    >
                      <span className="category-icon">
                        {category.icon}
                      </span>

                      <span className="category-content">
                        <strong>
                          {category.name}
                        </strong>

                        <small>
                          {
                            category.description
                          }
                        </small>
                      </span>

                      <span className="category-arrow">
                        ›
                      </span>
                    </button>
                  ))}

                {procedureCategories.filter(
                  (category) =>
                    category.name
                      .toLowerCase()
                      .includes(
                        procedureSearch
                          .toLowerCase()
                      )
                ).length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">
                      🔍
                    </div>

                    <h3>
                      No category found
                    </h3>

                    <p>
                      Try a different search
                      term.
                    </p>
                  </div>
                )}

              </div>
            </section>
          )}

        {/* =================================================
           PROCEDURES IN CATEGORY
           ================================================= */}

        {activeTab === "procedures" &&
          selectedCategory &&
          !selectedProcedure && (
            <section>

              <button
                className="back-button"
                onClick={
                  backToCategories
                }
                type="button"
              >
                ← All Categories
              </button>

              <div className="category-header">
                <div className="category-header-icon">
                  {
                    selectedCategory.icon
                  }
                </div>

                <div>
                  <span className="page-kicker">
                    PROCEDURE LIBRARY
                  </span>

                  <h1 className="page-title">
                    {
                      selectedCategory.name
                    }
                  </h1>

                  <p className="page-description">
                    {
                      selectedCategory.description
                    }
                  </p>
                </div>
              </div>

              <ProcedureList
                category={
                  selectedCategory.name
                }
                onSelectProcedure={(
                  procedureId
                ) => {
                  const procedure =
                    procedures.find(
                      (item) =>
                        item.id ===
                        procedureId
                    );

                  if (procedure) {
                    openProcedure(
                      procedure
                    );
                  }
                }}
              />

            </section>
          )}

        {/* =================================================
           PROCEDURE DETAILS
           ================================================= */}

        {activeTab === "procedures" &&
          selectedCategory &&
          selectedProcedure && (
            <ProcedureDetails
              procedure={
                selectedProcedure
              }
              onBack={() =>
                setSelectedProcedure(
                  null
                )
              }
            />
          )}

        {/* =================================================
           CREDITS
           ================================================= */}

        {activeTab === "credits" && (
          <section>

            <div className="page-heading">
              <span className="page-kicker">
                YOUR ACCOUNT
              </span>

              <h1 className="page-title">
                Credits
              </h1>

              <p className="page-description">
                Manage and use your Nursing
                Component Task credits.
              </p>
            </div>

            <div className="credits-display">
              <div className="large-star">
                ⭐
              </div>

              <strong>25</strong>

              <span>
                Available Credits
              </span>
            </div>

            <div className="info-card">
              <h3>
                How credits work
              </h3>

              <p>
                Credits will be used for
                selected premium features and
                learning activities as they
                become available.
              </p>
            </div>

          </section>
        )}

        {/* =================================================
           ABOUT
           ================================================= */}

        {activeTab === "about" && (
          <section>

            <div className="page-heading">
              <span className="page-kicker">
                ABOUT THE APP
              </span>

              <h1 className="page-title">
                About
              </h1>
            </div>

            <div className="about-card">

              <div className="about-logo">
                🩺
              </div>

              <h2>
                Nursing Component Task
              </h2>

              <p>
                A practical learning app
                designed to help nursing
                students and nurses review
                nursing procedures and
                clinical skills through
                concise procedure guides and
                videos.
              </p>

              <div className="about-details">

                <div>
                  <span>
                    Version
                  </span>

                  <strong>
                    3.0
                  </strong>
                </div>

                <div>
                  <span>
                    Developer
                  </span>

                  <strong>
                    Bliss Innovation
                  </strong>
                </div>

                <div>
                  <span>
                    Developed by
                  </span>

                  <strong>
                    Felix Nuakoh
                  </strong>
                </div>

              </div>

              <div className="nmc-credit">
                <strong>
                  Credit
                </strong>

                <p>
                  Nursing procedures are based
                  on the Nursing and Midwifery
                  Council (N&MC) procedure
                  manuals.
                </p>
              </div>

              <div className="developer-contact">

                <h3>
                  Have feedback or questions?
                </h3>

                <p>
                  I'd love to hear from you.
                </p>

                <div className="contact-buttons">

                  <a
                    href="mailto:felixbliss1@gmail.com"
                    className="contact-button"
                  >
                    📧 Email Developer
                  </a>

                  <a
                    href="https://wa.me/233541743817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button whatsapp-button"
                  >
                    💬 WhatsApp Developer
                  </a>

                </div>

              </div>

              <p className="about-disclaimer">
                For educational purposes.
                Always follow current N&MC
                guidance and your institution's
                approved protocols.
              </p>

            </div>
          </section>
        )}

        {/* =================================================
           SETTINGS
           ================================================= */}

        {activeTab === "settings" && (
          <Settings
            onAbout={() =>
              navigate("about")
            }
            onClearRecentHistory={
              clearRecentlyViewed
            }
          />
        )}

      </main>

      {/* ===================================================
         BOTTOM NAVIGATION
         =================================================== */}

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">

          <button
            className={`nav-button ${
              activeTab === "home"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigate("home")
            }
            type="button"
          >
            <span>🏠</span>

            <small>
              Home
            </small>
          </button>

          <button
            className={`nav-button ${
              activeTab === "procedures"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigate("procedures")
            }
            type="button"
          >
            <span>🩺</span>

            <small>
              Procedures
            </small>
          </button>

          <button
            className={`nav-button ${
              activeTab === "about"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigate("about")
            }
            type="button"
          >
            <span>ℹ️</span>

            <small>
              About
            </small>
          </button>

          <button
            className={`nav-button ${
              activeTab === "settings"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigate("settings")
            }
            type="button"
          >
            <span>⚙️</span>

            <small>
              Settings
            </small>
          </button>

        </div>
      </nav>

    </div>
  );
}
