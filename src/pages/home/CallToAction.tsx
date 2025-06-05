import { Button } from "@/components/ui/button";
import { Header, Heading, Paragraph, Section } from "@/components/picture-text";
import Link from "next/link";
const CallToAction = () => {
  return (
    <Section className="flex flex-col justify-center items-center w-full px-4 md:px-8  bg-secondary py-8 lg:py-16">
      <Header>
        <Heading className="text-white">
          Ready for an Authentic Experience?
        </Heading>
        <Paragraph className="text-white text-center">
          Join us for an unforgettable culinary journey through the flavors of
          India, right here in Karen.
        </Paragraph>
      </Header>
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center gap-5 mb-4">
        <Button variant={"outline"} asChild className="w-full lg:w-auto">
          <Link href="/contact">Reserve Table</Link>
        </Button>

        <Button variant={"outline"} asChild className="w-full lg:w-auto">
          <Link href="/menu">Discover Menu</Link>
        </Button>
      </div>
    </Section>
  );
};

export default CallToAction;
