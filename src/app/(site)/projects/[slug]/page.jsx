
import Link from "next/link";
import PageHeader from "../../../../components/PageHeader";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { client } from "../../../../sanity/lib/client";
import { PROJECT_QUERY } from "../../../../sanity/lib/queries";

async function getProject(slug) {
  return client.fetch(
    PROJECT_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Mia Rose Ehrlich`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="subpage">
      <PageHeader
        title={project.title}
        description={project.summary}
        parent={{ href: "/projects", label: "All projects" }}
      >
        {project.technologies?.length > 0 && (
          <p className="quiet page-header-meta">
            {project.technologies.join(" · ")}
          </p>
        )}
      </PageHeader>

      {project.featuredImage?.asset && (
        <figure className="project-featured-image">
          <Image
            src={urlFor(project.featuredImage)
              .width(1200)
              .height(750)
              .auto("format")
              .url()}
            alt={project.featuredImage.alt || ""}
            width={1200}
            height={750}
            sizes="(max-width: 700px) 100vw, 736px"
          />
        </figure>
      )}

      <article className="project-detail">
    

        {project.body?.length > 0 && (
          <div className="project-body">
            <PortableText value={project.body} />
          </div>
        )}

        {project.links?.length > 0 && (
          <nav
            className="project-links"
            aria-label="Project links"
          >
            {project.links.map((link, index) => (
              <a
                key={`${link.url}-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label || "View project"}
              </a>
            ))}
          </nav>
        )}
      </article>
    </main>
  );
}
