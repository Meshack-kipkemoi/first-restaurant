import React, { SVGProps } from "react";
import { Star } from "lucide-react";
import { Section, Header, Heading, Paragraph } from "@/components/picture-text";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

type ReviewsPageDatatypes = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  name: string;
  review: string;
  identity: string;
};

const ReviewsPageData: ReviewsPageDatatypes[] = [
  {
    icon: Star,
    name: "Marcus L.",
    review:
      "This is my fourth visit, and it keeps getting better. The consistency, the warmth, the spices — everything hits just right. I brought my parents this time, and even my picky dad couldn’t stop raving about the naan. 10/10, every time.",
    identity: "First-Time Visitor",
  },
  {
    icon: Star,
    name: "Olivia R.",
    review:
      "A hidden gem! Every bite tasted like someone’s grandmother made it with love. The lamb biryani was melt-in-your-mouth perfect, and the saffron chai? I’m still dreaming about it.",
    identity: "Food Enthusiast & Blogger",
  },
  {
    icon: Star,
    name: "Aisha K.",
    review:
      "Wasn’t sure what to expect, but wow. The staff treated us like family, and the food was next-level. My only regret? Not coming here sooner.",
    identity: "Regular Customer",
  },
];

const number = 5;

const ReviewsPage = () => {
  return (
    <Section className="">
      <Header>
        <Heading className="text-black">What Our Guests Say</Heading>
        <Paragraph className="text-center text-black">
          Don't just take our word for it — hear from our satisfied customers.
        </Paragraph>
      </Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ReviewsPageData.map((item, index) => (
          <Card key={index} className="border-none">
            <CardHeader className="flex gap-1">
              {Array.from({ length: number }).map((_, i) => (
                <item.icon
                  key={i}
                  className="w-4 h-4 fill-current  text-yellow-500"
                />
              ))}
            </CardHeader>
            <CardContent className="text-sm text-black">
              "{item.review}"
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h3 className="font-semibold text-black">{item.name}</h3>
              <p className="text-xs text-muted">{item.identity}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ReviewsPage;
