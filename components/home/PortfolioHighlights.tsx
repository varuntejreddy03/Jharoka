"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

export default function PortfolioHighlights() {
  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D4A574]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#8B4513]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <motion.div
          className="text-center mb-16 lg:mb-24"
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4A574]/10 to-[#8B4513]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F0EBE3] shadow-2xl">
                <Image
                  src="/images/grind-cafe.png"
                  alt="The Grind Cafe"
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/70 via-transparent to-transparent" />
                
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 bg-[#D4A574] rounded-full text-white text-xs font-semibold tracking-wider uppercase">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#D4A574] text-sm font-medium tracking-wider uppercase">
                Commercial • 2024
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2C1810] mt-3 mb-4 tracking-tight">
                The Grind Cafe
              </h3>
              <p className="text-[#5C4A3D]/70 text-lg leading-relaxed">
                A complete commercial interior execution blending industrial chic with warm, organic textures. Custom joinery, handcrafted furniture, and acoustic solutions designed to create an inviting community hub.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#2C1810]/5 text-[#2C1810] text-sm font-medium rounded-full">
                Custom Joinery
              </span>
              <span className="px-4 py-2 bg-[#2C1810]/5 text-[#2C1810] text-sm font-medium rounded-full">
                Furniture Design
              </span>
              <span className="px-4 py-2 bg-[#2C1810]/5 text-[#2C1810] text-sm font-medium rounded-full">
                Interior Execution
              </span>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-3 text-[#5C4A3D]/60">
                <div className="w-2 h-2 rounded-full bg-[#D4A574]" />
                <span className="text-sm">Tellapur, Hyderabad</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 lg:mt-32"
        >
          <div className="bg-gradient-to-br from-[#2C1810] to-[#1a0f0a] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4A574]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-[#D4A574]" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
                Coming Soon
              </h3>
              
              <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
                More transformative projects are currently in the works. Stay tuned for our upcoming showcase of exceptional spaces.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
