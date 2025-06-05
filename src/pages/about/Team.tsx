import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
type RestaurantDatatypes = {
  name: string;
  job: string;
  skills: string;
  src: string;
};
const RestaurantData: RestaurantDatatypes[] = [
  {
    name: " Chef Rajesh Kumar",
    job: "Head Chef & Owner",
    skills:
      "With over 20 years of culinary experience, Chef Rajesh brings authentic Indian flavors to every dish.",
    src: "chef1.jpg",
  },
  {
    name: "Chef Priya Sharma",
    job: "Sous Chef",
    skills:
      " Specializing in vegetarian cuisine and traditional tandoorcooking techniques.",
    src: "chef2.jpg",
  },
  {
    name: "Sarah Wanjiku",
    job: "Restaurant-Manager",
    skills:
      " Ensuring every guest receives exceptional service and a memorable dining experience.",
    src: "chef3.jpg",
  },
];

const Team = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-spice-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-spice-600 max-w-2xl mx-auto">
              The passionate individuals who bring authentic Indian flavors to
              your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {RestaurantData.map((item, index) => (
              <Card className="border-warm-200 bg-warm-50" key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={`/${item.src}`}
                    width={720}
                    height={720}
                    alt="Head Chef"
                    className="w-full aspect-square object-cover  rounded-full  mx-auto mb-4"
                  />
                  <h3 className="font-playfair text-xl font-semibold text-spice-900 mb-2">
                    {item.job}
                  </h3>
                  <p className="text-saffron-600 text-sm mb-3">{item.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
