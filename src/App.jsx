import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <>
      <main>
        <section className="intro">
          <div className="intro-copy">
            <h1>Mia Rose Ehrlich</h1>

            <p className="lede">
              Software engineer based in Santa Fe, New Mexico.
            </p>

            <p>
              Backend systems, web applications, writing, and digital spaces
              with a sense of place.
            </p>
          </div>

          <div className="artifact" aria-hidden="true">
            <img src="/desert.jpg" alt="" />
          </div>
        </section>

        <Link className="section section-link" to="/projects">
          <h2>Projects</h2>
          <div className="section-copy">
            <p className="quiet">Selected software work and project notes.</p>
          </div>
        </Link>

        <Link className="section section-link" to="/writing">
          <h2>Writing</h2>
          <div className="section-copy">
            <p className="quiet">Essays, notes, and fragments.</p>
          </div>
        </Link>
      </main>

      <SiteFooter />
    </>
  );
}

function PlaceholderPage({ title, note }) {
  return (
    <>
      <main className="subpage">
        <Link className="back-link" to="/">
          Mia Rose Ehrlich
        </Link>

        <section className="subpage-content">
          <h1>{title}</h1>
          <p>{note}</p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <p>For engineering work, collaboration, or conversation.</p>

      <nav className="footer-links" aria-label="Contact and external links">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="https://github.com/your-username">GitHub</a>
        <a href="/resume.pdf">Résumé</a>
      </nav>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <PlaceholderPage
                title="Projects"
                note="Selected software work and project notes will live here."
              />
            }
          />
          <Route
            path="/writing"
            element={
              <PlaceholderPage
                title="Writing"
                note="Essays, notes, and fragments will collect here."
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}