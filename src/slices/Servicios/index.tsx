import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for servicios (variation: {slice.variation}) Slices
    </section>
  );
};

export default Servicios;
