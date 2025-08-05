import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Music, Tag, Users, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Event } from "@/lib/types";
import { formatDateWithDay } from "@/lib/utils";

interface EventDetailProps {
  event: Event;
}

export default function EventDetail({ event }: EventDetailProps) {
  const { id, title, description, image, date, time, venue, category, price, soldOut } = event;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Event Image */}
      <div className="lg:col-span-2">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          <Badge
            className="absolute top-4 left-4"
            variant="secondary"
          >
            {category}
          </Badge>
        </div>
        
        {/* Event Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">About this Event</h2>
          <p className="text-muted-foreground whitespace-pre-line mb-6">
            {description || "No description available for this event."}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline" className="gap-1">
              <Music className="h-3.5 w-3.5" />
              <span>{category}</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Tag className="h-3.5 w-3.5" />
              <span>Live Performance</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>All Ages</span>
            </Badge>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span>Share Event</span>
          </Button>
        </div>
      </div>
      
      {/* Event Details & Ticket Purchase */}
      <div>
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">{formatDateWithDay(date)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-muted-foreground">{time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Venue</p>
                  <p className="text-muted-foreground">{venue}</p>
                  <Link href="/venue" className="text-primary text-xs hover:underline">
                    View venue details
                  </Link>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Price</span>
                <span className="font-bold text-lg">{price || "Free"}</span>
              </div>
              {soldOut ? (
                <div className="text-destructive text-sm mb-4">This event is sold out</div>
              ) : (
                <div className="text-muted-foreground text-sm mb-4">
                  Prices may vary depending on seat selection
                </div>
              )}
            </div>
            
            <Button 
              className="w-full mb-4" 
              size="lg"
              disabled={soldOut}
              asChild
            >
              <Link href={soldOut ? "#" : "https://buy.stripe.com/aFaeVd6zwaoCfnP6Ia5ZC02"}>
                {soldOut ? "Sold Out" : "Buy Tickets"}
              </Link>
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              Add to Calendar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}