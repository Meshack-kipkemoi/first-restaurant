import Image from "next/image";
import {
  PictureText,
  Heading,
  Paragraph,
  Header,
  Section,
} from "@/components/picture-text";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <Section aria-labelledby="about-header">
      <Header>
        <Heading id="about-header">About Us</Heading>
      </Header>
      <PictureText>
        <div className="flex flex-col ">
          <h3 className="text-left text-2xl font-semibold mb-3">
            We are Open House Karen
          </h3>
          <Paragraph>
            Located in the prestigious Karen area of Nairobi, Open House Karen
            brings you an authentic Indian dining experience that celebrates the
            rich culinary heritage of India. Our restaurant combines traditional
            recipes with modern presentation, creating an unforgettable journey
            for your taste buds. From our tandoor-fired breads to our
            slow-cooked curries, every dish is prepared with passion and
            attention to detail.Visit Us.
          </Paragraph>
          <Button size={"lg"} className="mx-auto lg:mx-0 w-fit">
            Read More
          </Button>
        </div>
        <div>
          <Image
            src={"/ingredients.webp"}
            alt="Ingredients"
            width={720}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>
      </PictureText>
    </Section>
  );
};

export default AboutUs;
