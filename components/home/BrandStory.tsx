"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <Section background="cream" id="about">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden shadow-2xl">
            <Image
              src="/productpics/1746207231979.jpg"
              alt="Heritage Craftsmanship at Jharoka"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jharoka-burgundy/20 via-transparent to-transparent" />
          </div>

          {/* Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-6 left-6 right-6"
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-jharoka-burgundy/10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-jharoka-burgundy mb-1">Est. 1987</p>
              <p className="text-sm font-serif text-jharoka-burgundy-900">Three Generations of Mastery</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >

          {/* Section Header */}
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-jharoka-burgundy/60 mb-4 block">
              Our Heritage
            </span>
            <h2 className="flex flex-col gap-2">
              <span className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tighter leading-none text-jharoka-burgundy-900 block">
                Rooted in Culture.
              </span>
              <span className="font-[var(--font-display)] italic text-5xl lg:text-6xl xl:text-7xl text-jharoka-burgundy font-medium leading-[0.9] block">
                Crafted with Soul.
              </span>
            </h2>
          </div>

          {/* Key Points */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-jharoka-burgundy rounded-full mt-3 shrink-0" />
              <p className="text-xl text-jharoka-text-secondary leading-relaxed">
                <strong className="text-jharoka-burgundy-900">Three generations</strong> of master craftsmen creating furniture that bridges heritage and modern living.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 bg-jharoka-burgundy rounded-full mt-3 shrink-0" />
              <p className="text-xl text-jharoka-text-secondary leading-relaxed">
                Each piece tells a story of <strong className="text-jharoka-burgundy-900">timeless Indian artistry</strong> — furniture that feels like home and lasts generations.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-jharoka-burgundy/5 p-8 border-l-4 border-jharoka-burgundy">
            <blockquote className="font-serif text-2xl text-jharoka-burgundy-900 italic leading-relaxed">
              "Where heritage meets home, and every grain tells a story."
            </blockquote>
            <cite className="text-sm text-jharoka-burgundy/70 mt-4 block not-italic tracking-wide">
              — The Jharoka Philosophy
            </cite>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link href="#contact">
              <Button className="group bg-jharoka-burgundy hover:bg-jharoka-burgundy-900 text-white px-8 py-6 text-sm font-medium flex items-center gap-3 uppercase tracking-widest rounded-sm shadow-sm">
                Visit Our Atelier
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <p className="text-sm text-jharoka-text-secondary mt-4">
              Experience our heritage collection at Kavuri Hills, Hyderabad
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}