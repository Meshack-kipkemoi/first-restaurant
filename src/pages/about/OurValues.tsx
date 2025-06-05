import { Heart, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion for Food",
    description:
      "Every dish is prepared with love and dedication to authentic Indian flavors.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Family Tradition",
    description:
      "Recipes passed down through generations, bringing families together over great food.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Quality Excellence",
    description:
      "We never compromise on quality, using only the finest ingredients and spices.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Time-Honored Methods",
    description:
      "Traditional cooking techniques that preserve the authentic taste of India.",
  },
];
const OurValues = () => {
  return (
    <div>
      <section className="py-16 bg-smooth   ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-spice-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-spice-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Open House Karen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-warm-200 bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center text-saffron-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-spice-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-spice-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValues;
