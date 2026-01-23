"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categories from "@/data/categories.json";

export default function CategoryCircles() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Explore Our Range
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-jharoka-burgundy-900 mb-4 sm:mb-6">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-jharoka-text-secondary max-w-2xl mx-auto">
            Discover our curated collections of handcrafted furniture
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link 
                href={`/category/${category.slug}`}
                className="block group text-center"
              >
                <div className="relative mx-auto w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mb-3 sm:mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-jharoka-burgundy/20 to-jharoka-burgundy/5 transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-1 sm:inset-1.5 lg:inset-2 rounded-full overflow-hidden bg-jharoka-cream border-2 sm:border-3 lg:border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 144px"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-base lg:text-lg font-medium text-jharoka-burgundy-900 group-hover:text-jharoka-burgundy transition-colors">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link 
            href="/collections"
            className="inline-flex items-center gap-2 sm:gap-3 text-jharoka-burgundy font-medium text-sm sm:text-base hover:gap-4 transition-all group"
          >
            <span className="border-b border-jharoka-burgundy/30 group-hover:border-jharoka-burgundy transition-colors pb-0.5">
              View All Collections
            </span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
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
