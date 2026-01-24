"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categories from "@/data/categories.json";

export default function CategoryCircles() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-[#8B4513] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Explore Our Range
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C1810] mb-6">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-[#5C4A3D]/70 max-w-xl mx-auto">
            Discover our curated collections of handcrafted heritage furniture
          </p>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link 
                href={`/category/${category.slug}`}
                className="block group text-center"
              >
                <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mb-4 sm:mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4A574]/30 to-[#8B4513]/20 transform group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-[#FAF8F5] border-4 border-white shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                    />
                  </div>
                  
                  <div className="absolute inset-0 rounded-full border-2 border-[#D4A574]/0 group-hover:border-[#D4A574]/50 transition-all duration-500" />
                </div>
                
                <h3 className="font-serif text-sm sm:text-base lg:text-lg font-medium text-[#2C1810] group-hover:text-[#8B4513] transition-colors duration-300">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14 sm:mt-20"
        >
          <Link 
            href="/collections"
            className="inline-flex items-center gap-3 text-[#8B4513] font-semibold text-sm sm:text-base hover:gap-4 transition-all duration-300 group"
          >
            <span className="border-b-2 border-[#8B4513]/30 group-hover:border-[#8B4513] transition-colors pb-0.5">
              View All Collections
            </span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
