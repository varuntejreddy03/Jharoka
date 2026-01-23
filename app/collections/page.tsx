"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import categories from "@/data/categories.json";

export default function CollectionsPage() {
  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-jharoka-burgundy-900 mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-jharoka-text-secondary max-w-2xl mx-auto">
              Discover our range of handcrafted furniture, from restored antiques to modern bespoke pieces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/category/${category.slug}`}>
                  <div className="group relative aspect-[4/5] bg-white rounded-lg overflow-hidden border border-jharoka-burgundy/10 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-jharoka-burgundy-900/80 via-transparent to-transparent z-10" />
                    
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-jharoka-cream-dim flex items-center justify-center -z-10">
                        <div className="w-24 h-24 rounded-full bg-jharoka-burgundy/10 flex items-center justify-center">
                          <span className="text-4xl text-jharoka-burgundy/60">
                            {category.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-jharoka-cream transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                        <span className="text-xs uppercase tracking-widest font-medium">
                          Explore Collection
                        </span>
                        <svg 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-jharoka-burgundy/0 group-hover:bg-jharoka-burgundy/10 transition-colors duration-500 z-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
