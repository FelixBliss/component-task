import React, { useEffect, useState } from "react";

const categories = [
  { icon: "🩺", name: "Assessment", description: "Clinical assessment skills" },
  { icon: "💉", name: "Medication", description: "Medication procedures" },
  { icon: "🩹", name: "Wound Care", description: "Wound & dressing care" },
  { icon: "🫁", name: "Respiratory", description: "Respiratory procedures" },
  { icon: "❤️", name: "Cardiovascular", description: "Cardiac & circulation" },
  { icon: "🚑", name: "Emergency", description: "Emergency procedures" }
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);

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
          <div className="logo">🩺 Nursing Component Task</div>

          <div className="tagline">
            Nursing procedures & clinical learning
          </div>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <h1>Learn. Practice. Care.</h1>

          <p>
            Explore nursing procedures, clinical skills and learning resources
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
          <h2 className="section-title">Procedure Categories</h2>

          <div className="card-grid">
            {categories.map((category) => (
              <div className="card" key={category.name}>
                <div className="category-icon">{category.icon}</div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <button className="nav-button active">
            🏠
            <br />
            Home
          </button>

          <button className="nav-button">
            📋
            <br />
            Procedures
          </button>

          <button className="nav-button">
            🧠
            <br />
            Quizzes
          </button>

          <button className="nav-button">
            ⭐
            <br />
            Credits
          </button>
        </div>
      </nav>
    </div>
  );
}
