import React from "react";
import Image from "next/image";
import Food from "../../../public/homepage.jpg";

const OurStory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-spice-900 mb-8">
          Our Story
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-spice-600 space-y-5 leading-relaxed">
            <p>
              Open House Karen was born from a deep passion for authentic Indian
              cuisine and a desire to share the rich culinary heritage of India
              with the vibrant community of Nairobi. Our journey began over 15
              years ago when our founder, inspired by family recipes and
              traditional cooking methods, decided to bring the true taste of
              India to Kenya.
            </p>
            <p>
              Located in the heart of Karen, our restaurant has become a beloved
              destination for food enthusiasts seeking genuine Indian flavors.
              We pride ourselves on maintaining the authenticity of our dishes
              while creating a warm, welcoming atmosphere that feels like home.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src={Food}
              alt="Chef preparing Indian food"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
