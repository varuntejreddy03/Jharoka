"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Grind Cafe",
    location: "Tellapur, Hyderabad",
    year: "2024",
    category: "Commercial",
    image: "/output/Chairs/two-chairs-with-round-tea-table.webp",
  },
  {
    id: 2,
    title: "Heritage Villa",
    location: "Jubilee Hills",
    year: "2024",
    category: "Residential",
    image: "/output/Sofas/modern-wooden-sofa-sage-green-cushions.webp",
  },
  {
    id: 3,
    title: "Boutique Hotel",
    location: "Banjara Hills",
    year: "2023",
    category: "Hospitality",
    image: "/output/Beds/wooden-chaise-lounge-bed-white-cushion.webp",
  },
];

export default function PortfolioHighlights() {
  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D4A574]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#8B4513]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <motion.div
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] w-16 bg-[#D4A574] mx-auto mb-10"
          />
          
          <span className="text-[#8B4513] text-[11px] font-semibold tracking-[0.5em] uppercase mb-6 block">
            Selected Works
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C1810] mb-6 tracking-tight">
            Spaces Defined by Excellence
          </h2>
          
          <p className="text-lg text-[#5C4A3D]/60 max-w-xl mx-auto font-light leading-relaxed">
            Where heritage craftsmanship meets contemporary vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#D4A574]/10 to-[#8B4513]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F0EBE3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-[#1a0f0a]/20 to-transparent" />
                  
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-wider border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <p className="text-white/60 text-sm mb-2 tracking-wide">
                        {project.location} • {project.year}
                      </p>
                      <h3 className="text-white text-2xl lg:text-3xl font-light tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="text-[#5C4A3D]/50 text-sm font-light italic">
            More transformative projects in progress...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
