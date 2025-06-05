import { Header, Heading, Paragraph, Section } from "@/components/picture-text";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FollowUs = () => {
  return (
    <Section className="items-center">
      <Header>
        <Heading>Follow Us</Heading>
        <Paragraph>
          Follow us to get the latest update on what&apos;s new
        </Paragraph>
      </Header>
      <div className="relative mx-auto">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 4 }, (_, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <Image
                  width={1080}
                  height={720}
                  alt={`instagram image ${i}`}
                  src={`/instagram${i + 1}.jpg`}
                  className="w-full aspect-16/9 object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Button className="w-fit" asChild>
        <Link
          href="https://www.instagram.com"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Us
        </Link>
      </Button>
    </Section>
  );
};

export default FollowUs;
