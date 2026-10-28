
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { client } from "../../sanity/lib/client";
import { PROJECTS_QUERY } from "../../sanity/lib/queries";

export const metadata = {
  title: "Projects | Mia Rose Ehrlich",
};

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <main className="subpage">
      <section className="subpage-content">
        <PageHeader
          title="Projects"
          description="Selected work and ongoing experiments."
        />
        <div className="project-list">
          {projects.length === 0 ? (
            <p className="quiet">
              Nothing here yet.
            </p>
          ) : (
            projects.map((project) => (
              <article
                className="project-entry"
                key={project._id}
              >
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>

                <p>{project.summary}</p>

                {project.technologies?.length > 0 && (
                  <p className="quiet">
                    {project.technologies.join(" · ")}
                  </p>
                )}

                {project.links?.map((link, index) => (
                  <a
                    key={`${link.url}-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label || "View project"}
                  </a>
                ))}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
