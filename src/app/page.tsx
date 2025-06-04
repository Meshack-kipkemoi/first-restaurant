import Image from "next/image";
import Hero from "@/pages/home/Hero";
import AboutUs from "@/pages/home/AboutUs";
import Menu from "@/pages/home/Menu";
import WhyChooseUs from "@/pages/home/WhyChooseUs";
import ReviewsPage from "@/pages/home/ReviewsPage";
import CallToAction from "@/pages/home/CallToAction";
import FAQs from "@/pages/home/FAQs";
import Contact from "@/pages/home/Contact";
import FollowUs from "@/pages/home/FollowUs";
export default function Home() {
  return (
    <div className="m-0 p-0">
      <Hero />
      <Menu />
      <AboutUs />
      <WhyChooseUs />
      <ReviewsPage />
      <CallToAction />
      <FAQs />
      <Contact />
      <FollowUs />
    </div>
  );
}
