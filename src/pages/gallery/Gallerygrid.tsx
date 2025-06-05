import gallery from "../../../public/chickencurry.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Image data
const galleryImages = [
  { src: gallery, alt: "Butter chicken with naan", category: "Food" },
  {
    src: gallery,
    alt: "Restaurant interior dining area",
    category: "Interior",
  },
  { src: gallery, alt: "Chef preparing tandoori", category: "Kitchen" },
  { src: gallery, alt: "Biryani presentation", category: "Food" },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Spice collection",
    category: "Ingredients",
  },
  { src: gallery, alt: "Private dining area", category: "Interior" },
  { src: gallery, alt: "Tandoor oven", category: "Kitchen" },
  { src: gallery, alt: "Vegetarian thali", category: "Food" },
  { src: gallery, alt: "Restaurant entrance", category: "Exterior" },
];

// Categories you want to display
const selectedCategories = ["Interior", "Kitchen", "Ingredients"];

const Gallerygrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-20">
        {selectedCategories.map((category) => {
          const filteredImages = galleryImages.filter(
            (img) => img.category === category
          );

          return (
            <div key={category}>
              {/* Section Title */}
              <h2 className="font-playfair text-4xl font-bold text-spice-900 mb-10 text-center">
                {category}
              </h2>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredImages.map((image, index) => (
                  <Card
                    key={index}
                    className="border-warm-200  py-0 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block bg-white/90 text-spice-900 px-3 py-1 rounded-full text-sm font-medium">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallerygrid;
