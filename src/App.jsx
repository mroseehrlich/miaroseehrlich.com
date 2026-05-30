function App() {
  return (
    <main className="page">
      <section className="intro">
        <div className="artifact" aria-hidden="true">
          <img src="/desert.jpg" alt="" />
        </div>

        <div className="intro-copy">
          <h1>
            Mia Rose <span>Ehrlich</span>
          </h1>
          <p className="lede">Software engineer based in Santa Fe, New Mexico.</p>
          <p>
            Backend systems, web applications, writing, and digital spaces with a
            sense of place.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="section-copy">
          <p className="quiet">Selected work forthcoming.</p>
        </div>
      </section>

      <section className="section">
        <h2>Writing</h2>
        <div className="section-copy">
          <p className="quiet">Notes forthcoming.</p>
        </div>
      </section>
    </main>
  )
}

export default App
