import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Music, Users, Trophy, Heart, ArrowRight } from "lucide-react";
import { testimonials, venueSpaces } from "@/lib/data";

const milestones = [
  { year: "2005", event: "Rockhal opens its doors" },
  { year: "2010", event: "1 millionth visitor milestone" },
  { year: "2015", event: "Major renovation and expansion" },
  { year: "2020", event: "Digital transformation initiative" },
  { year: "2025", event: "20 years of unforgettable performances" },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "3M+", label: "Happy Visitors" },
  { value: "5000+", label: "Events Hosted" },
  { value: "100+", label: "Countries Represented" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <Badge className="mb-4">ABOUT US</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Story
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          For two decades, Rockhal has been the beating heart of Luxembourg's music scene, 
          bringing world-class entertainment to audiences from across Europe and beyond.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[500px] rounded-lg overflow-hidden mb-16">
        <Image
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
          alt="Rockhal venue"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Luxembourg's Premier Music Venue</h2>
          <p className="text-lg">Where Music Comes Alive</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            At Rockhal, we believe in the transformative power of live music. Our mission is to create 
            unforgettable experiences that connect artists with audiences, fostering a vibrant cultural 
            community in Luxembourg and beyond.
          </p>
          <p className="text-muted-foreground">
            We strive to provide a world-class venue that supports both established international acts 
            and emerging local talent, ensuring that music remains accessible and inspiring for all.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-muted-foreground mb-4">
            We envision Rockhal as more than just a concert venue – we see it as a cultural hub that 
            brings people together through the universal language of music. Our goal is to continuously 
            evolve and innovate, staying at the forefront of the live entertainment industry.
          </p>
          <p className="text-muted-foreground">
            By 2030, we aim to be recognized as one of Europe's most sustainable and technologically 
            advanced music venues, setting new standards for the industry.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 pr-8 text-right">
                {index % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-semibold">{milestone.year}</h3>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </>
                )}
              </div>
              <div className="relative">
                <div className="h-4 w-4 bg-primary rounded-full border-4 border-background" />
              </div>
              <div className="w-1/2 pl-8">
                {index % 2 !== 0 && (
                  <>
                    <h3 className="text-xl font-semibold">{milestone.year}</h3>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted rounded-lg p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-muted-foreground text-sm">
              Delivering world-class performances and experiences
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-muted-foreground text-sm">
              Building connections through shared musical experiences
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm">
              Pioneering new ways to enhance live entertainment
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Passion</h3>
            <p className="text-muted-foreground text-sm">
              Driven by our love for music and performance
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(0, 4).map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Rockhal</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join us for an unforgettable night of music and entertainment. 
          Browse our upcoming events and be part of the Rockhal experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/events">
              View Upcoming Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/venue">
              Explore Our Venue
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}