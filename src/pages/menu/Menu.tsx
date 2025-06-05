"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Leaf } from "lucide-react";
import picture from "../../../public/homepage.jpg";
import Image from "next/image";

const menuCategories = [
  {
    title: "Appetizers",
    items: [
      {
        src: picture,
        name: "Samosas",
        description:
          "Crispy pastries filled with spiced potatoes and peas mesha kiepke kjdkjsdk ksjfsdkjfsdk kajsdkfksd akdjfsdkfjs aljdfksjdkf aklfjsdkfj akjfsdjf",
        price: "KSh 400",
        spicy: false,
        vegetarian: true,
      },
      {
        src: picture,
        name: "Chicken Tikka",
        description: "Marinated chicken pieces grilled in tandoor",
        price: "KSh 800",
        spicy: true,
        vegetarian: false,
      },
      {
        src: picture,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese with bell peppers and onions",
        price: "KSh 700",
        spicy: false,
        vegetarian: true,
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        src: picture,
        name: "Butter Chicken",
        description: "Tender chicken in rich, creamy tomato-based sauce",
        price: "KSh 1,200",
        spicy: true,
        vegetarian: false,
      },
      {
        src: picture,
        name: "Lamb Rogan Josh",
        description: "Slow-cooked lamb in aromatic Kashmiri spices",
        price: "KSh 1,500",
        spicy: true,
        vegetarian: false,
      },
      {
        name: "Palak Paneer",
        description: "Fresh spinach curry with homemade cottage cheese",
        price: "KSh 900",
        spicy: false,
        vegetarian: true,
      },
      {
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked with butter and cream",
        price: "KSh 800",
        spicy: false,
        vegetarian: true,
      },
    ],
  },
  {
    title: "Rice & Biryani",
    items: [
      {
        src: picture,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with spiced chicken and saffron",
        price: "KSh 1,500",
        spicy: true,
        vegetarian: false,
      },
      {
        src: picture,
        name: "Vegetable Biryani",
        description: "Fragrant rice with mixed vegetables and aromatic spices",
        price: "KSh 1,200",
        spicy: false,
        vegetarian: true,
      },
      {
        src: picture,
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds",
        price: "KSh 400",
        spicy: false,
        vegetarian: true,
      },
    ],
  },
  {
    title: "Breads",
    items: [
      {
        name: "Naan",
        description: "Traditional leavened bread baked in tandoor",
        price: "KSh 200",
        spicy: false,
        vegetarian: true,
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and herbs",
        price: "KSh 250",
        spicy: false,
        vegetarian: true,
      },
      {
        src: picture,
        name: "Roti",
        description: "Whole wheat flatbread cooked on griddle",
        price: "KSh 150",
        spicy: true,
        vegetarian: true,
      },
    ],
  },
];

const Menu = () => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getFirstWords = (text: string, count: number) => {
    const words = text.split(" ");
    if (words.length <= count) return text;
    return words.slice(0, count).join(" ");
  };

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <h2 className="font-playfair text-4xl font-bold text-spice-900 text-center mb-12 items-stretch">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const itemKey = `${index}-${itemIndex}`;
                    const isExpanded = expandedItems[itemKey];

                    return (
                      <Card
                        key={itemIndex}
                        className="border-warm-200 hover:shadow-lg transition-shadow p-0 mb-0"
                      >
                        <CardContent className="p-0 h-full">
                          <div className="flex h-full">
                            {/* Image */}
                            {item.src && (
                              <Image
                                src={item.src}
                                alt={item.name}
                                width={150}
                                height={150}
                                className=" object-cover w-32 md:w-40 h-full"
                              />
                            )}

                            {/* Content */}
                            <div className="flex flex-col justify-between px-6 py-4 flex-1">
                              {/* Name + Price */}
                              <div className="flex justify-between items-center">
                                <h3 className="font-playfair text-xl font-semibold text-spice-900">
                                  {item.name}
                                </h3>
                                <span className="font-bold text-lg text-saffron-600">
                                  {item.price}
                                </span>
                              </div>

                              {/* Description with toggle */}
                              <p className="text-spice-600 mt-2 text-sm">
                                {isExpanded
                                  ? item.description
                                  : getFirstWords(item.description, 10) +
                                    (item.description.split(" ").length > 10
                                      ? "..."
                                      : "")}
                                {item.description.split(" ").length > 10 && (
                                  <button
                                    onClick={() => toggleDescription(itemKey)}
                                    className="ml-2 text-saffron-600 underline text-xs"
                                  >
                                    {isExpanded ? "Show less" : "Show more"}
                                  </button>
                                )}
                              </p>

                              {/* Badges */}
                              <div className="flex gap-2 mt-3">
                                {item.vegetarian && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-green-100 text-green-800"
                                  >
                                    <Leaf className="h-3 w-3 mr-1" />
                                    Veg
                                  </Badge>
                                )}
                                {item.spicy && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-red-100 text-red-800"
                                  >
                                    <Flame className="h-3 w-3 mr-1" />
                                    Spicy
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
