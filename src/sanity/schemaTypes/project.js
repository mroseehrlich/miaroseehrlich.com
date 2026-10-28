
import { defineType, defineField, defineArrayMember } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "In progress", value: "in-progress" },
          { title: "Active", value: "active" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "body",
      title: "Description",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
      ],
    }),

    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
            }),
            defineField({
              name: "url",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "featuredImage",
    },
  },
});
