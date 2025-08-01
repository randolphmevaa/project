export interface Event {
  id: string;
  title: string;
  description?: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  price?: string;
  soldOut?: boolean;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface VenueSpace {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}