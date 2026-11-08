
import Image from "next/image";

import PageHeader from "../../../components/PageHeader";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PHOTOGRAPHS_QUERY } from "../../../sanity/lib/queries";

export const metadata = {
  title: "Photography | Mia Rose Ehrlich",
  description: "A collection of photographs by Mia Rose Ehrlich.",
};

function getDisplayDimensions(image) {
  const { width, height } = image.dimensions;
  const crop = image.crop;

  if (!crop) {
    return { width, height };
  }

  return {
    width: Math.max(
      1,
      Math.round(width * (1 - crop.left - crop.right))
    ),
    height: Math.max(
      1,
      Math.round(height * (1 - crop.top - crop.bottom))
    ),
  };
}

export default async function PhotosPage() {
  const photographs = await client.fetch(PHOTOGRAPHS_QUERY);

  return (
    <main className="subpage">
      <PageHeader 
        title="Still Life"
      />

      {photographs.length === 0 ? (
        <p className="quiet">
          Nothing here yet.
        </p>
      ) : (
        <section
          className="photo-gallery"
          aria-label="Photographs"
        >
          {photographs.map((photo) => {
            const image = photo.image;

            if (
              !image?.asset ||
              !image.dimensions?.width ||
              !image.dimensions?.height
            ) {
              return null;
            }

            const { width, height } =
              getDisplayDimensions(image);

            return (
              <figure className="photo-item" key={photo._id}>
                <Image
                  src={urlFor(image)
                    .width(1200)
                    .auto("format")
                    .url()}
                  alt={image.alt || ""}
                  width={width}
                  height={height}
                  sizes="(max-width: 700px) 100vw, 45vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />

                {(photo.title || photo.caption) && (
                  <figcaption>
                    {photo.title && (
                      <span className="photo-title">
                        {photo.title}
                      </span>
                    )}

                    {photo.caption && (
                      <span className="photo-caption">
                        {photo.caption}
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </section>
      )}
    </main>
  );
}
