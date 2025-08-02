"use client";

import { useState, useMemo } from "react";
import { featuredEvents } from "@/lib/data";
import EventCard from "@/components/events/event-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Search, Filter } from "lucide-react";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(featuredEvents.map(event => event.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let events = [...featuredEvents];

    // Filter by search query
    if (searchQuery) {
      events = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      events = events.filter(event => event.category === selectedCategory);
    }

    // Sort events
    events.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "price":
          const priceA = parseInt((a.price ?? "0").match(/\d+/)?.[0] || "0");
          const priceB = parseInt((b.price ?? "0").match(/\d+/)?.[0] || "0");
          return priceA - priceB;
        default:
          return 0;
      }
    });

    return events;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 mt-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4">ALL EVENTS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upcoming Events at Rockhal
            </h1>
            <p className="text-xl text-white/80">
              Discover and book tickets for the latest concerts, performances, and cultural events
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 bg-background/95 backdrop-blur-md border-b z-40">
        <div className="container px-4 mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}