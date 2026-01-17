"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Hammer,
  Leaf,
  Home,
  Coffee,
  Building,
  Crown,
  CheckCircle2,
  Users,
  Palette,
  Ruler
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Top Categories (filters/context)
const categories = [
  { id: "residences", label: "Luxury Residences", icon: Home },
  { id: "cafes", label: "Boutique Cafés", icon: Coffee },
  { id: "hotels", label: "Heritage Hotels", icon: Building },
  { id: "suites", label: "Royal Suites", icon: Crown }
];

// Main Disciplines Content
const disciplines = [
  {
    id: "01",
    title: "Interior Mastery",
    subtitle: "The Art of Space Transformation",
    description: "We blend three generations of heritage wisdom with contemporary vision. Our approach honors the architectural shell while introducing layers of comfort, narrative, and bespoke luxury.",
    icon: Compass,
    highlights: [
      { label: "Spatial Planning", icon: Ruler },
      { label: "Heritage Fusion", icon: Building },
      { label: "Color Psychology", icon: Palette },
      { label: "Artisan Coordination", icon: Users }
    ],
    features: [
      "Bespoke Furniture Design",
      "Lighting Architecture",
      "Material Curation",
      "Art Selection & Styling"
    ],
    color: "bg-[#2C2420]", // Deep Walnut
    accent: "text-[#B8956A]"
  },
  {
    id: "02",
    title: "Architectural Vision",
    subtitle: "Structural Poetry in Wood & Stone",
    description: "Architectural solutions rooted in traditional Indian principles, elevated through modern innovation. Every structure becomes a testament to timeless design philosophy, engineered for longevity.",
    icon: Hammer,
    highlights: [
      { label: "Structural Integrity", icon: Ruler },
      { label: "Sustainable Design", icon: Leaf },
      { label: "Cultural Integration", icon: Crown },
      { label: "Modern Engineering", icon: Compass }
    ],
    features: [
      "Heritage Restoration",
      "Sustainable Materials",
      "Structural Consulting",
      "Site Analysis"
    ],
    color: "bg-[#3A322C]", // Stone Grey-Brown
    accent: "text-[#C5B3A6]"
  },
  {
    id: "03",
    title: "Landscape Harmony",
    subtitle: "Gardens as Living Art",
    description: "Creating outdoor sanctuaries that complement architectural beauty. From serene meditation gardens to vibrant commercial landscapes that inspire and rejuvenate the spirit.",
    icon: Leaf,
    highlights: [
      { label: "Native Flora", icon: Leaf },
      { label: "Water Features", icon: Coffee }, // Metaphorical
      { label: "Outdoor Living", icon: Home },
      { label: "Seasonal Planning", icon: Compass }
    ],
    features: [
      "Zen Garden Design",
      "Hardscaping",
      "Irrigation Systems",
      "Lighting Design"
    ],
    color: "bg-[#4A423C]", // Earthy Taupe
    accent: "text-[#D6C4B8]"
  }
];

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState("residences");
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  return (
    <section id="services" className="bg-[#FBF9F6] py-24 lg:py-32 relative overflow-hidden">

      {/* 1. Section Header */}
      <motion.div
        className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl lg:text-7xl text-[#2C2420] mb-6 leading-tight">
          Crafting <span className="text-[#8B5A2B] italic font-light">Legacies</span>
        </h2>
        <p className="text-lg text-[#6B5A4E] max-w-2xl mx-auto leading-relaxed">
          Our integrated approach unites three distinct disciplines to create cohesive, living environments that stand the test of time.
        </p>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* 2. Category Selector */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full border border-[#8B5A2B]/10 flex gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? "bg-[#2C2420] text-white shadow-lg shadow-[#2C2420]/10"
                      : "text-[#6B5A4E] hover:bg-white hover:text-[#2C2420]"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#B8956A]" : "opacity-50"}`} />
                  <span className="whitespace-nowrap">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch h-full">

          {/* 3. Feature Highlight Area (Left) */}
          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`h-full min-h-[600px] rounded-[2rem] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between ${disciplines[activeDiscipline].color}`}
              >
                {/* Abstract Background Elements - No Images */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                {/* Top Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
                      {React.createElement(disciplines[activeDiscipline].icon, {
                        className: `w-5 h-5 ${disciplines[activeDiscipline].accent}`
                      })}
                    </div>
                    <span className={`text-xs font-bold tracking-[0.2em] uppercase ${disciplines[activeDiscipline].accent}`}>
                      Discipline {disciplines[activeDiscipline].id}
                    </span>
                  </div>

                  <h3 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
                    {disciplines[activeDiscipline].title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                    {disciplines[activeDiscipline].description}
                  </p>
                </div>

                {/* Bottom Stats / Grid */}
                <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Core Focus</span>
                      <div className="space-y-4">
                        {disciplines[activeDiscipline].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className={`w-5 h-5 ${disciplines[activeDiscipline].accent}`} />
                            <span className="text-white/90 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Competencies</span>
                      <div className="grid grid-cols-2 gap-4">
                        {disciplines[activeDiscipline].highlights.map((item, idx) => (
                          <div key={idx} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
                            <item.icon className={`w-5 h-5 ${disciplines[activeDiscipline].accent} mb-3`} />
                            <span className="text-white/90 text-xs font-medium block">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>


          {/* 4. Right Area - Vertical Stack & 5. Info Blocks */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {disciplines.map((discipline, index) => {
              const isActive = activeDiscipline === index;

              return (
                <motion.div
                  key={discipline.id}
                  onClick={() => setActiveDiscipline(index)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`group cursor-pointer rounded-2xl transition-all duration-500 border ${isActive
                      ? "bg-white border-[#8B5A2B]/10 shadow-xl scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-[#8B5A2B]/5"
                    }`}
                >
                  <div className="p-6 lg:p-8 flex items-start gap-6">
                    <span
                      className={`text-xl font-serif font-bold transition-colors duration-300 ${isActive ? "text-[#8B5A2B]" : "text-[#6B5A4E]/30"
                        }`}
                    >
                      {discipline.id}
                    </span>

                    <div className="flex-1">
                      <h4
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-[#2C2420]" : "text-[#6B5A4E]"
                          }`}
                      >
                        {discipline.title}
                      </h4>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-[#6B5A4E] text-sm leading-relaxed">
                          {discipline.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${isActive
                          ? "text-[#8B5A2B] translate-x-0"
                          : "text-[#6B5A4E]/30 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}