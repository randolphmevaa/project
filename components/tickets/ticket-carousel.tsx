"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Event } from "@/lib/types";
import { formatDate } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

interface TicketCarouselProps {
  events: Event[];
}

const cardVariants = {
  initial: { 
    scale: 1,
    y: 0,
    opacity: 1 
  },
  hover: { 
    scale: 1.02,
    y: -5,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function TicketCarousel({ events }: TicketCarouselProps) {
  // Take only the first 10 events
  const upcomingEvents = events.slice(0, 10);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ 
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} w-2 h-2"></span>`;
        }
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="!pb-12"
    >
      {upcomingEvents.map((event) => (
        <SwiperSlide key={event.id}>
          {({ isActive }) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden h-full flex flex-col transform transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {event.soldOut && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-0 bg-background/80 flex items-center justify-center"
                  >
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      Sold Out
                    </Badge>
                  </motion.div>
                )}
                <Badge
                  className="absolute top-4 left-4"
                  variant="secondary"
                >
                  {event.category}
                </Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <motion.h3 
                  className="text-xl font-bold mb-2 line-clamp-2 text-white"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  <Link href={`/events/${event.id}`} className="hover:underline">
                    {event.title}
                  </Link>
                </motion.h3>
                <div className="space-y-2 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      variant={event.soldOut ? "outline" : "default"}
                      disabled={event.soldOut}
                      asChild
                    >
                      <Link href={event.soldOut ? "#" : "https://buy.stripe.com/aEUeVP04SgJE8Qo001"}>
                        {event.soldOut ? "Sold Out" : "Buy Tickets"}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}