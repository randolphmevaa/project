import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { featuredEvents } from "@/lib/data";
import EventDetail from "@/components/events/event-detail";
import EventsList from "@/components/events/events-list";

interface EventPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all event pages
export async function generateStaticParams() {
  return featuredEvents.map((event) => ({
    id: event.id,
  }));
}

export default function EventPage({ params }: EventPageProps) {
  // In a real app, you'd fetch this data from an API
  const event = featuredEvents.find((event) => event.id === params.id);
  
  // If event not found, use the first event (for demo only)
  const currentEvent = event || featuredEvents[0];
  
  // Get similar events (same category, excluding current)
  const similarEvents = featuredEvents
    .filter(e => e.category === currentEvent.category && e.id !== currentEvent.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="pl-0 mb-4">
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
        
        {/* Event Details */}
        <EventDetail event={currentEvent} />
        
        {/* Similar Events */}
        {similarEvents.length > 0 && (
          <div className="mt-20">
            <Separator className="mb-12" />
            <h2 className="text-2xl font-bold mb-8">Similar Events You Might Like</h2>
            <EventsList events={similarEvents} />
          </div>
        )}
      </div>
    </div>
  );
}