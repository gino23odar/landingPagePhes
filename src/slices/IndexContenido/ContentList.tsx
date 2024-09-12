'use client'

import React, { useRef, useState, useEffect } from "react";
import { asImageSrc, isFilled } from "@prismicio/client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type ContentListProps = {
    items: Content.PropiedadPostDocument[];
    fallbackItemImage: Content.IndexContenidoSlice["primary"]["default_image"];
    viewMoreText: Content.IndexContenidoSlice["primary"]["ver_mas"];
  };

export default function ContentList({
    items,
    viewMoreText,
    fallbackItemImage,
} : ContentListProps) {

    const component = useRef<HTMLDivElement>(null);

    const contentImages = items.map((item) => {
        const image = isFilled.image(item.data.hover_image)
          ? item.data.hover_image
          : fallbackItemImage;
        return asImageSrc(image, {
          fit: "crop",
          w: 220,
          h: 320,
          exp: -10,
        });
      });
    
      // Precargar imagenes
      useEffect(() => {
        contentImages.forEach((url) => {
          if (!url) return;
          const img = new Image();
          img.src = url;
        });
      }, [contentImages]);

      return(
        <>
            <ul className="flex flex-wrap justify-center items-center gap-8">
                {items.map((post,index) => (
                    <li key={index} className="w-[90%]">
                        <div className="flex flex-col lg:flex-row justify-between items-center w-[96%] bg-concretewhite border-8 border-navyblue text-slate-950 rounded-lg py-4 px-12">
                            <div className="flex flex-col justify-center items-center w-full">
                                <span className="text-3xl font-bold text-slate-950">{post.data.title}</span>
                                <div className="flex flex-row">    
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="flex text-lg font-bold items-center bg-realred rounded-md p-2 ml-2 ">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a href={`/propiedades/${post.uid}`} className="hover:cursor-pointer">
                             <div className="flex flex-col items-end">
                                <div className="rounded-lg bg-center w-[200px] h-[140px] overflow-hidden">
                                    <PrismicNextImage field={post.data.hover_image} className=""/>
                                </div>
                                <span className="ml-auto flex items-center gap-2 text-xl font-medium md:mr-0">
                                    {viewMoreText}
                                </span>
                             </div>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
      )
}