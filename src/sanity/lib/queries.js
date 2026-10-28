
import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" ] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    status,
    technologies,
    links
  }
`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    summary,
    status,
    technologies,
    body,
    links,
    featuredImage
  }
`);
