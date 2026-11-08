import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="intro">
        <div className="intro-copy">
          <h1>Mia Rose Ehrlich</h1>

          <div className="intro-identity">
            <span className="intro-role">Software engineer</span>
            <span className="intro-separator" aria-hidden="true">/</span>
            <span className="intro-location">Santa Fe, New Mexico</span>
          </div>

          <p className="intro-description">
            Backend systems, web applications, writing, and digital
            spaces with a sense of place.
          </p>

        </div>

        <div className="artifact" aria-hidden="true">
          <img src="/desert.jpg" alt="" />
        </div>
      </section>

      <Link
        className="section section-link"
        href="/projects"
      >
        <h2>Projects</h2>

        <div className="section-copy">
          <p className="quiet">
            Selected work and ongoing experiments.
          </p>
        </div>
      </Link>

      <Link
        className="section section-link"
        href="/writing"
      >
        <h2>Writing</h2>

        <div className="section-copy">
          <p className="quiet">
            Essays, notes, and fragments.
          </p>
        </div>
      </Link>

      <Link
        className="section section-link"
        href="/photos"
      >
        <h2>Still Life</h2>

        <div className="section-copy">
          <p className="quiet">
            Images, objects, and observations.
          </p>
        </div>
      </Link>

            <Link
        className="section section-link"
        href="/cabinet"
      >
        <h2>Cabinet</h2>

        <div className="section-copy">
          <p className="quiet">
            Items resisting classification.
          </p>
        </div>
      </Link>

      <Link
        className="section section-link"
        href="/about"
      >
        <h2>About</h2>

        <div className="section-copy">
          <p className="quiet">
            The proprietor, and other loose ends.
          </p>
        </div>
      </Link>
    </main>
  );
}