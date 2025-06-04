import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { time } from "console";

const FooterContact = [
  { icon: MapPin, text: "123 Karen Rd, Nairobi" },
  { icon: Phone, text: "+254 700 000 000" },
  { icon: Mail, text: "info@openkaren.com" },
];
const FooterOpenHours = [
  { time: "Breakfast", hours: "6:00 AM -10:00 AM" },
  { time: "Lunch Break", hours: "10:00 AM -12:00 AM" },
  { time: "Lunch", hours: "12:00 PM - 3:00 PM" },
  { time: "Dinner", hours: "6:00 PM - 10:00 PM" },
];
const FooterLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];
const Footer = () => {
  return (
    <footer className=" flex flex-col  items center bg-amber-800  text-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-8 max-w-7xl mx-auto">
        <div className="flex flex-col  items-start gap-4">
          <div className="flex items-start gap-2">
            <Image
              src={Logo}
              className="rounded-full"
              alt="Logo"
              width={48}
              height={48}
            />
            <h1 className="text-4xl font-semibold">Open Karen</h1>
          </div>
          <p className="text-lg text-footer-text">
            Experience authentic Indian cuisine in the heart of Karen, Nairobi.
            Where traditional flavors meet modern dining excellence.
          </p>
        </div>
        <div className="flex flex-col gap-4 items">
          <h1 className="text-2xl font-semibold">Contact</h1>
          <div className="flex flex-col gap-2">
            {FooterContact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon size={24} className="text-orange-button" />
                <span className="text-footer-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-2xl font-semibold ">Opening hours</h1>
          <div className=" flex flex-col gap-2">
            {FooterOpenHours.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Clock className="text-orange-button" />
                <span className="text-footer-text">
                  {item.time}: {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <div>
            {FooterLinks.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Link href={item.href} className="text-footer-link">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="p-10">
        <p className="text-center text-footer-text">
          &copy; {new Date().getFullYear()} Open Karen. All rights reserved.
        </p>
        <p className="text-center text-footer-text">
          Designed by{" "}
          <Link href="https://quickprimetech.com" className="text-footer-link">
            QuickPrimeTech
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
