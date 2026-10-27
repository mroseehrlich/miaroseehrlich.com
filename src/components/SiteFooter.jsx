export default function SiteFooter() {
  return (
    <footer className="footer">
      <p>
        For engineering work, collaboration, or conversation.
      </p>

      <nav
        className="footer-links"
        aria-label="Contact and external links"
      >
        <a href="mailto:mia.rose.ehrlich@gmail.com">Email</a>

        <a
          href="https://github.com/mroseehrlich"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a href="/resume.pdf">Résumé</a>
      </nav>
    </footer>
  );
}