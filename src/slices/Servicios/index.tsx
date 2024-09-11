import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Servicios`.
 */
export type ServiciosProps = SliceComponentProps<Content.ServiciosSlice>;

/**
 * Component for "Servicios" Slices.
 */
const Servicios = ({ slice }: ServiciosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col w-full justify-center items-center bg-concretewhite text-slate-950"
    >
      <div className="text-3xl font-bold mt-2">
        {slice.primary.titulo}
      </div>
      <div className="flex flex-row w-full gap-4 p-8">
        {slice.primary.servicio.map((item, idx) => (
          <div className="card group relative rounded-xl cursor-pointer overflow-hidden w-[260px] h-[400px]" key={idx}>
          <PrismicNextImage
            field={item.imagen}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt=""
          />
          <div className="layer absolute inset-0 flex flex-col justify-end p-4 z-10 bg-black/40 group-hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 text-concretewhite">
            <h2 className="text-white font-bold">{item.nombre}</h2>
            <PrismicRichText field={item.descripcion}/>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
