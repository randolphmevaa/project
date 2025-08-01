import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Music, Info, Star, Search } from "lucide-react";
import { featuredEvents, blogPosts } from "@/lib/data";
import EventCard from "@/components/events/event-card";
import BlogCard from "@/components/blog/blog-card";
import NewsletterSignup from "@/components/newsletter-signup";
import TicketCarousel from "@/components/tickets/ticket-carousel";
import HeroCarousel from "@/components/hero/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <HeroCarousel />
      </section>

      {/* Upcoming Events Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <Badge className="mb-4">UPCOMING EVENTS</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't Miss Out
              </h2>
              <p className="text-white/60 max-w-2xl">
                Discover and book tickets for the latest concerts, performances, and cultural events at Rockhal.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <TicketCarousel events={featuredEvents} />
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4">Our Venue</Badge>
              <h2 className="text-3xl font-bold mb-6">Experience Music in a World-Class Setting</h2>
              <p className="text-muted-foreground mb-6">
                Located in Esch-sur-Alzette, Rockhal offers exceptional acoustics, 
                multiple stages, and state-of-the-art facilities. From intimate performances
                to large-scale concerts, our versatile spaces accommodate a variety of musical experiences.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Main Hall</h3>
                    <p className="text-sm text-muted-foreground">
                      Capacity for 6,500 people, perfect for major international acts
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Intimate setting for 1,200 guests, ideal for emerging artists
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/venue">Explore the Venue</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/venue/virtual-tour">Virtual Tour</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
                alt="Rockhal venue"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest News & Stories</h2>
              <p className="text-muted-foreground max-w-2xl">
                Stay up to date with the latest happenings at Rockhal, artist interviews, 
                event reviews, and behind-the-scenes content.
              </p>
            </div>
            <Button className="mt-4 md:mt-0" variant="outline" asChild>
              <Link href="/blog">
                <span>View All Posts</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Experience Banner */}
      <section className="relative h-[600px] bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://rockhal.lu/wp-content/uploads/2024/09/DSCF6767-889x800.jpg"
            alt="Concert crowd"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-[#FAF6EB] mb-4 max-w-4xl leading-tight">
            ROCKHAL PREMIUM EXPERIENCE
          </h2>
          <p className="text-primary text-xl mb-8">
            AMPLIFY YOUR NIGHT
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 bg-primary hover:bg-primary/90"
          >
            FIND OUT MORE
          </Button>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-20 bg-black text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-8">AGENDA</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex gap-4">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  DATE
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  ARTISTS A-Z
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  GENRES
                </Button>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                <input
                  type="search"
                  placeholder="SEARCH..."
                  className="w-full bg-transparent border border-white/20 rounded-md pl-10 pr-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {featuredEvents.map((event) => (
              <div 
                key={event.id}
                className="group border-b border-white/10 pb-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
                  {/* Date & Venue */}
                  <div className="flex flex-col md:w-48">
                    <div className="text-primary font-medium">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }).toUpperCase()}
                    </div>
                    <div className="text-sm text-white/60">
                      {event.time}
                    </div>
                    <div className="text-sm text-white/60">
                      {event.venue}
                    </div>
                  </div>

                  {/* Artist & Genre */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-white/20">
                      {event.category}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 md:w-48">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full h-12 w-12 border border-white/20 text-white hover:bg-white/10"
                    >
                      ▶
                    </Button>
                    <Button 
                      className={`min-w-[120px] ${event.soldOut ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}`}
                      disabled={event.soldOut}
                      asChild
                    >
                      <Link href={event.soldOut ? "#" : `/tickets/${event.id}`}>
                        {event.soldOut ? "SOLD OUT" : "BUY TICKETS"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
              asChild
            >
              <Link href="/agenda">
                VIEW FULL AGENDA
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <NewsletterSignup />
      </section>
    </div>
  );
}