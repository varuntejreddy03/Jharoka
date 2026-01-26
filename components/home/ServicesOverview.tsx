"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "residences",
    title: "Luxury Residences",
    description: "Bespoke furniture for discerning homeowners who appreciate the finer things.",
    image: "/productpics/bigsofa1.png",
  },
  {
    id: "cafes", 
    title: "Boutique Cafés",
    description: "Distinctive pieces that define your café's unique character and ambiance.",
    image: "/productpics/smallsofa1.png",
  },
  {
    id: "hotels",
    title: "Heritage Hotels",
    description: "Grand collections for properties that honor history while embracing luxury.",
    image: "/productpics/bed1.png",
  }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#2C1810] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#D4A574]" />
              <span className="text-[#D4A574] text-xs font-semibold tracking-[0.3em] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-[var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-wide uppercase">
              Crafting
              <span className="block text-[#D4A574] mt-2">Legacies</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Our integrated approach unites heritage craftsmanship with modern design sensibilities, creating furniture that becomes part of your story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-[var(--font-bebas)] text-white mb-2 tracking-wide">500+</div>
              <div className="text-white/50 text-sm">Pieces Crafted</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-[var(--font-bebas)] text-white mb-2 tracking-wide">25+</div>
              <div className="text-white/50 text-sm">Years Legacy</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-[var(--font-bebas)] text-white mb-2 tracking-wide">3</div>
              <div className="text-white/50 text-sm">Generations</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-[#D4A574] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-white mb-3 tracking-wide uppercase">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
