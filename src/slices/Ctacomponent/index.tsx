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
      <div className="flex flex-col xl:flex-row justify-end items-center bg-concretewhite w-[80%] min-h-[40lvh] rounded-2xl mx-8 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[url('/textures/stone.jpg')] opacity-60 mix-blend-hard-light"></div>
        <div className="flex justify-center items-center w-[80%] p-4 xl:p-0">
          <div className="outer flex justify-center items-center border-2 border-navyblue aspect-square shadow-comic p-6">
            <div className="middle flex justify-center items-center border-2 border-teal aspect-square rounded-3xl p-4">
              <div className="middle2 flex justify-center items-center border-2 border-teal aspect-square rounded-3xl p-3">
                  <div className="inner flex justify-center items-center border-2 border-bluegreen aspect-square shadow-comic rounded-full p-px overflow-hidden">
                    <Ctabutton />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <PrismicNextImage field={slice.primary.mascot} className="object-cover z-20 h-auto" width={650} alt=""/>
      </div>
    </section>
  );
};

export default Ctacomponent;
