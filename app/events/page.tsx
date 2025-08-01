import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredEvents } from "@/lib/data";
import EventsHeader from "@/components/events/events-header";
import EventsFilters from "@/components/events/events-filters";
import EventsList from "@/components/events/events-list";

export const metadata = {
  title: 'Events | Rockhal',
  description: 'Discover upcoming concerts, festivals, and workshops at Rockhal. Browse our event calendar and book tickets for your favorite artists and performances.',
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <EventsHeader />
        
        {/* Filters Section */}
        <EventsFilters />
        
        {/* Events List */}
        <EventsList events={featuredEvents} />
        
        {/* No Results (will be conditionally shown) */}
        <div className="hidden py-16 text-center">
          <h3 className="text-xl font-semibold mb-2">No events found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <Button variant="outline" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 p-8 bg-muted rounded-xl text-center">
          <Badge className="mb-4">Stay Updated</Badge>
          <h2 className="text-2xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming shows, presale tickets, and exclusive offers.
          </p>
          <Button asChild>
            <Link href="#newsletter">Subscribe to Updates</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}