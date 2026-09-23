import React, { useEffect, useState } from "react";
import Settings from "./Settings";
import ProcedureList from "./components/ProcedureList";
import ProcedureDetails from "./components/ProcedureDetails";
import Icon from "./components/Icon";
import BannerAd from "./components/BannerAd";
import { procedures, type Procedure } from "./data/procedures";
import {
  getBalance,
  addStars,
  getStarTransactions,
  type StarTransaction,
} from "./services/creditService";
import {
  adService,
  getRewardedAdsToday,
  canWatchRewardedAd,
  STAR_ECONOMY,
  type AdResult,
  canShowInterstitialAd,
} from "./services/adService";
import {
  initConnectivityListeners,
  subscribeConnectivity,
  isOnline as checkOnline,
} from "./services/connectivityService";

type Tab =
  | "home"
  | "procedures"
  | "about"
  | "settings"
  | "credits";

type Category = {
  icon: React.ReactNode;
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
    icon: <Icon name="medical" size={28} />,
    name: "General Nursing (RGN)",
    description:
      "Registered General Nursing procedures",
  },
  {
    icon: <Icon name="pregnancy" size={28} />,
    name: "Midwifery (RM)",
    description: "Midwifery procedures",
  },
  {
    icon: <Icon name="brain" size={28} />,
    name: "Community Mental Health Nursing (RCMN)",
    description:
      "Community mental health procedures",
  },
  {
    icon: <Icon name="brain" size={28} />,
    name: "Mental Health Nursing (RMN)",
    description: "Mental health nursing procedures",
  },
  {
    icon: <Icon name="globe" size={28} />,
    name: "Public Health Nursing (PHN)",
    description: "Public health nursing procedures",
  },
  {
    icon: <Icon name="baby" size={28} />,
    name: "Paediatric Nursing (PAED)",
    description: "Paediatric nursing procedures",
  },
  {
    icon: <Icon name="heart" size={28} />,
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

  const [splashProgress, setSplashProgress] =
    useState(0);

  const [starBalance, setStarBalance] =
    useState<number>(() => getBalance());

  const [starTransactions, setStarTransactions] =
    useState<StarTransaction[]>(() => getStarTransactions());

  const [isRewardedAdLoading, setIsRewardedAdLoading] =
    useState(false);

  const [isOnlineState, setIsOnlineState] =
    useState<boolean>(() => checkOnline());

  const [shareFeedback, setShareFeedback] = useState("");

  /* Initialize connectivity listeners on mount */
  useEffect(() => {
    initConnectivityListeners();
    
    const unsubscribe = subscribeConnectivity((state) => {
      setIsOnlineState(state.isOnline);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  /* Keep the displayed Star balance and history synchronized with storage. */
  useEffect(() => {
    const refreshStarState = () => {
      setStarBalance(getBalance());
      setStarTransactions(getStarTransactions());
    };

    const handleStarsUpdated = () => {
      refreshStarState();
    };

    const handleStorage = (event: StorageEvent) => {
      if (
        event.key === "component-task-stars" ||
        event.key === "component-task-star-transactions"
      ) {
        refreshStarState();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refreshStarState();
      }
    };

    // Synchronize once on mount and whenever the Credits page is revisited.
    refreshStarState();

    window.addEventListener("stars-updated", handleStarsUpdated);
    window.addEventListener("storage", handleStorage);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("stars-updated", handleStarsUpdated);
      window.removeEventListener("storage", handleStorage);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (activeTab === "credits") {
      setStarBalance(getBalance());
      setStarTransactions(getStarTransactions());
    }
  }, [activeTab]);

  const categoryProcedures = selectedCategory
    ? procedures.filter(
        (procedure) =>
          procedure.category ===
          selectedCategory.name
      )
    : [];

  const selectedProcedureIndex =
    selectedProcedure
      ? categoryProcedures.findIndex(
          (procedure) =>
            procedure.id ===
            selectedProcedure.id
        )
      : -1;

  const nextProcedure =
    selectedProcedureIndex >= 0 &&
    selectedProcedureIndex <
      categoryProcedures.length - 1
      ? categoryProcedures[
          selectedProcedureIndex + 1
        ]
      : null;

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
    const splashDuration = 2600;
    const startedAt = performance.now();
    let finishTimer: number | undefined;

    const progressTimer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const progress = Math.min(
        100,
        Math.round(
          (elapsed / splashDuration) * 100
        )
      );

      setSplashProgress(progress);

      if (progress >= 100) {
        window.clearInterval(progressTimer);
        finishTimer = window.setTimeout(() => {
          setShowSplash(false);
        }, 420);
      }
    }, 32);

    return () => {
      window.clearInterval(progressTimer);

      if (finishTimer) {
        window.clearTimeout(finishTimer);
      }
    };
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
        icon: <Icon name="medical" size={28} />,
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

  const backToProcedureList = () => {
    setSelectedProcedure(null);

    // Attempt to show interstitial ad on natural navigation point
    if (canShowInterstitialAd()) {
      adService.showInterstitialAd().then((result) => {
        if (result.success) {
          // Ad shown successfully - no action needed, just let navigation complete
          console.log('Interstitial ad shown');
        }
      }).catch(() => {
        // Silently ignore errors - navigation should not be blocked
      });
    }

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
        <div className="splash-device">
          <div className="splash-main">
            <div className="splash-illustration-card">
              <img
                src="/nurse-icons-set_1284-14375.svg"
                alt="Nurse icons illustration"
                className="splash-logo-illustration"
              />
            </div>
            <h1 className="splash-title">Component Task</h1>
            <p className="splash-subtitle">Practice everywhere</p>
            <div className="splash-loading" aria-hidden="true">
              <div className="loading-track">
                <div className="loading-progress" style={{ width: `${splashProgress}%` }} />
              </div>
            </div>
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
              <Icon name="medical" size={30} />
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
            <span><Icon name="star" size={18} /></span>
            <strong>{starBalance}</strong>
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
                WELCOME <Icon name="hand" size={16} />
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
                <Icon name="medical" size={30} />
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
                  <span><Icon name="arrowRight" size={18} /></span>
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
                    <Icon name="clipboard" size={24} />
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
                    <Icon name="chevron" size={18} />
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
                    <Icon name="star" size={24} />
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
                    <Icon name="chevron" size={18} />
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
                    <Icon name="clock" size={30} />
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
                          <Icon name="medical" size={30} />
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
                          <Icon name="chevron" size={18} />
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
                <Icon name="check" size={20} />
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

            {/* ================= BANNER AD ================= */}

            <BannerAd />
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
                <span><Icon name="search" size={20} /></span>

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
                <span><Icon name="medical" size={18} /></span>

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
                        <Icon name="chevron" size={18} />
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
                      <Icon name="search" size={20} />
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
                <Icon name="arrowLeft" size={18} /> All Categories
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
          <>
            <ProcedureDetails
              procedure={
                selectedProcedure
              }
              onBack={backToProcedureList}
              onNext={
                nextProcedure
                  ? () =>
                      openProcedure(
                        nextProcedure
                      )
                  : undefined
              }
              nextProcedureTitle={
                nextProcedure?.title
              }
              isOnline={isOnlineState}
            />

            {/* ================= BANNER AD ================= */}

            {isOnlineState && (
              <div className="banner-ad-container">
                <div className="banner-ad">
                  <span className="banner-ad-label">Advertisement</span>
                  <div className="banner-ad-content">
                    Mock Banner Ad Space
                  </div>
                </div>
              </div>
            )}
          </>
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
                <Icon name="star" size={24} />
              </div>

              <strong>{starBalance}</strong>

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

            <div className="info-card">
              <h3>
                Recent Star Activity
              </h3>
              {starTransactions.length === 0 ? (
                <p className="star-history-empty">No Star activity yet.</p>
              ) : (
                <div className="star-history-list">
                  {starTransactions.map((transaction) => (
                    <div className="star-history-item" key={transaction.id}>
                      <span className={`star-history-icon ${transaction.type}`}>
                        <Icon name={transaction.type === "reward" ? "plus" : "star"} size={16} />
                      </span>
                      <span className="star-history-details">
                        <strong>{transaction.reason}</strong>
                        <small>{new Date(transaction.createdAt).toLocaleString()}</small>
                      </span>
                      <span className={`star-history-amount ${transaction.type}`}>
                        {transaction.amount > 0 ? "+" : ""}{transaction.amount} ⭐
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="info-card">
              <h3>
                Earn more credits
              </h3>

              {!isOnlineState && (
                <p className="video-offline-message" style={{ marginTop: "8px" }}>
                  Internet connection required to earn Stars.
                </p>
              )}

              <button
                className="rewarded-ad-card"
                disabled={!isOnlineState || !canWatchRewardedAd() || isRewardedAdLoading}
                onClick={async () => {
                  if (!isOnlineState || isRewardedAdLoading || !canWatchRewardedAd()) return;
                  setIsRewardedAdLoading(true);
                  try {
                    const result: AdResult = await adService.showRewardedAd();
                    if (result.success) {
                      const newBalance = addStars(STAR_ECONOMY.rewards.rewardedAd, "Rewarded ad");
                      setStarBalance(newBalance);
                      window.dispatchEvent(new CustomEvent('stars-updated'));
                    }
                  } finally {
                    setIsRewardedAdLoading(false);
                  }
                }}
                type="button"
                title={!isOnlineState ? "Internet connection required" : isRewardedAdLoading ? "Rewarded ad is loading" : canWatchRewardedAd() ? "Watch a rewarded ad to earn +5 Stars" : "Daily limit reached"}
              >
                <span className="rewarded-ad-icon">
                  <Icon name="video" size={25} />
                </span>
                <span className="rewarded-ad-content">
                  <strong>{isRewardedAdLoading ? "Loading Rewarded Ad…" : "Watch a Rewarded Ad"}</strong>
                  <small>{isRewardedAdLoading ? "Please wait…" : "Earn +5 Stars"}</small>
                </span>
                <span className="rewarded-ad-arrow">
                  <Icon name="chevron" size={22} />
                </span>
              </button>

              <div style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
                <strong>Ads today: {getRewardedAdsToday()}/{STAR_ECONOMY.limits.maxRewardedAdsPerDay}</strong>
              </div>
            </div>

            {/* ================= BANNER AD ================= */}

            {isOnlineState && (
              <div className="banner-ad-container">
                <div className="banner-ad">
                  <span className="banner-ad-label">Advertisement</span>
                  <div className="banner-ad-content">
                    Mock Banner Ad Space
                  </div>
                </div>
              </div>
            )}

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
                <Icon name="medical" size={30} />
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
                    2.1
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

                <button
                  type="button"
                  className="contact-button"
                  onClick={async () => {
                    const shareData = {
                      title: "Component Task",
                      text: "Check out Component Task — a nursing procedure and clinical learning app.",
                      url: "https://play.google.com/store/apps/details?id=com.my.componenttask",
                    };

                    try {
                      if (navigator.share) {
                        await navigator.share(shareData);
                        setShareFeedback("");
                      } else if (navigator.clipboard) {
                        await navigator.clipboard.writeText(shareData.url);
                        setShareFeedback("App link copied. You can share it with your friends.");
                      }
                    } catch {
                      // The user may cancel the native share sheet; no error is needed.
                    }
                  }}
                >
                  <Icon name="megaphone" size={18} /> Share Component Task
                </button>

                {shareFeedback && (
                  <p className="share-feedback" role="status">
                    {shareFeedback}
                  </p>
                )}

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
                    <Icon name="mail" size={18} /> Email Developer
                  </a>

                  <a
                    href="https://wa.me/233541743817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button whatsapp-button"
                  >
                    <Icon name="whatsapp" size={18} /> WhatsApp Developer
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
            <span><Icon name="home" size={22} /></span>

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
            <span><Icon name="medical" size={18} /></span>

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
            <span><Icon name="info" size={22} /></span>

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
            <span><Icon name="settings" size={22} /></span>

            <small>
              Settings
            </small>
          </button>

        </div>
      </nav>

    </div>
  );
}
