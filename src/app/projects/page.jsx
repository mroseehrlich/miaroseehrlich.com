import Link from "next/link";

export const metadata = {
  title: "Projects | Mia Rose Ehrlich",
};

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <Link className="back-link" href="/">
        Mia Rose Ehrlich
      </Link>

      <section className="subpage-content">
        <h1>Projects</h1>
        <p>In progress.</p>
      </section>
    </main>
  );
}