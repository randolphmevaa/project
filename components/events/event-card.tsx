import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Event } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { id, title, image, date, time, venue, category, soldOut } = event;

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {soldOut && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Sold Out
            </Badge>
          </div>
        )}
        <Badge
          className="absolute top-4 left-4"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      <CardContent className="flex-1 pt-6">
        <h3 className="font-bold text-xl mb-2 line-clamp-2">
          <Link href={`/events/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{venue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button 
          className="w-full" 
          variant={soldOut ? "outline" : "default"}
          disabled={soldOut}
          asChild
        >
          <Link href={soldOut ? "#" : "https://buy.stripe.com/aFaeVd6zwaoCfnP6Ia5ZC02"}>
            {soldOut ? "Sold Out" : "Buy Tickets"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}