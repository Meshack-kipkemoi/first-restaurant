import React, { SVGProps } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Award, Star, Clock, Users } from "lucide-react";
import { Paragraph, Header, Heading, Section } from "@/components/picture-text";

type WhyChooseUsItem = {
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  title: string;
  describe: string;
};

const WhyChooseUsData: WhyChooseUsItem[] = [
  {
    icon: Award,
    title: "Authentic Recipes",
    describe:
      "Traditional Indian recipes passed down through generations, prepared with authentic spices and techniques.",
  },
  {
    icon: Users,
    title: "Family Atmosphere",
    describe:
      "Warm, welcoming environment perfect for family gatherings, celebrations, and intimate dining",
  },
  {
    icon: Star,
    title: "Premium Quality",
    describe:
      "Only the finest ingredients and freshest spices to ensure every dish meets our high standards.",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    describe:
      "All dishes prepared fresh daily with no compromises on quality or taste.",
  },
];

const WhyChooseUs = () => {
  return (
    <Section aria-labelledby="why-choose-us" className="bg-smooth">
      <Header>
        <Heading id="why-choose-us" className="font-bold">
          Why Choose Us
        </Heading>
        <p className="text-xl flex justify-center mt-2">
          Experience the difference that passion, quality, and authenticity make
          in every aspect of our service.
        </p>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-6">
        {WhyChooseUsData.map((item, index) => (
          <Card key={index}>
            <CardHeader className=" flex justify-center">
              <item.icon className="w-8 h-8 text-secondary" />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold text-center">
                {item.title}
              </h2>
              <p className="text-center">{item.describe}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
