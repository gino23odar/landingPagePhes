// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | TestimoniosSlice
  | ServiciosSlice
  | ContactSlice
  | CtacomponentSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Title field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Mascot field in *Contact → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  label: prismic.ImageField<never>;

  /**
   * mensaje contacto field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.mensaje_contacto
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mensaje_contacto: prismic.RichTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *Ctacomponent → Default → Primary*
 */
export interface CtacomponentSliceDefaultPrimary {
  /**
   * Title field in *Ctacomponent → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ctacomponent.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Contact Label field in *Ctacomponent → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ctacomponent.default.primary.contact_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_label: prismic.KeyTextField;

  /**
   * Mascot field in *Ctacomponent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: ctacomponent.default.primary.mascot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mascot: prismic.ImageField<never>;
}

/**
 * Default variation for Ctacomponent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtacomponentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtacomponentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Ctacomponent*
 */
type CtacomponentSliceVariation = CtacomponentSliceDefault;

/**
 * Ctacomponent Shared Slice
 *
 * - **API ID**: `ctacomponent`
 * - **Description**: Ctacomponent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtacomponentSlice = prismic.SharedSlice<
  "ctacomponent",
  CtacomponentSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Business Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.business_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  business_title: prismic.KeyTextField;

  /**
   * Slogan field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.slogan
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slogan: prismic.KeyTextField;

  /**
   * Hero Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Servicios → Default → Primary → Servicio*
 */
export interface ServiciosSliceDefaultPrimaryServicioItem {
  /**
   * Nombre field in *Servicios → Default → Primary → Servicio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: servicios.default.primary.servicio[].nombre
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nombre: prismic.KeyTextField;

  /**
   * Descripcion field in *Servicios → Default → Primary → Servicio*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: servicios.default.primary.servicio[].descripcion
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descripcion: prismic.RichTextField;

  /**
   * Imagen field in *Servicios → Default → Primary → Servicio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: servicios.default.primary.servicio[].imagen
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagen: prismic.ImageField<never>;
}

/**
 * Primary content in *Servicios → Default → Primary*
 */
export interface ServiciosSliceDefaultPrimary {
  /**
   * Titulo field in *Servicios → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: servicios.default.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Servicio field in *Servicios → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: servicios.default.primary.servicio[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  servicio: prismic.GroupField<
    Simplify<ServiciosSliceDefaultPrimaryServicioItem>
  >;
}

/**
 * Default variation for Servicios Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiciosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServiciosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Servicios*
 */
type ServiciosSliceVariation = ServiciosSliceDefault;

/**
 * Servicios Shared Slice
 *
 * - **API ID**: `servicios`
 * - **Description**: Servicios
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiciosSlice = prismic.SharedSlice<
  "servicios",
  ServiciosSliceVariation
>;

/**
 * Item in *Testimonios → Default → Primary → Testimonio*
 */
export interface TestimoniosSliceDefaultPrimaryTestimonioItem {
  /**
   * Nombre field in *Testimonios → Default → Primary → Testimonio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.testimonio[].nombre
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nombre: prismic.KeyTextField;

  /**
   * Imagen field in *Testimonios → Default → Primary → Testimonio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.testimonio[].imagen
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagen: prismic.ImageField<never>;

  /**
   * Comentario field in *Testimonios → Default → Primary → Testimonio*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.testimonio[].comentario
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  comentario: prismic.RichTextField;

  /**
   * calificacion field in *Testimonios → Default → Primary → Testimonio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.testimonio[].calificacion
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  calificacion: prismic.KeyTextField;
}

/**
 * Primary content in *Testimonios → Default → Primary*
 */
export interface TestimoniosSliceDefaultPrimary {
  /**
   * Titulo field in *Testimonios → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Testimonio field in *Testimonios → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonios.default.primary.testimonio[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonio: prismic.GroupField<
    Simplify<TestimoniosSliceDefaultPrimaryTestimonioItem>
  >;
}

/**
 * Default variation for Testimonios Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimoniosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimoniosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonios*
 */
type TestimoniosSliceVariation = TestimoniosSliceDefault;

/**
 * Testimonios Shared Slice
 *
 * - **API ID**: `testimonios`
 * - **Description**: Testimonios
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimoniosSlice = prismic.SharedSlice<
  "testimonios",
  TestimoniosSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      CtacomponentSlice,
      CtacomponentSliceDefaultPrimary,
      CtacomponentSliceVariation,
      CtacomponentSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ServiciosSlice,
      ServiciosSliceDefaultPrimaryServicioItem,
      ServiciosSliceDefaultPrimary,
      ServiciosSliceVariation,
      ServiciosSliceDefault,
      TestimoniosSlice,
      TestimoniosSliceDefaultPrimaryTestimonioItem,
      TestimoniosSliceDefaultPrimary,
      TestimoniosSliceVariation,
      TestimoniosSliceDefault,
    };
  }
}
