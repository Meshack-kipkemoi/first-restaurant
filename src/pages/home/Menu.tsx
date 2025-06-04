"use client";

import { Paragraph, Heading, Header, Section } from "@/components/picture-text";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChickenCurry from "../../../public/chickencurry.jpg";
import Table from "../../../public/table.jpg";
import Fresh from "../../../public/freshvegetables.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardProps {
  imgurl: StaticImageData;
  header: string;
  cardcontent: string;
  price: number;
}

const Cardpropeties: CardProps[] = [
  {
    imgurl: Fresh,
    header: "Fresh Ingredients",
    cardcontent:
      "We use only the freshest ingredients—locally sourced vegetables, herbs picked at peak flavor, and premium meats—to craft every dish. Taste the difference that quality and care bring to your plate, every single time.",
    price: 500,
  },
  {
    imgurl: Table,
    header: "Amazing Experience",
    cardcontent:
      "Experience exceptional dining with warm hospitality, elegant ambiance, and dishes crafted to perfection. Every visit promises a memorable journey of flavors, comfort, and service that makes you feel valued, welcomed, and eager to return.",
    price: 2000,
  },
  {
    imgurl: ChickenCurry,
    header: "Chicken Curry",
    cardcontent:
      "Chicken curry is a flavorful dish made with tender chicken simmered in a rich, spiced sauce of onions, garlic, ginger, and tomatoes. It's warm, aromatic, and pairs perfectly with rice or naan bread",
    price: 1200,
  },
  {
    imgurl: Table,
    header: "Amazing Experience",
    cardcontent:
      "Experience exceptional dining with warm hospitality, elegant ambiance, and dishes crafted to perfection. Every visit promises a memorable journey of flavors, comfort, and service that makes you feel valued, welcomed, and eager to return.",
    price: 2000,
  },
  {
    imgurl: Fresh,
    header: "Fresh Ingredients",
    cardcontent:
      "We use only the freshest ingredients—locally sourced vegetables, herbs picked at peak flavor, and premium meats—to craft every dish. Taste the difference that quality and care bring to your plate, every single time.",
    price: 500,
  },
  {
    imgurl: Table,
    header: "Amazing Experience",
    cardcontent:
      "Experience exceptional dining with warm hospitality, elegant ambiance, and dishes crafted to perfection. Every visit promises a memorable journey of flavors, comfort, and service that makes you feel valued, welcomed, and eager to return.",
    price: 2000,
  },
];

const MenuCard = ({ item }: { item: CardProps }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className="max-w-sm mx-auto p-0 shadow-md flex gap-0 h-full">
      <CardHeader className="px-0 py-0">
        <Image
          src={item.imgurl}
          alt={item.header}
          className="object-cover w-full aspect-16/9"
        />
      </CardHeader>
      <CardContent className="py-4 gap-3">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{item.header}</h3>
          <span className="font-semibold text-secondary">Ksh{item.price}</span>
        </div>

        <p className="text-muted-foreground text-sm">
          {expanded
            ? item.cardcontent
            : item.cardcontent.split(" ").slice(0, 8).join(" ") + "..."}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-foreground hover:underline text-sm font-medium ml-1"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </p>
      </CardContent>
    </Card>
  );
};

const Menu = () => {
  return (
    <Section aria-labelledby="menu-header" className="items-center">
      <Header>
        <Heading className="font-bold" id="menu-header">
          Menu Highlights
        </Heading>
        <Paragraph className="text-center">
          Experience the difference that passion, quality, and authenticity make
          in every aspect of our service.
        </Paragraph>
      </Header>
      <Carousel className="max-w-full">
        <CarouselContent>
          {Cardpropeties.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 w-fit"
            >
              <MenuCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link href="/menu">
        <Button size="lg">View Full Menu</Button>
      </Link>
    </Section>
  );
};

export default Menu;
