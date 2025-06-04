import React from "react";
import Image from "next/image";
import Tomatoes from "../../../public/good_food.jpg";
const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-spice-100 to-saffron-100 flex items-center justify-center">
        <Image
          src={Tomatoes}
          alt="tomatoes"
          className="relative object-cover"
        />
        <div className="container absolute mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our carefully crafted selection of authentic Indian dishes,
            prepared with traditional recipes and the finest ingredients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
