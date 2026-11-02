
import Link from "next/link";

export const metadata = {
  title: "Résumé | Mia Rose Ehrlich",
  description:
    "Professional experience, technical skills, and education of Mia Rose Ehrlich, software engineer.",
};

const experience = [
  {
    role: "Software Engineer",
    company: "Unity FI Solutions",
    history: "Formerly Payrix, FIS, and Worldpay",
    dates: "December 2021 – Present",
    team: "GOACH Product Team",
    summary:
      "Continued with the same product team through successive acquisitions and organizational transitions, building and maintaining financial software for ACH processing, merchant operations, reporting, and customer-facing applications.",
    highlights: [
      "Serve as the primary engineer for REST APIs, including endpoint design, feature development, code review, and client integration investigations.",
      "Translate customer and operational requirements into application features and API changes, often working without a prescribed technical solution.",
      "Built shared infrastructure for asynchronous report exports and migrated most application reports from synchronous requests to background jobs.",
      "Redesigned ACH return-fee workflows to address duplicate fees, transaction associations, retry behavior, balance reconciliation, and internal notifications.",
      "Investigate production issues across Rails applications, SQL databases, background processing, and third-party integrations.",
      "Work across schema changes, application business logic, background jobs, and user-facing interfaces.",
    ],
  },
  {
    role: "Lead Systems Engineer",
    company: "Ignite Now Media",
    history: "American Dream Media and Tech",
    dates: "January 2021 – September 2021",
    highlights: [
      "Owned development and maintenance of a client-facing React dashboard and its supporting services.",
      "Served as product manager and backend engineer for an internal CRM replacement, gathering requirements and coordinating implementation with operations and leadership.",
      "Designed and developed APIs connecting legacy CRM software, internal systems, and client dashboards using Node.js, Express, and Firebase.",
      "Directed frontend implementation, reviewed another developer's work, and contributed React code to resolve functionality and maintainability issues.",
    ],
  },
];

const skills = [
  {
    label: "Languages",
    value:
      "Ruby, JavaScript, Java, SQL; working knowledge of Python and PHP",
  },
  {
    label: "Applications & data",
    value:
      "Ruby on Rails, Spring Boot, React, Node.js, Express, REST APIs, MySQL, PostgreSQL, relational modeling, schema migrations",
  },
  {
    label: "Production & infrastructure",
    value:
      "Linux, Sidekiq, Docker, Google Cloud Platform, Firebase, background processing, production debugging, data analysis",
  },
  {
    label: "Development tools",
    value:
      "Git, GitHub, Minitest, Azure DevOps, Postman, MySQL Workbench, Chrome DevTools",
  },
];

const education = [
  {
    institution: "Western Governors University",
    degree: "B.S. Computer Science",
    date: "Expected Spring 2027",
  },
  {
    institution: "Austin Community College",
    degree: "Web Programming Coursework",
    date: "2019–2020",
  },
  {
    institution: "St. John's College",
    degree: "B.A. — Interdisciplinary Great Books curriculum",
    detail:
      "Mathematics, natural science, philosophy, literature, and primary-text analysis.",
    date: "2014",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-header">
        <Link href="/" className="resume-home">
          Home (allegedly)
        </Link>

        <h1>Résumé</h1>

        <p className="resume-deck">
          Backend engineering · APIs · Data systems
        </p>

        <p className="resume-summary">
          Software engineer with six years of experience building
          and maintaining production applications. My work
          includes REST APIs, relational databases, financial
          integrations, asynchronous processing, and production
          troubleshooting.
        </p>
      </header>

      <div className="resume-content">
        <section className="resume-section" id="experience">
          <h2>Experience</h2>

          <div className="resume-section-body">
            {experience.map((job) => (
              <article
                className="resume-entry"
                key={`${job.company}-${job.role}`}
              >
                <div className="resume-entry-heading">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="resume-organization">
                      {job.company}
                    </p>
                    <p className="resume-history">
                      {job.history}
                    </p>
                  </div>
                  <p className="resume-dates">
                    {job.dates}
                  </p>
                </div>

                {job.team && (
                  <p className="resume-team">
                    {job.team}
                  </p>
                )}

                {job.summary && <p>{job.summary}</p>}

                <ul className="resume-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="skills">
          <h2>Technical Skills</h2>

          <div className="resume-section-body resume-skills">
            {skills.map((skill) => (
              <div className="resume-skill" key={skill.label}>
                <h3>{skill.label}</h3>
                <p>{skill.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" id="education">
          <h2>Education</h2>

          <div className="resume-section-body">
            {education.map((item) => (
              <div className="resume-entry" key={item.institution}>
                <div className="resume-entry-heading">
                  <div>
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                  </div>
                  <p className="resume-dates">
                    {item.date}
                  </p>
                </div>
                {item.detail && <p>{item.detail}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" id="certifications">
          <h2>Certifications</h2>

          <div className="resume-section-body">
            <div className="resume-entry">
              <h3>ITIL 4 Foundation</h3>
              <p>PeopleCert · 2026</p>
            </div>

            <div className="resume-entry">
              <h3>Linux Essentials</h3>
              <p>Linux Professional Institute · 2026</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
