import { Badge } from "@/components/ui/badge";

export default function EventsHeader() {
  return (
    <div className="py-12 text-center max-w-3xl mx-auto">
      <Badge className="mb-4 animate-fade-in">What's On</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-150">
        Upcoming Events
      </h1>
      <p className="text-lg text-muted-foreground animate-fade-in animation-delay-300">
        Discover amazing concerts, festivals, and cultural events at Rockhal.
        Filter by date or category to find the perfect event for you.
      </p>
    </div>
  );
}