import React from "react";

const categories = [
  { icon: "🩺", name: "Assessment", count: "Clinical assessment skills" },
  { icon: "💉", name: "Medication", count: "Medication procedures" },
  { icon: "🩹", name: "Wound Care", count: "Wound & dressing care" },
  { icon: "🫁", name: "Respiratory", count: "Respiratory procedures" },
  { icon: "❤️", name: "Cardiovascular", count: "Cardiac & circulation" },
  { icon: "🚑", name: "Emergency", count: "Emergency procedures" }
];

export default function App() {
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
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>
                  {category.icon}
                </div>

                <h3>{category.name}</h3>

                <p>{category.count}</p>
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

Commit the change.

What we've achieved

We now have the beginning of the actual application:

Header → Nursing branding

Hero → introduction + procedure search

Categories → clinical areas

Bottom navigation → Home / Procedures / Quizzes / Credits

The buttons don't do anything yet—that's intentional. We'll connect them after we establish the procedure data and navigation.

Next, we'll create the splash screen and then make the Procedures section actually load local procedure data.
