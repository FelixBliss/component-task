import React, { useEffect, useState } from "react";

const procedureCategories = [
  { icon: "🩺", name: "General Nursing (RGN)" },
  { icon: "🤰", name: "Midwifery (RM)" },
  { icon: "🧠", name: "Community Mental Health Nursing (RCMN)" },
  { icon: "🧠", name: "Mental Health Nursing (RMN)" },
  { icon: "🌍", name: "Public Health Nursing (PHN)" },
  { icon: "👶", name: "Paediatric Nursing (PAED)" },
  { icon: "❤️", name: "Pain Management (PM)" }
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-circle splash-circle-one"></div>
        <div className="splash-circle splash-circle-two"></div>

        <div className="splash-content">
          <div className="medical-symbol">✚</div>

          <div className="splash-title">
            NURSING
            <br />
            <span>COMPONENT TASK</span>
          </div>

          <p className="splash-subtitle">
            Nursing procedures & clinical learning
          </p>

          <div className="nursing-illustration">
            <div className="nurse-head">👩🏾‍⚕️</div>

            <div className="procedure-card card-one">
              <span>🩺</span>
              <small>Assessment</small>
            </div>

            <div className="procedure-card card-two">
              <span>💉</span>
              <small>Medication</small>
            </div>

            <div className="procedure-card card-three">
              <span>🩹</span>
              <small>Wound Care</small>
            </div>
          </div>

          <div className="loading-area">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>

            <p>Preparing your clinical learning experience...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="top-row">
            <div>
              <div className="logo">🩺 Nursing Component Task</div>
              <div className="tagline">
                Nursing procedures & clinical learning
              </div>
            </div>

            <button
              className="credits-badge"
              onClick={() => setActiveTab("credits")}
              aria-label="Open credits"
            >
              ⭐ 25
            </button>
          </div>
        </div>
      </header>

      <main className="content">

        {activeTab === "home" && (
          <>
            <section className="hero">
              <h1>Learn. Practice. Care.</h1>

              <p>
                Explore nursing procedures and clinical learning resources
                designed to support your nursing practice.
              </p>

              <input
                className="search"
                type="search"
                placeholder="Search nursing procedures..."
                aria-label="Search nursing procedures"
              />
            </section>

            <section>
              <h2 className="section-title">Quick Access</h2>

              <div className="card-grid">
                <div
                  className="card"
                  onClick={() => setActiveTab("procedures")}
                >
                  <div className="category-icon">🩺</div>
                  <h3>Procedures</h3>
                  <p>Browse nursing procedures and clinical skills.</p>
                </div>

                <div className="card">
                  <div className="category-icon">⭐</div>
                  <h3>Credits</h3>
                  <p>View your available credits.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "procedures" && (
          <section>
            <h1 className="page-title">Nursing Procedures</h1>

            <p className="page-description">
              Select a category to explore nursing procedures.
            </p>

            <div className="card-grid">
              {procedureCategories.map((category) => (
                <div className="card procedure-category" key={category.name}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>View procedures →</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "credits" && (
          <section>
            <h1 className="page-title">Credits</h1>

            <div className="credits-card">
              <div className="credits-star">⭐</div>
              <div className="credits-number">25</div>
              <p>Available Credits</p>
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section>
            <h1 className="page-title">About</h1>

            <div className="card about-card">
              <div className="category-icon">🩺</div>

              <h3>Nursing Component Task</h3>

              <p>
                A nursing learning application designed to help nurses and
                nursing students study clinical procedures and strengthen
                practical knowledge.
              </p>

              <div className="about-info">
                <strong>Version</strong>
                <span>1.0</span>
              </div>

              <div className="about-info">
                <strong>Platform</strong>
                <span>Web / PWA</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === "settings" && (
          <section>
            <h1 className="page-title">Settings</h1>

            <div className="card">
              <h3>App Settings</h3>
              <p>
                Settings and preferences will be available here.
              </p>
            </div>
          </section>
        )}

      </main>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">

          <button
            className={`nav-button ${
              activeTab === "home" ? "active" : ""
            }`}
            onClick={() => setActiveTab("home")}
          >
            🏠
            <br />
            Home
          </button>

          <button
            className={`nav-button ${
              activeTab === "procedures" ? "active" : ""
            }`}
            onClick={() => setActiveTab("procedures")}
          >
            🩺
            <br />
            Procedures
          </button>

          <button
            className={`nav-button ${
              activeTab === "about" ? "active" : ""
            }`}
            onClick={() => setActiveTab("about")}
          >
            ℹ️
            <br />
            About
          </button>

          <button
            className={`nav-button ${
              activeTab === "settings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            ⚙️
            <br />
            Settings
          </button>

        </div>
      </nav>
    </div>
  );
            }
