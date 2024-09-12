import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import PropiedadBody from "@/components/PropiedadBody";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("propiedad_post", params.uid)
    .catch(() => notFound());

  return <PropiedadBody page={page} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("propiedad_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  // eslint-disable-next-line testing-library/no-await-sync-queries
  const pages = await client.getAllByType("propiedad_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}