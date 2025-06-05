import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Leaf } from "lucide-react";
const Acknowledgement = () => {
  return (
    <div>
      <section className="py-16 bg-warm-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-saffron-200 bg-white">
            <CardContent className="p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-spice-900 mb-4">
                Special Dietary Requirements
              </h3>
              <p className="text-spice-600 mb-6 leading-relaxed">
                We understand that everyone has different dietary needs. Our
                chefs are happy to accommodate special requests including vegan,
                gluten-free, and custom spice levels. Please inform our staff
                about any allergies or dietary restrictions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-green-100 text-green-800">
                  <Leaf className="h-4 w-4 mr-2" />
                  Vegetarian Options
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  Vegan Friendly
                </Badge>
                <Badge className="bg-purple-100 text-purple-800">
                  Gluten-Free Available
                </Badge>
                <Badge className="bg-orange-100 text-orange-800">
                  <Flame className="h-4 w-4 mr-2" />
                  Custom Spice Levels
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Acknowledgement;
