import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return (
    <section className="py-16 text-secondary-foreground bg-secondary text">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6">
          Experience Our Story
        </h2>
        <p className="text-xl  mb-8 max-w-2xl mx-auto">
          Join us for an authentic Indian dining experience that celebrates
          tradition, quality, and hospitality.
        </p>
        <Button size="lg" variant={"outline"} className=" text-black px-8 py-3">
          Reserve Your Table
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
