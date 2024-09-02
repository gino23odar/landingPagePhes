import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Contact from "@/components/ContactForm";

/**
 * Props for `Ctacomponent`.
 */
export type CtacomponentProps = SliceComponentProps<Content.CtacomponentSlice>;

/**
 * Component for "Ctacomponent" Slices.
 */
const Ctacomponent = ({ slice }: CtacomponentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center items-center w-full min-h-[40lvh] py-4 mb-4"
    >
      <div className="banner-gradient flex flex-col justify-center items-center w-full p-8 min-h-[38lvh] text-black overflow-hidden">
        <div className="flex absolute right-0 lg:right-20 xl:right-44 w-44 sm:w-60 lg:w-80">
          <PrismicNextImage field={slice.primary.mascot} className="object-fit z-20" width={500}/>
        </div>
        <h1 className="text-2xl text-bold " >{slice.primary.title}</h1>
        <div>
          <Contact />
        </div>
        <button className="bg-teal">{slice.primary.contact_label}</button>
      </div>
    </section>
  );
};

export default Ctacomponent;
