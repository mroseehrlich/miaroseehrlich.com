
import {
  defineType,
  defineField,
  defineArrayMember,
} from "sanity";

export const writingType = defineType({
  name: "writing",
  title: "Writing",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short description for the Writing index.",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "publishedAt",
      title: "Publication date",
      type: "date",
      description: "Optional. Use the date you want readers to see.",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
