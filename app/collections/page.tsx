"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import categories from "@/data/categories.json";

export default function CollectionsPage() {
  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      
      <main className="pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4 sm:mb-6">
              Curated Excellence
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-jharoka-burgundy-900 mb-6 sm:mb-8 leading-[1.1]">
              Our Collections
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-jharoka-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
              Discover furniture that tells a story. Each piece is a masterwork of traditional craftsmanship and contemporary design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link href={`/category/${category.slug}`} className="block group">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl bg-white premium-shadow group-hover:premium-shadow-hover transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />

                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-3">
                          {category.name}
                        </h3>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-3 text-white group-hover:text-jharoka-gold transition-colors duration-300">
                          <span className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
                            Explore
                          </span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transform -rotate-45" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
