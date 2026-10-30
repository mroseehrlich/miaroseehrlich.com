import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="intro">
        <div className="intro-copy">
          <h1>Mia Rose Ehrlich</h1>

          <p className="lede">
            Software engineer based in Santa Fe, New Mexico.
          </p>

          <p>
            Backend systems, web applications, writing, and
            digital spaces with a sense of place.
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
    </main>
  );
}