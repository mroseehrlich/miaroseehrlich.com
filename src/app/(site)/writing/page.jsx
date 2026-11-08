
import Link from "next/link";

import PageHeader from "../../../components/PageHeader";
import { client } from "../../../sanity/lib/client";
import { WRITING_QUERY } from "../../../sanity/lib/queries";

export const metadata = {
  title: "Writing | Mia Rose Ehrlich",
  description: "Writing by Mia Rose Ehrlich.",
};

export default async function WritingPage() {
  const entries = await client.fetch(WRITING_QUERY);

  return (
    <main className="subpage">
      <PageHeader 
        title="Writing"
      />

      <section
        className="writing-list"
        aria-label="Published writing"
      >
        {entries.length === 0 ? (
          <p className="quiet">Nothing published yet.</p>
        ) : (
          entries.map((entry) => (
            <article
              className="writing-entry"
              key={entry._id}
            >
              {entry.publishedAt && (
                <time dateTime={entry.publishedAt}>
                  {new Date(
                    `${entry.publishedAt}T12:00:00Z`
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              )}

              <h2>
                <Link href={`/writing/${entry.slug}`}>
                  {entry.title}
                </Link>
              </h2>

              {entry.subtitle && (
                <p className="writing-subtitle">
                  {entry.subtitle}
                </p>
              )}

              {entry.excerpt && (
                <p className="writing-excerpt">
                  {entry.excerpt}
                </p>
              )}
            </article>
          ))
        )}
      </section>
    </main>
  );
}
