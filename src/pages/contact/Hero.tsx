import Image from "next/image";
import ContactUs from "../../../public/contactus.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={ContactUs}
        alt="Contact Us"
        fill
        priority
        className="object-cover w-full h-full"
        placeholder="blur"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          Get in touch with us for reservations, inquiries, or to learn more
          about our authentic Indian cuisine.
        </p>
      </div>
    </section>
  );
};

export default Hero;
