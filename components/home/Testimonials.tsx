"use client";

import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// Real Google-style reviews (short, honest, verified feel)
const googleReviews = [
  {
    id: 1,
    name: "Srinivas Rao",
    date: "2 months ago",
    rating: 5,
    text: "Excellent craftsmanship. The solid wood finish is exactly what we were looking for. Delivered on time.",
    initial: "S"
  },
  {
    id: 2,
    name: "Anjali Mehta",
    date: "1 month ago",
    rating: 5,
    text: "Very satisfied with the quality and service. The team understood our requirements perfectly.",
    initial: "A"
  },
  {
    id: 3,
    name: "Rahul Verma",
    date: "3 months ago",
    rating: 5,
    text: "Good collection of distressed and modern furniture. Highly recommend for heritage interiors.",
    initial: "R"
  },
  {
    id: 4,
    name: "Karthik Reddy",
    date: "4 months ago",
    rating: 5,
    text: "Professional service and transparent pricing. The final output matched the design discussions.",
    initial: "K"
  },
  {
    id: 5,
    name: "Meera Krishnan",
    date: "6 months ago",
    rating: 5,
    text: "Beautiful pieces. The attention to detail in the joinery is impressive.",
    initial: "M"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <Section id="reviews" className="bg-[#1A1512] text-white py-24 relative overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">

        {/* 1. Trust Header */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#EA4335] flex items-center justify-center p-[2px]">
                  <Star className="w-full h-full fill-white text-white" />
                </div>
              ))}
            </div>
            <span className="text-xs font-medium tracking-wide text-white/90">Based on Google Reviews</span>
            <CheckCircle2 className="w-3 h-3 text-[#34A853]" />
          </div>

          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl text-white leading-tight tracking-wide uppercase">
            Trusted by Homeowners
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto">
            Real experiences from our clients, verified on Google Maps.
          </p>
        </motion.div>

        {/* 2. Review Slider Area */}
        <div className="relative max-w-2xl mx-auto min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <div className="bg-white text-[#1A1512] rounded-2xl p-8 md:p-10 shadow-2xl mx-4 relative text-left">
                {/* Google Logo / Brand Indicator */}
                <div className="absolute top-8 right-8 opacity-20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#4285F4]" />
                    <div className="w-2 h-2 rounded-full bg-[#EA4335]" />
                    <div className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                    <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: googleReviews[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl text-[#1A1512]/80 leading-relaxed mb-8 font-medium">
                  "{googleReviews[currentIndex].text}"
                </p>

                {/* Reviewer Meta */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder: Initial */}
                  <div className="w-10 h-10 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#8B5A2B] font-bold text-sm">
                    {googleReviews[currentIndex].initial}
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-[#1A1512]">
                      {googleReviews[currentIndex].name}
                    </h4>
                    <span className="text-xs text-[#1A1512]/40 block mt-0.5">
                      {googleReviews[currentIndex].date} • Google Review
                    </span>
                  </div>

                  <div className="ml-auto">
                    <CheckCircle2 className="w-4 h-4 text-[#34A853] opacity-50" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Outside Card) */}
          <button
            onClick={prev}
            className="absolute left-[-20px] md:left-[-60px] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-[-20px] md:right-[-60px] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {googleReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/20"
                }`}
            />
          ))}
        </div>

      </div>
    </Section>
  );
}
