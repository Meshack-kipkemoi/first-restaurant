import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

type ImageTextProps = {
  ImageSrc: StaticImageData;
  Header: string;
  Text: string;
};

const ImageText = ({ ImageSrc, Header, Text }: ImageTextProps) => {
  return (
    <section className="relative w-full aspect-[9/16] md:aspect-[4/3] lg:aspect-video overflow-hidden">
      {/* Background Image */}
      <Image
        src={ImageSrc}
        alt={Header}
        fill
        priority
        className="object-cover"
        placeholder="blur"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {Header}
          </h1>
          <p className="mt-4 text-lg md:text-xl">{Text}</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Reserve Table</Button>
            <Button size="lg" variant="outline">
              Discover Our Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
