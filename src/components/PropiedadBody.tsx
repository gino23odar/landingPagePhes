'use client';

import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import { formatDate } from "@/utils/formatDate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";

import "swiper/css";

export default function ContentBody({
  page,
}: {
  page: Content.PropiedadPostDocument;
}) {
  const formattedDate = formatDate(page.data.publicacion);
  return (
    <div className="flex w-full px-4 md:px-8">
      <div className="flex flex-col rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <div className="flex w-full">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold">{page.data.title}</h1>
                <h2 className="text-xl font-bold">{page.data.distrito}</h2>
                <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
                {formattedDate}
                </p>
                <div className="h-auto w-[80vw]">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={1}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: false }}
                    >
                        {page.data.imagen1 && 
                        <SwiperSlide>
                            <div className="w-full h-auto">
                                <PrismicNextImage field={page.data.imagen1}  />
                            </div>
                        </SwiperSlide>}
                        {page.data.imagen2 && 
                        <SwiperSlide>
                            <div className="w-full h-auto">
                                <PrismicNextImage field={page.data.imagen2}  />
                            </div>
                        </SwiperSlide>}
                        {page.data.imagen3 && 
                        <SwiperSlide>
                            <div className="w-full h-auto">
                                <PrismicNextImage field={page.data.imagen3}  />
                            </div>
                        </SwiperSlide>}
                        {page.data.imagen4 && 
                        <SwiperSlide>
                            <div className="w-full h-auto">
                                <PrismicNextImage field={page.data.imagen4}  />
                            </div>
                        </SwiperSlide>}
                        {page.data.imagen5 && 
                        <SwiperSlide>
                            <div className="w-full h-auto">
                                <PrismicNextImage field={page.data.imagen5}  />
                            </div>
                        </SwiperSlide>}
                        
                    </Swiper>
                </div>
                <div className="flex w-1/2 items-center gap-4 text-realred mt-12">
                    {page.tags.map((tag, index) => (
                        <span key={index} className="text-xl font-bold">
                        {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </div>
  );
}