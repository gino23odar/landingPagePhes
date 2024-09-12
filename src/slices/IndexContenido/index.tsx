import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";

/**
 * Props for `IndexContenido`.
 */
export type IndexContenidoProps =
  SliceComponentProps<Content.IndexContenidoSlice>;

/**
 * Component for "IndexContenido" Slices.
 */
const IndexContenido = async ({ slice }: IndexContenidoProps): Promise<JSX.Element> => {
  const client = createClient();
  // eslint-disable-next-line testing-library/no-await-sync-queries
  const propiedades = await client.getAllByType("propiedad_post");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col w-full px-10"
    >
      <div className="flex flex-col w-full text-xl font-semibold">
        <h1 className="text-3xl font-extrabold mb-2">{slice.primary.title}</h1>
        {isFilled.richText(slice.primary.descripcion) && (
          <div className="prose prose-xl prose-invert mb-6">
            <PrismicRichText field={slice.primary.descripcion} />
          </div>
        )}
      </div>
      <ContentList
        items={propiedades}
        viewMoreText={slice.primary.ver_mas}
        fallbackItemImage={slice.primary.default_image}
      />
    </section>
  );
};

export default IndexContenido;
