"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { featuredEvents } from "@/lib/data";
import EventCard from "@/components/events/event-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

const categoryInfo = {
  concerts: {
    title: "Concerts",
    description: "Live music performances from international and local artists",
    categories: ["Rock", "Pop", "Metal", "Blues/Jazz", "Classical", "French Pop"]
  },
  festivals: {
    title: "Festivals",
    description: "Multi-day celebrations of music, culture, and community",
    categories: ["Festival"]
  },
  workshops: {
    title: "Workshops",
    description: "Educational and creative sessions for music enthusiasts",
    categories: ["Workshop", "Masterclass"]
  }
};

export default function EventCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [searchQuery, setSearchQuery] = useState("");

  const info = categoryInfo[category as keyof typeof categoryInfo];

  // Filter events based on category
  const categoryEvents = useMemo(() => {
    let events = [...featuredEvents];

    // Map URL category to actual event categories
    if (category === "concerts") {
      events = events.filter(event => 
        ["Rock", "Pop", "Metal", "Blues/Jazz", "Classical", "French Pop", "R&B/Soul", "Afrobeats", "French Rap"].includes(event.category)
      );
    } else if (category === "festivals") {
      events = events.filter(event => 
        event.category.toLowerCase().includes("festival")
      );
    } else if (category === "workshops") {
      events = events.filter(event => 
        event.category.toLowerCase().includes("workshop") || 
        event.category.toLowerCase().includes("masterclass")
      );
    }

    // Filter by search query
    if (searchQuery) {
      events = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by date
    events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return events;
  }, [category, searchQuery]);

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button asChild>
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all events
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 mt-20">
        <div className="container px-4 mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:text-white/80"
            asChild
          >
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Events
            </Link>
          </Button>
          <div className="max-w-3xl">
            <Badge className="mb-4">{info.title.toUpperCase()}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {info.title}
            </h1>
            <p className="text-xl text-white/80">
              {info.description}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="sticky top-20 bg-background/95 backdrop-blur-md border-b z-40">
        <div className="container px-4 mx-auto py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={`Search ${info.title.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {categoryEvents.length} {categoryEvents.length === 1 ? 'event' : 'events'} found
            </p>
          </div>

          {categoryEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No {info.title.toLowerCase()} found</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for upcoming {info.title.toLowerCase()}
              </p>
              <Button asChild>
                <Link href="/events">View all events</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}