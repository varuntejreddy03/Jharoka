"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);

  if (!category) {
    return (
      <div className="bg-jharoka-cream min-h-screen">
        <Navbar />
        <main className="pt-32 text-center container-premium">
          <h1 className="font-serif text-4xl text-jharoka-burgundy-900 mb-4">Category not found</h1>
          <Link href="/collections" className="text-jharoka-burgundy hover:underline inline-flex items-center gap-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Collections
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      
      <main className="pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="container-premium">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-jharoka-text-secondary mb-8 sm:mb-12 flex-wrap"
          >
            <Link href="/" className="hover:text-jharoka-burgundy transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link href="/collections" className="hover:text-jharoka-burgundy transition-colors">Collections</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-jharoka-burgundy-900 font-medium">{category.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Collection
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-jharoka-burgundy-900 mb-4 sm:mb-6">
              {category.name}
            </h1>
            <p className="text-base sm:text-lg text-jharoka-text-secondary max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </motion.div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-jharoka-text-secondary text-lg mb-6">
                No items available in this collection yet.
              </p>
              <Link 
                href="/collections" 
                className="inline-flex items-center gap-2 text-jharoka-burgundy hover:gap-3 transition-all"
              >
                Browse other collections
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500">
                    <Image
                      src={product.mainImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm sm:text-base text-jharoka-burgundy-900/80 font-medium">
                    {product.name}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
