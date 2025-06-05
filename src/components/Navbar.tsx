"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"; // <-- shadcn sheet import

const Navbar = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md p-4 sticky inset-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 justify-between">
          <Image
            src={Logo}
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-black">Open Karen</span>
        </Link>

        {/* Mobile: Sidebar menu icon */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="w-6 h-6 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4 ">
                {pages.map((page) => (
                  <SheetClose
                    asChild
                    key={page.name}
                    className="hover:bg-gray-50"
                  >
                    <Link href={page.href} className="text-lg font-medium ">
                      {page.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/login">
                    <Button className="w-full mt-4">Reserve Table</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 text-black font-semibold text-lg">
              {pages.map((page) => (
                <NavigationMenuItem key={page.name}>
                  <NavigationMenuLink href={page.href}>
                    {page.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/login">
            <Button size="lg">Reserve Table</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
