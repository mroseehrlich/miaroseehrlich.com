
import { defineType, defineField } from "sanity";

export const photographType = defineType({
  name: "photograph",
  title: "Photograph",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Photograph",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description:
            "Describe the visual content for someone who cannot see the image.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "takenAt",
      title: "Date photographed",
      type: "date",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "takenAt",
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title || "Untitled photograph",
        media,
        subtitle,
      };
    },
  },
});
