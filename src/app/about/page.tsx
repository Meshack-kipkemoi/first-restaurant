import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Clock } from "lucide-react";
import Image from "next/image";
import Hero from "@/pages/about/Hero";
import OurValues from "@/pages/about/OurValues";
import OurStory from "@/pages/about/OurStory";
import Team from "@/pages/about/Team";
import CallToAction from "@/pages/about/CallToAction";
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <OurValues />
      <Team />
      <CallToAction />
    </div>
  );
}
