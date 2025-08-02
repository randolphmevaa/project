"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft, Plus, Minus } from "lucide-react";
import { featuredEvents } from "@/lib/data";
import { formatDateWithDay } from "@/lib/utils";

interface TicketPageProps {
  params: {
    id: string;
  };
}

export default function TicketPage({ params }: TicketPageProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);
  const event = featuredEvents.find((event) => event.id === params.id);
  
  if (!event) {
    return <div>Event not found</div>;
  }

  const basePrice = 58.00;
  const presaleFee = 6.00;
  const totalPrice = (basePrice + presaleFee) * quantity;

  const handleIncrement = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); // Max 10 tickets
  };

  const handleDecrement = () => {
    setQuantity(prev => Math.max(prev - 1, 0));
  };

  const handleProceedToCheckout = () => {
    router.push(`/tickets/${params.id}/checkout?quantity=${quantity}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EB] pt-24 pb-16 text-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="pl-0 mb-4">
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Choose number of tickets</h1>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <div className="space-y-2 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{formatDateWithDay(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Ticket Selection */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-semibold">General admission</h3>
                <p className="text-sm text-muted-foreground">
                  €{basePrice.toFixed(2)} + €{presaleFee.toFixed(2)} presale fee
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDecrement}
                  disabled={quantity === 0}
                >
                  <Minus className="h-4 w-4 text-muted-foreground" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleIncrement}
                  disabled={quantity === 10}
                >
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Total and Actions */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="font-semibold">Total: {quantity} tickets</div>
            <div className="text-xl font-bold">€{totalPrice.toFixed(2)}</div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 text-muted-foreground" asChild>
              <Link href="/events">Previous</Link>
            </Button>
            <Button 
              className="flex-1" 
              disabled={quantity === 0}
              onClick={handleProceedToCheckout}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Rockhal. La version actuelle de nos conditions générales de vente est disponible sur notre site rockhal.lu. Un lien direct se trouve ici. Privacy</p>
        </div>
      </div>
    </div>
  );
}