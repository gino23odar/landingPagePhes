import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ContactForm from "@/components/ContactForm";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex justify-center items-center relative w-full min-h-[40lvh] py-4 mb-4"
      >
        <div className="banner-gradient flex flex-col justify-center items-center w-full p-8 min-h-[38lvh] text-black overflow-hidden">
          <div className="flex xl:absolute left-0 lg:right-20 xl:right-44 w-44 sm:w-60 lg:w-80">
            <PrismicNextImage field={slice.primary.label} className="object-fit z-20" width={500}/>
          </div>
          <div className="flex flex-col-reverse xl:flex-row gap-12 justify-end  items-center w-full border-4 border-black p-2 relative">
            <ContactForm />
            <div className="flex flex-col justify-center items-center text-2xl ">
              <h2 className="flex text-3xl font-bold justify-center items-center bg-teal rounded-lg p-2 mt-2 w-[60%]" >{slice.primary.title}</h2>
              <PrismicRichText field={slice.primary.mensaje_contacto} />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
