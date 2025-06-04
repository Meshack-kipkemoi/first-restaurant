import React from "react";
import Image from "next/image";
import Table from "../../../public/tomatoes.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src={Table}
        alt="Table"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          About Open House Karen
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          Discover our story, our passion for authentic Indian cuisine, and our
          commitment to exceptional dining experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
