"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="mb-4">CONTACT</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Have a question or need assistance? We're here to help. 
          Reach out to our team and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-muted-foreground">
              5 Avenue du Rock'n'Roll<br />
              L-4361 Esch-sur-Alzette<br />
              Luxembourg
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">
              General: +352 24 555 1<br />
              Box Office: +352 24 555 222
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">
              info@rockhal.lu<br />
              tickets@rockhal.lu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm text-muted-foreground">
              Mon-Fri: 9:00 - 18:00<br />
              Event days: Extended hours
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Select name="subject" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="tickets">Ticket Support</SelectItem>
                  <SelectItem value="events">Event Information</SelectItem>
                  <SelectItem value="venue">Venue Rental</SelectItem>
                  <SelectItem value="media">Media & Press</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Find Us</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.515883087193!2d5.913729615742931!3d49.50121737935636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f1c6b3b7c3b%3A0x5e5e5e5e5e5e5e5e!2sRockhal!5e0!3m2!1sen!2slu!4v1620000000000!5m2!1sen!2slu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Getting Here</h3>
              <p className="text-muted-foreground text-sm">
                Rockhal is easily accessible by car, train, and bus. Free parking is available 
                for all event attendees. The venue is a 5-minute walk from Belval-Université 
                train station.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Additional Contact Options */}
      <div className="mt-16 bg-muted rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our customer service team is available during office hours to help with urgent inquiries. 
          For ticket-related issues on event days, please visit our box office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Phone className="mr-2 h-4 w-4" />
            Call Box Office
          </Button>
          <Button size="lg" variant="outline">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  );
}