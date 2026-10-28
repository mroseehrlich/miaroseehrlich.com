
import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    status,
    technologies,
    links
  }
`);
