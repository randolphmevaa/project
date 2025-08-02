import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, Sparkles, Music, Mic } from "lucide-react";

const workshops = [
  {
    id: "w1",
    title: "Music Production Masterclass",
    instructor: "David Chen",
    description: "Learn the fundamentals of music production, from recording to mixing and mastering.",
    date: "2026-05-15",
    time: "14:00 - 18:00",
    duration: "4 hours",
    capacity: "20 participants",
    price: "€75",
    level: "Beginner to Intermediate",
    icon: Music,
  },
  {
    id: "w2",
    title: "Vocal Performance Workshop",
    instructor: "Sarah Johnson",
    description: "Improve your vocal technique, stage presence, and performance confidence.",
    date: "2026-05-22",
    time: "10:00 - 13:00",
    duration: "3 hours",
    capacity: "15 participants",
    price: "€60",
    level: "All levels",
    icon: Mic,
  },
  {
    id: "w3",
    title: "DJ & Electronic Music Workshop",
    instructor: "Max Richter",
    description: "Get hands-on experience with DJ equipment and learn mixing techniques.",
    date: "2026-06-05",
    time: "15:00 - 19:00",
    duration: "4 hours",
    capacity: "12 participants",
    price: "€85",
    level: "Beginner",
    icon: Sparkles,
  },
];

export default function WorkshopsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Back Button */}
      <Link href="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to all events
      </Link>

      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">WORKSHOPS</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Educational Workshops
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Enhance your musical skills with our hands-on workshops led by industry professionals. 
          From production techniques to performance skills, learn from the best in intimate settings.
        </p>
      </div>

      {/* Featured Workshop */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-white mb-12">
        <Badge variant="secondary" className="mb-4">FEATURED WORKSHOP</Badge>
        <h2 className="text-3xl font-bold mb-4">Summer Music Production Intensive</h2>
        <p className="text-lg mb-6 text-white/90">
          A week-long intensive program covering all aspects of modern music production. 
          Work with professional equipment in our state-of-the-art studios.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>July 7-11, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>9:00 - 17:00 daily</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Limited to 8 participants</span>
          </div>
        </div>
        <Button size="lg" variant="secondary">
          Learn More & Apply
        </Button>
      </div>

      {/* Workshops List */}
      <div className="grid gap-6 mb-12">
        {workshops.map((workshop) => {
          const Icon = workshop.icon;
          return (
            <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{workshop.title}</CardTitle>
                      <p className="text-muted-foreground">with {workshop.instructor}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{workshop.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{workshop.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">{new Date(workshop.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Time</p>
                    <p className="font-medium">{workshop.time}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium">{workshop.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Price</p>
                    <p className="font-medium">{workshop.price}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{workshop.capacity}</span>
                  <Button>Register Now</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Why Join */}
      <div className="bg-muted rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join Our Workshops?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Small Groups</h3>
            <p className="text-muted-foreground">
              Limited class sizes ensure personalized attention and hands-on learning
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals with years of experience
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Professional Equipment</h3>
            <p className="text-muted-foreground">
              Access to top-tier equipment and facilities at Rockhal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}