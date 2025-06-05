import Hero from "@/pages/contact/Hero";
import ContactForm from "@/pages/contact/ContactForm";
import GoogleMaps from "@/pages/contact/GoogleMaps";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactForm />
      <GoogleMaps />
    </div>
  );
}
