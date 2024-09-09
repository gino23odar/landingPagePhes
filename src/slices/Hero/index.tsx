'use client'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";
import Atropos from 'atropos/react';
import 'atropos/css';
import Image from 'next/image';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center w-full mb-6"
    >
      <div className='relative flex justify-start items-start w-[96%] bg-teal lg:min-h-[15lvh] xl:min-h-[20lvh] rounded-3xl p-8 text-slate-950 overflow-hidden'>
        <div className="flex justify-start items-start z-10 text-bold text-concretewhite bg-bluegreen bg-opacity-75 rounded-xl p-2">
          <div className="flex items-center gap-1">
            <h1 className="text-3xl lg:text-7xl">
              {slice.primary.business_title}
            </h1>
            <div className="flex flex-col items-start gap-1">
              <p className="text-lg text-bold self-end">
                {slice.primary.slogan}
              </p>
              <div className="bg-concretewhite min-h-2 w-full rounded-r-sm"></div>
              <div className="bg-concretewhite min-h-2 w-[80%] rounded-r-sm"></div>
              <div className="bg-concretewhite min-h-2 w-[60%] rounded-r-sm"></div>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 sm:-top-44 xl:-top-96 left-0">
          <Atropos 
            activeOffset={20}
            shadowScale={1.05}
            rotate={true}
            rotateXMax={5}
            rotateYMax={1.5}
            stretchX={0}
            shadow={true} 
            highlight={true}
            className="hero-atropos relative w-full h-auto overflow-visible z-5">
            <PrismicNextImage field={slice.primary.hero_image} className="object-cover xl:object-fill" width="2700" height="350" alt=""/>
            {/* <Image src='/materials.jpg' alt="hero logo" width={1715} height={350} className="object-cover" /> */}
          </Atropos>
        </div>
      </div>
    </section>
  );
};

export default Hero;
