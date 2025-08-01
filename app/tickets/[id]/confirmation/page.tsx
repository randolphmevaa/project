"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Download, Share2 } from "lucide-react";
import { featuredEvents } from "@/lib/data";
import { formatDateWithDay } from "@/lib/utils";

interface ConfirmationPageProps {
  params: {
    id: string;
  };
}

export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  const event = featuredEvents.find((event) => event.id === params.id);
  
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAF6EB] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Purchase!</h1>
          <p className="text-muted-foreground">
            Your tickets have been confirmed and will be sent to your email shortly.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Order Details</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <div className="flex items-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDateWithDay(event.date)} at {event.time}</span>
              </div>
              <p className="text-muted-foreground">{event.venue}</p>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1" asChild>
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download Tickets
                </Link>
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1. You will receive a confirmation email with your tickets attached.
            </p>
            <p>
              2. Present your tickets (printed or on your phone) at the venue entrance.
            </p>
            <p>
              3. Arrive at least 30 minutes before the event starts.
            </p>
            <p>
              4. Follow us on social media for event updates and announcements.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/events">
              Browse More Events
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Rockhal. La version actuelle de nos conditions générales de vente est disponible sur notre site rockhal.lu. Un lien direct se trouve ici. Privacy</p>
        </div>
      </div>
    </div>
  );
}