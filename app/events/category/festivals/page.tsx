import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Music, Users } from "lucide-react";
import Image from "next/image";

export default function FestivalsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Back Button */}
      <Link href="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to all events
      </Link>

      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">FESTIVALS</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Music Festivals
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Multi-day celebrations of music and culture. Join thousands of music lovers for 
          unforgettable festival experiences featuring diverse lineups and immersive atmospheres.
        </p>
      </div>

      {/* No Festivals Message */}
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Music className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Festival Announcements Coming Soon</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We're currently planning exciting festivals for 2025. 
          Subscribe to be the first to know when tickets go on sale.
        </p>
        <Button>Subscribe for Updates</Button>
      </div>

      {/* Festival Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community Experience</h3>
            <p className="text-muted-foreground">
              Connect with fellow music lovers and create lasting memories in a vibrant festival atmosphere.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Diverse Lineups</h3>
            <p className="text-muted-foreground">
              Experience multiple artists across various genres, from headliners to emerging talents.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Multi-Day Events</h3>
            <p className="text-muted-foreground">
              Immerse yourself in extended celebrations with camping options and round-the-clock entertainment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Past Festivals Gallery */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Festival Memories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden group">
              <Image
                src={`https://images.pexels.com/photos/${1190297 + i}/pexels-photo-${1190297 + i}.jpeg`}
                alt={`Festival moment ${i}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}