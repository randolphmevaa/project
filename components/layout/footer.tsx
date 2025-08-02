import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-[200px] h-[60px] relative">
                <Image
                  src="https://rockhal.lu/wp-content/themes/rockhal/dist/images/logos/rockhal-logo_26139c2c.svg"
                  alt="Rockhal"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-4 text-sm">
              Luxembourg's premier music venue and cultural center hosting international 
              artists and local talent, providing unforgettable live experiences.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/events" className="block hover:text-foreground transition-colors">
                Events Calendar
              </Link>
              <Link href="/" className="block hover:text-foreground transition-colors">
                Buy Tickets
              </Link>
              <Link href="/venue" className="block hover:text-foreground transition-colors">
                Venue Information
              </Link>
              <Link href="/blog" className="block hover:text-foreground transition-colors">
                News & Blog
              </Link>
              <Link href="/contact" className="block hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Help & Information</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/faq" className="block hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/terms" className="block hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="block hover:text-foreground transition-colors">
                Accessibility
              </Link>
              <Link href="/careers" className="block hover:text-foreground transition-colors">
                Careers
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">
              Get the latest news, events, and special offers delivered directly to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background text-foreground"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Rockhal. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}