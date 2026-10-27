import Link from "next/link";

export const metadata = {
  title: "Writing | Mia Rose Ehrlich",
};

export default function WritingPage() {
  return (
    <main className="subpage">
      <Link className="back-link" href="/">
        Mia Rose Ehrlich
      </Link>

      <section className="subpage-content">
        <h1>Writing</h1>
        <p>In progress.</p>
      </section>
    </main>
  );
}