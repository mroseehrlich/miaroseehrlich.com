
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../sanity/lib/image";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      const { width, height } = value.dimensions || {};

      if (!width || !height) {
        return null;
      }


      return (
        <figure className="rich-text-image">
          <Image
            src={urlFor(value)
              .width(1200)
              .auto("format")
              .url()}
            alt={value.alt || ""}
            width={width}
            height={height}
            sizes="(max-width: 700px) 100vw, 672px"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          {value.caption && (
            <figcaption>{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function RichText({ value }) {
  if (!value?.length) {
    return null;
  }

  return (
    <PortableText
      value={value}
      components={components}
    />
  );
}
