import Link from "next/link";
import { Header, Heading, Paragraph, Section } from "@/components/picture-text";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Contact {
  icon: LucideIcon;
  header: string;
  content: string;
}

const contacts: Contact[] = [
  {
    icon: Phone,
    header: "Phone",
    content: "+2543343393",
  },
  {
    icon: Mail,
    header: "Email",
    content: "info@example.com",
  },
  {
    icon: MapPin,
    header: "Address",
    content:
      "Le Verde Restaurant 123 Sandton Drive Sandton, Johannesburg Gauteng, 2196 South Africa",
  },
];

const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <article className="w-full flex flex-col gap-6 items-center bg-amber-500 py-6  px-4">
      <div className="p-2 rounded-full overflow-hidden bg-amber-400 text-black">
        {<contact.icon className="text-secondary-foreground" />}
      </div>
      <div className="flex flex-col items-center gap-2 text-white">
        <h4 className="font-semibold text-lg">{contact.header}</h4>
        <p className="text-center">{contact.content}</p>
      </div>
    </article>
  );
};

const Contact = () => {
  return (
    <Section className="bg-secondary text-secondary-foreground items-center">
      <Header>
        <Heading>Contact Us</Heading>
        <Paragraph>Get in touch with us for any inquiries</Paragraph>
      </Header>
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
      <Button asChild className="w-fit mt-6" variant={"outline"}>
        <Link href="/contact">Contact Us</Link>
      </Button>
    </Section>
  );
};

export default Contact;
