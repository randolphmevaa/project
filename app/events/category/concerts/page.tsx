import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredEvents } from "@/lib/data";
import EventCard from "@/components/events/event-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConcertsPage() {
  // Filter events that could be considered concerts
  const concertEvents = featuredEvents.filter(event => 
    ["Pop", "Rock", "Metal", "Blues/Jazz", "French Pop", "R&B/Soul", "Classical"].includes(event.category)
  );

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Back Button */}
      <Link href="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to all events
      </Link>

      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">CONCERTS</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Live Concerts
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Experience world-class concerts from international artists and emerging talents. 
          From rock legends to pop sensations, our concert lineup offers unforgettable live music experiences.
        </p>
      </div>

      {/* Featured Concert Banner */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex items-center px-8 md:px-12">
          <div className="max-w-2xl text-white">
            <Badge variant="secondary" className="mb-4">FEATURED CONCERT</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jeff Goldblum & The Mildred Snitzer Orchestra
            </h2>
            <p className="text-lg mb-6 text-white/90">
              An evening of jazz with the legendary actor and his orchestra. 
              Experience an unforgettable night of music and entertainment.
            </p>
            <Button size="lg" variant="secondary">
              Get Tickets
            </Button>
          </div>
        </div>
      </div>

      {/* Concerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {concertEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">Don't Miss Any Concert</h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter and be the first to know about new concert announcements
        </p>
        <Button>Subscribe Now</Button>
      </div>
    </div>
  );
}