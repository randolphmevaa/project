import { Event } from "@/lib/types";
import EventCard from "@/components/events/event-card";

interface EventsListProps {
  events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in animation-delay-600">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}