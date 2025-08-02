"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Music } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 2,
    image: "https://apps.ticketmatic.com/obj/filestore/prod/10491/events/11388/image.67a0ae2af3470.960.jpg",
    badge: "COMING SOON",
    title: "JORJA SMITH",
    subtitle: "FALLING OR FLYING TOUR",
    date: "FRI 13 FEB 2026",
    time: "19:00",
    venue: "Main Hall",
    genre: "Pop, R&B/Soul"
  },
  {
    id: 1,
    image: "https://apps.ticketmatic.com/obj/filestore/prod/10491/events/11455/image.67ea9696318eb.960.jpg",
    badge: "NEXT EVENT",
    title: "THE ROSE",
    subtitle: "ONCE UPON A WRLD",
    date: "FRI 27 JUN 2026",
    time: "19:00",
    venue: "Main Hall",
    genre: "Pop"
  },
  {
    id: 3,
    image: "https://fr.billboard.com/wp-content/uploads/2025/02/Burna-Boy-2.png",
    badge: "JUST ANNOUNCED",
    title: "BURNA BOY",
    subtitle: "WORLD TOUR 2026",
    date: "THU 07 FEB 2026",
    time: "20:00",
    venue: "Main Hall",
    genre: "Afrobeats, R&B"
  },
  {
    id: 4,
    image: "https://www.zimbalam.fr/wp-content/uploads/2025/02/Beyonce-annonce-la-tournee-en-2025-Tangage.jpg",
    badge: "JUST ANNOUNCED",
    title: "BEYONCÉ",
    subtitle: "RENAISSANCE WORLD TOUR",
    date: "FRI 25 APR 2026",
    time: "20:00",
    venue: "Main Hall",
    genre: "Pop, R&B"
  },
  {
    id: 5,
    image: "https://apps.ticketmatic.com/obj/filestore/prod/10491/events/11420/image.67bef0e0b2a19.960.jpg",
    badge: "JUST ANNOUNCED",
    title: "SDM",
    subtitle: "HIP HOP SNACKS",
    date: "SAT 01 NOV 2025",
    time: "19:00",
    venue: "Main Hall",
    genre: "French Rap"
  }
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      pagination={{ 
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} w-3 h-3"></span>`;
        }
      }}
      autoplay={{ 
        delay: 5000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      effect="fade"
      speed={1000}
      loop={true}
      className="h-full w-full select-none"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {({ isActive }) => (
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-[2s] scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-full flex flex-col justify-center px-4"
              >
                <div className="container mx-auto">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Badge className="mb-4 text-sm px-3 py-1" variant="secondary">
                        {slide.badge}
                      </Badge>
                    </motion.div>

                    <motion.div 
                      className="space-y-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <h1 className="text-5xl md:text-7xl font-bold text-white">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/80">
                        {slide.subtitle}
                      </p>
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-6 text-white/80 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>{slide.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>{slide.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{slide.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Music className="h-5 w-5" />
                        <span>{slide.genre}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <Button 
                        size="lg" 
                        className="text-lg px-8 hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link href="https://buy.stripe.com/aEUeVP04SgJE8Qo001">
                          BUY TICKETS
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}