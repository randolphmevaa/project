"use client";

import { useState, useEffect } from "react";
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
import { Calendar, Info, Newspaper, Search, User, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { featuredEvents } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  type EventType = {
    id: string | number;
    title: string;
    artist?: string;
    category: string;
    venue: string;
    date: string | Date;
  };

  const [searchResults, setSearchResults] = useState<EventType[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    // Search through events
    const filtered = featuredEvents.filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.artist?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filtered);
    setShowSearchResults(true);
  }, [searchQuery]);

  const handleSearchResultClick = () => {
    setSearchQuery("");
    setShowSearchResults(false);
    onClose();
  };

  const handleClose = () => {
    setSearchQuery("");
    setShowSearchResults(false);
    onClose();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-full overflow-y-auto pt-20 pb-6 px-6 flex flex-col">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 z-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="mb-6 mt-4">
          <Button variant="outline" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            <span>Login / Register</span>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events, artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
        </div>

        {/* Search Results */}
        {showSearchResults && (
          <div className="mb-6 -mt-4">
            {searchResults.length > 0 ? (
              <div className="bg-muted rounded-md p-2 max-h-[200px] overflow-y-auto">
                <p className="text-xs text-muted-foreground px-2 py-1">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </p>
                {searchResults.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    onClick={handleSearchResultClick}
                    className="block px-2 py-2 hover:bg-background rounded transition-colors"
                  >
                    <div className="text-sm font-medium">{event.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()} • {event.venue}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-muted rounded-md p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        )}

        <nav className="space-y-2 flex-1">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
              pathname === "/" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            )}
            onClick={handleClose}
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
                    onClick={handleClose}
                  >
                    All Events
                  </Link>
                  <Link
                    href="/events/category/concerts"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    Concerts
                  </Link>
                  <Link
                    href="/events/category/festivals"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    Festivals
                  </Link>
                  <Link
                    href="/events/category/workshops"
                    className="py-2 hover:underline"
                    onClick={handleClose}
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
                    onClick={handleClose}
                  >
                    All Articles
                  </Link>
                  <Link
                    href="/blog/category/news"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    News
                  </Link>
                  <Link
                    href="/blog/category/interviews"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    Interviews
                  </Link>
                  <Link
                    href="/blog/category/reviews"
                    className="py-2 hover:underline"
                    onClick={handleClose}
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
                    onClick={handleClose}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/venue"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    Venue Info
                  </Link>
                  <Link
                    href="/contact"
                    className="py-2 hover:underline"
                    onClick={handleClose}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="py-2 hover:underline"
                    onClick={handleClose}
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
            onClick={handleClose}
          >
            <span>Contact</span>
          </Link>
        </nav>

        <div className="mt-8 pt-6 border-t">
          <Link
            href="/"
            onClick={handleClose}
          >
          <Button className="w-full">Buy Tickets</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}