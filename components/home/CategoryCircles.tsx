"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categories from "@/data/categories.json";

export default function CategoryCircles() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] w-16 bg-[#D4A574] mx-auto mb-8"
          />
          <span className="inline-block text-[#8B4513] text-[11px] sm:text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Explore Our Range
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C1810] mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-[#5C4A3D]/60 max-w-lg mx-auto font-light">
            Discover our curated collections of handcrafted heritage furniture
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link 
                href={`/category/${category.slug}`}
                className="block group text-center"
              >
                <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mb-5 sm:mb-6">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#D4A574]/20 via-[#8B4513]/10 to-[#D4A574]/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md" />
                  
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FAF8F5] to-[#F0EBE3] p-[3px] shadow-[0_4px_20px_rgba(44,24,16,0.08)] group-hover:shadow-[0_8px_40px_rgba(44,24,16,0.15)] transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <div className="relative w-full h-full">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 rounded-full border-2 border-[#D4A574]/0 group-hover:border-[#D4A574]/40 transition-all duration-500 group-hover:scale-110" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#2C1810] group-hover:text-[#8B4513] transition-colors duration-300 tracking-wide">
                    {category.name}
                  </h3>
                  <div className="w-0 h-[1px] bg-[#D4A574] mx-auto group-hover:w-8 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
