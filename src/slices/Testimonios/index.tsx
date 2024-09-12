import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from '@prismicio/client';
import StarRating from '@/components/StarRating';

/**
 * Props for `Testimonios`.
 */
export type TestimoniosProps = SliceComponentProps<Content.TestimoniosSlice>;

/**
 * Component for "Testimonios" Slices.
 */
const Testimonios = ({ slice }: TestimoniosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col justify-center items-center w-full min-h-[40lvh] mb-4" 
      id="testimonios"
    >
      <h2 className="text-3xl mb-4">{slice.primary.titulo}</h2>
      <div className="flex flex-row gap-6">
        {slice.primary.testimonio.map((item, idx) => (
          <div key={idx} className="group flex flex-col items-center relative border-4 w-[30vw] md:w-[15vw] rounded-xl p-4 hover:scale-125 bg-navyblue bg-opacity-85">
            <div className="rounded-full border-2 overflow-hidden w-24 h-24">
            {isFilled.image(item.imagen) 
                    ? <PrismicNextImage field={item.imagen} className="w-full h-full object-cover" /> 
                    : <img src="/user.jpeg" alt="user" className="w-full h-full object-cover" />
                    }
            </div>
            <h3 className="text-2xl font-bold my-2">{item.nombre}</h3>
            <div className="text-md">
              <PrismicRichText field={item.comentario} />
            </div>
            <div className="mt-8">
              <StarRating rating={parseInt(item.calificacion+'')}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
