"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Event } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AgendaListProps {
  events: Event[];
}

export default function AgendaList({ events }: AgendaListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = ["all", "french pop", "metal", "jazz", "rock"];

  const filteredEvents = events
    .filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(event => 
      selectedGenre === "all" || event.category.toLowerCase() === selectedGenre
    );

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <h1 className="text-6xl font-bold">AGENDA</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="flex gap-4">
              <Button 
                variant={selectedGenre === "all" ? "default" : "outline"}
                onClick={() => setSelectedGenre("all")}
                className="text-sm"
              >
                DATE
              </Button>
              <Button 
                variant="outline" 
                className="text-sm"
              >
                ARTISTS A-Z
              </Button>
              <Button 
                variant="outline" 
                className="text-sm"
              >
                GENRES
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="SEARCH..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-transparent border-white/20"
            />
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
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
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 md:w-48">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full h-12 w-12 border border-white/20"
                  >
                    ▶
                  </Button>
                  <Button 
                    className={cn(
                      "min-w-[120px]",
                      event.soldOut && "bg-destructive hover:bg-destructive/90"
                    )}
                    asChild
                  >
                    <Link href={event.soldOut ? "#" : `/tickets/${event.id}`}>
                      {event.soldOut ? "LAST TICKETS" : "BUY TICKETS"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}