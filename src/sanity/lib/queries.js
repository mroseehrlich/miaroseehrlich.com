
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
    links,
    featuredImage,
    body[]{
      ...,
      _type == "image" => {
        "dimensions": asset->metadata.dimensions
      }
    }
  }
`);


export const WRITING_QUERY = defineQuery(`
  *[_type == "writing" && defined(slug.current)]
    | order(publishedAt desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      excerpt,
      publishedAt,
      _createdAt
    }
`);

export const WRITING_ENTRY_QUERY = defineQuery(`
  *[_type == "writing" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    excerpt,
    publishedAt,
    featuredImage,
    body[]{
      ...,
      _type == "image" => {
        "dimensions": asset->metadata.dimensions
      }
    }
  }
`);

