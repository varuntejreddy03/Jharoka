"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categories from "@/data/categories.json";

export default function CategoryCircles() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAF8F5]">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                className="block group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white mb-1.5">
                        {category.name}
                      </h3>
                      <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Explore Collection</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C1810] text-white font-medium text-sm sm:text-base rounded-full hover:bg-[#3D251A] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Collections</span>
            <svg 
              className="w-5 h-5" 
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
