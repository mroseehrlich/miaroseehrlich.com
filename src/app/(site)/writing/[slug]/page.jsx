
import { notFound } from "next/navigation";
import RichText from "../../../../components/RichText";
import PageHeader from "../../../../components/PageHeader";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import { client } from "../../../../sanity/lib/client";
import { WRITING_ENTRY_QUERY } from "../../../../sanity/lib/queries";

async function getEntry(slug) {
  return client.fetch(
    WRITING_ENTRY_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = await getEntry(slug);

  if (!entry) {
    return { title: "Writing not found" };
  }

  return {
    title: `${entry.title} | Mia Rose Ehrlich`,
    description: entry.excerpt || entry.subtitle,
  };
}

export default async function WritingEntryPage({ params }) {
  const { slug } = await params;
  const entry = await getEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="subpage">
      <article className="writing-detail">
        <PageHeader
          title={entry.title}
          description={entry.subtitle}
          parent={{
            href: "/writing",
            label: "All writing",
          }}
        >
          {entry.publishedAt && (
            <time
              className="writing-date"
              dateTime={entry.publishedAt}
            >
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
        </PageHeader>

        {entry.featuredImage?.asset && (
          <figure className="writing-featured-image">
            <Image
              src={urlFor(entry.featuredImage)
                .width(1200)
                .height(750)
                .auto("format")
                .url()}
              alt={entry.featuredImage.alt || ""}
              width={1200}
              height={750}
              sizes="(max-width: 700px) 100vw, 736px"
            />
          </figure>
        )}

        <div className="writing-body">
          <RichText value={entry.body} />
        </div>
      </article>
    </main>
  );
}
