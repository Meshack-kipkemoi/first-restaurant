import Hero from "@/pages/gallery/Hero";
import Gallerygrid from "@/pages/gallery/Gallerygrid";
import AboutOurExperience from "@/pages/gallery/AboutOurExperience";
export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallerygrid />
      <AboutOurExperience />
    </div>
  );
}
