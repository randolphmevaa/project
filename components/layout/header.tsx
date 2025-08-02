"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Calendar, Newspaper, Info, Menu, X, Search, User } from "lucide-react";
import MobileMenu from "@/components/layout/mobile-menu";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { featuredEvents } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Event[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Simple search through events (you can expand this to search more content)
    const filtered = featuredEvents.filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.artist?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filtered);
  }, [searchQuery]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-[200px] h-[60px] relative">
              <Image
                src="https://rockhal.lu/wp-content/themes/rockhal/dist/images/logos/rockhal-logo_26139c2c.svg"
                alt="Rockhal"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/events"
                          >
                            <Calendar className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              All Events
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Discover all upcoming events at Rockhal
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/events/category/concerts"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Concerts</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Live music performances from international artists
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/events/category/festivals"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Festivals</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Multi-day celebrations of music and culture
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/events/category/workshops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Workshops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Educational and creative sessions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Our Story</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about Rockhal's history and mission
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/venue"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Venue Info</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our facilities and amenities
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/contact"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Contact Us</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get in touch with our team
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/faq"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Answers to common questions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleSearchClick}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="gap-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
              <Button>Buy Tickets</Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSearchClick}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </header>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={handleSearchClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search Events</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artists, events, venues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>

            {searchResults.length > 0 && (
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                <p className="text-sm text-muted-foreground">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </p>
                {searchResults.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    onClick={handleSearchClose}
                    className="block p-4 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString()} • {event.venue}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {event.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No results found for "{searchQuery}"
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}