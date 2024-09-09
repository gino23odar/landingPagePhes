import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Ctabutton from "@/components/Ctabutton";

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
      className="flex justify-center items-center w-full min-h-[40lvh] mb-4"
    >
      <div className="flex flex-col md:flex-row justify-end bg-concretewhite w-[80%] min-h-[40lvh] rounded-2xl mx-8">
        <Ctabutton />
        <PrismicNextImage field={slice.primary.mascot} className="object-cover z-20 h-auto" width={500} alt=""/>
      </div>
    </section>
  );
};

export default Ctacomponent;
