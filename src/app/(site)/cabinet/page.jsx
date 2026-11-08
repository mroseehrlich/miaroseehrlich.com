
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";

export const metadata = {
  title: "Cabinet | Mia Rose Ehrlich",
  description:
    "A collection of interactive experiments, curiosities, and other things requiring closer examination.",
};

export default function CabinetPage() {
  return (
    <main className="cabinet-page">
      <PageHeader 
        title="Cabinet"
        description="Experiments in writing, interaction, and other assorted oddities."
      />

      <section className="cabinet-collection" aria-label="Cabinet collection">
        <div className="cabinet-case">
          <div className="cabinet-case-top">
            <span>Collection № 001</span>
            <span>Unclassified</span>
          </div>

          <div className="cabinet-case-interior">
            <p>Pending acquisition.</p>
          </div>

          <div className="cabinet-case-bottom">
            The collection is currently behaving itself.
          </div>
        </div>
      </section>
    </main>
  );
}
