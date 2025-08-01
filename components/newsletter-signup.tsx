"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log("Submitted email:", email);
    setSubmitted(true);
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-4">Stay Updated</Badge>
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest updates on events, special offers, and exclusive content delivered directly to your inbox.
        </p>
        
        {submitted ? (
          <div className="bg-muted p-8 rounded-lg flex flex-col items-center">
            <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thanks for subscribing!</h3>
            <p className="text-muted-foreground">
              You'll now receive our latest updates and exclusive offers.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Your email address"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" size="lg">Subscribe</Button>
          </form>
        )}
      </div>
    </div>
  );
}