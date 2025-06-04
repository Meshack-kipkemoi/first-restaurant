import React from "react";
import Image from "next/image";
import indianfood from "../../../public/indianfood.webp";

const Hero = () => {
  return (
    <div className="min-h-screen bg-smooth">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-spice-100 to-saffron-100 flex items-center justify-center">
        <Image
          src={indianfood}
          alt="tomatoes"
          className="relative object-cover"
        />
        <div className="container absolute mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Take a visual journey through our restaurant, from our beautifully
            crafted dishes to our warm, inviting atmosphere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
