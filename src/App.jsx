function App() {
  return (
    <main className="page">
      <section className="intro" aria-labelledby="site-title">
        <h1 id="site-title">Mia Rose Ehrlich</h1>
        <p className="lede">Software engineer based in Santa Fe, New Mexico.</p>
        <p>
          Backend systems, web applications, writing, and digital spaces with a
          sense of place.
        </p>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <div className="section-copy">
          <p className="quiet">Selected work forthcoming.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="writing-title">
        <h2 id="writing-title">Writing</h2>
        <div className="section-copy">
          <p className="quiet">Notes forthcoming.</p>
        </div>
      </section>

      <footer className="footer">
        <a href="mailto:mia@miaroseehrlich.com">mia@miaroseehrlich.com</a>
      </footer>
    </main>
  )
}

export default App
