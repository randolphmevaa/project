"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Info, Newspaper, Search, User } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-full overflow-y-auto pt-20 pb-6 px-6 flex flex-col">
        <div className="mb-6 mt-4">
          <Link href="/" className="flex items-center gap-2 mb-6" onClick={onClose}>
            <div className="w-[200px] h-[60px] relative">
              <Image
                src="https://rockhal.lu/wp-content/themes/rockhal/dist/images/logos/rockhal-logo_26139c2c.svg"
                alt="Rockhal"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <Button variant="outline" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            <span>Login / Register</span>
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search events, artists..."
            className="w-full bg-muted px-10 py-2 rounded-md text-sm"
          />
        </div>

        <nav className="space-y-2 flex-1">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
              pathname === "/" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            )}
            onClick={onClose}
          >
            <span>Home</span>
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="events" className="border-none">
              <AccordionTrigger className="py-3 px-4 hover:bg-muted rounded-md">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span>Events</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-12">
                  <Link
                    href="/events"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    All Events
                  </Link>
                  <Link
                    href="/events/category/concerts"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Concerts
                  </Link>
                  <Link
                    href="/events/category/festivals"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Festivals
                  </Link>
                  <Link
                    href="/events/category/workshops"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Workshops
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="blog" className="border-none">
              <AccordionTrigger className="py-3 px-4 hover:bg-muted rounded-md">
                <div className="flex items-center gap-3">
                  <Newspaper className="h-5 w-5" />
                  <span>Blog</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-12">
                  <Link
                    href="/blog"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    All Articles
                  </Link>
                  <Link
                    href="/blog/category/news"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    News
                  </Link>
                  <Link
                    href="/blog/category/interviews"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Interviews
                  </Link>
                  <Link
                    href="/blog/category/reviews"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Reviews
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-none">
              <AccordionTrigger className="py-3 px-4 hover:bg-muted rounded-md">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-12">
                  <Link
                    href="/about"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/venue"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Venue Info
                  </Link>
                  <Link
                    href="/contact"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="py-2 hover:underline"
                    onClick={onClose}
                  >
                    FAQ
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/contact"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-muted transition-colors"
            onClick={onClose}
          >
            <span>Contact</span>
          </Link>
        </nav>

        <div className="mt-8 pt-6 border-t">
          <Button className="w-full">Buy Tickets</Button>
        </div>
      </div>
    </div>
  );
}