import React from "react";
import IndianFood from "../../../public/indianfood.webp";
import ImageText from "@/components/ImageText";
const Hero = () => {
  return (
    <div>
      <ImageText
        ImageSrc={IndianFood}
        Header="Authentic Indian
Experience in Kenya"
        Text="Discover the rich flavors and aromatic spices of traditional Indian cuisine in the heart of Karen, Nairobi."
      />
    </div>
  );
};

export default Hero;
