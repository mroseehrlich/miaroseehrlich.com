import Link from "next/link";
import PageHeader from "../../components/PageHeader";
export const metadata = {
  title: "Writing | Mia Rose Ehrlich",
};

export default function WritingPage() {
  return (
    <main className="subpage">
      <section className="subpage-content">
        <PageHeader
          title="Writing"
          description="In progress."
        />
      </section>
    </main>
  );
}