"use client";

import React, { JSX, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";

// EmailJS Config
const SERVICE_ID = "service_m8ixgnl";
const TEMPLATE_ID = "template_ni58c5s";
const PUBLIC_KEY = "z60r8iUm1ZTw51nDT";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: JSX.Element;
  subtext?: string | JSX.Element;
}

const contactFormData: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Address",
    content: <p>Nairobi,s Kenya</p>,
    subtext: "Open for meetings upon request.",
  },
  {
    icon: Phone,
    title: "Phone",
    content: <p>+254 717884435</p>,
    subtext: "Available from 9am–6pm.",
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:quickprimetech@gmail.com" className="underline">
        quickprimetech@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Hours",
    content: <p>Monday to Friday: 9am – 6pm</p>,
    subtext: "We respond within 24 hours.",
  },
];

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-warm-200">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-spice-900">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block text-sm font-medium text-spice-700 mb-2">
                        {label}
                      </label>
                      <Input
                        name={label.toLowerCase().replace(" ", "")}
                        placeholder={`Your ${label.toLowerCase()}`}
                        required
                      />
                    </div>
                  ))}
                </div>

                {[
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "quickprimetech@gmail.com",
                  },
                  {
                    label: "Phone",
                    name: "phone",
                    type: "tel",
                    placeholder: "+254 717448835",
                  },
                  {
                    label: "Subject",
                    name: "subject",
                    type: "text",
                    placeholder: "What is this regarding?",
                  },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-spice-700 mb-2">
                      {label}
                    </label>
                    <Input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-spice-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-8">
            {contactFormData.map(
              ({ icon: Icon, title, content, subtext }, index) => (
                <Card key={index} className="border-warm-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Icon className="h-6 w-6 text-saffron-600" />
                      <h3 className="font-playfair text-xl font-semibold text-spice-900">
                        {title}
                      </h3>
                    </div>
                    <div>{content}</div>
                    {subtext && (
                      <div className="text-sm text-spice-500 mt-3">
                        {subtext}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
