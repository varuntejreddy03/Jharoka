"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, ArrowUpRight } from "lucide-react";

export default function PortfolioHighlights() {
  return (
    <Section background="cream" id="projects" className="py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* 1. Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-jharoka-burgundy/30" />
            <span className="text-jharoka-burgundy font-medium tracking-[0.3em] uppercase text-xs">
              Selected Works
            </span>
            <div className="w-12 h-px bg-jharoka-burgundy/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jharoka-burgundy-900 leading-tight mb-6">
            Spaces Defined by <span className="italic text-jharoka-burgundy">Excellence</span>
          </h2>

          <p className="text-lg text-jharoka-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            Quality over quantity. We showcase only our most significant triumphs where design, heritage, and execution converge perfectly.
          </p>
        </motion.div>

        {/* 2. Featured Project Area (Single Project Focus) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: Featured Project Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="group relative rounded-sm overflow-hidden bg-[#2C2420] text-white shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_-20px_rgba(43,28,20,0.5)]">
              {/* Abstract Visual Placeholder since no image provided */}
              <div className="aspect-[4/3] relative bg-gradient-to-br from-[#3A322C] to-[#1a1512] p-12 flex flex-col justify-between overflow-hidden">
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-xs font-medium tracking-widest uppercase text-white/90">
                    Featured Project
                  </span>
                  <ArrowUpRight className="w-8 h-8 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="font-serif text-4xl lg:text-5xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    The Grind Cafe
                  </h3>
                  <div className="flex flex-wrap gap-6 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B8956A]" />
                      Tellapur, Hyderabad
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B8956A]" />
                      Completed 2024
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Details Panel */}
              <div className="bg-white p-8 lg:p-10 border border-[#2C2420]/5">
                <h4 className="text-[#2C2420] font-serif text-xl mb-3">Project Scope</h4>
                <p className="text-[#6B5A4E] leading-relaxed mb-6">
                  A complete commercial interior execution blending industrial chic with warm, organic textures.
                  Designed to create an inviting community hub, featuring custom joinery and acoustic solutions.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-[#F5F2EB] text-[#8B5A2B] text-xs font-medium uppercase tracking-wider rounded-sm">Commercial</span>
                  <span className="px-3 py-1 bg-[#F5F2EB] text-[#8B5A2B] text-xs font-medium uppercase tracking-wider rounded-sm">Interiors</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Supporting Information & Future List */}
          <motion.div
            className="lg:col-span-5 flex flex-col h-full justify-between gap-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-jharoka-burgundy tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  Current Portfolio
                  <span className="h-px flex-1 bg-jharoka-burgundy/20" />
                </h3>

                {/* Current Active Item */}
                <div className="flex items-start gap-4 p-4 -mx-4 rounded-sm bg-white border border-[#8B5A2B]/10 shadow-sm transition-all">
                  <div className="text-2xl font-serif text-[#8B5A2B] font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-[#2C2420] text-lg">The Grind Cafe</h4>
                    <p className="text-sm text-[#6B5A4E]">Tellapur • Flagship Execution</p>
                  </div>
                </div>

                {/* Future Slots (Visual indication of scalability) */}
                <div className="mt-4 px-4 py-3 border-l-2 border-[#8B5A2B]/10 ml-4 space-y-6 opacity-40">
                  <div className="text-sm font-medium text-[#6B5A4E] italic">More transformative projects currently in execution...</div>
                  <div className="h-12 w-full bg-[#2C2420]/5 rounded-sm animate-pulse" />
                </div>
              </div>

              <div className="bg-[#FBF7F2] p-8 rounded-sm border border-[#8B5A2B]/10">
                <p className="text-[#6B5A4E] text-sm leading-relaxed italic border-l-2 border-[#8B5A2B] pl-4">
                  "We believe in showcasing only what meets our absolute highest standard of perfection. The Grind Cafe stands as a testament to this promise."
                </p>
              </div>
            </div>

            {/* 5. Call-to-Action Block */}
            <div className="bg-[#2C2420] text-white p-8 lg:p-10 rounded-sm shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />

              <h3 className="font-serif text-2xl lg:text-3xl mb-4 relative z-10">Start Your Project</h3>
              <p className="text-white/70 mb-8 max-w-sm relative z-10 font-light">
                Ready to add your space to our legacy of excellence? Let's discuss your vision.
              </p>

              <Button
                className="w-full bg-white text-[#2C2420] hover:bg-[#F5F2EB] font-bold py-4 rounded-sm uppercase tracking-widest flex items-center justify-center gap-2 group relative z-10 transition-all shadow-sm"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss Your Space
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </Section>
  );
}