import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import gallery from "../../../public/chickencurry.jpg";
import Hero from "@/pages/gallery/Hero";
import Gallerygrid from "@/pages/gallery/Gallerygrid";
import AboutOurExperience from "@/pages/gallery/AboutOurExperience";
export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Gallery Grid */}
      <Gallerygrid />
      {/* About Our Experience */}
      <AboutOurExperience />
    </div>
  );
}
