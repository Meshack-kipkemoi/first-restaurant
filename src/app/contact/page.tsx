import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Hero from "@/pages/contact/Hero";
import ContactForm from "@/pages/contact/ContactForm";
import GoogleMaps from "@/pages/contact/GoogleMaps";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      <ContactForm />
      <GoogleMaps />
    </div>
  );
}
