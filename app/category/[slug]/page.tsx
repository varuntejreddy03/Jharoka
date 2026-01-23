"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Heart, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

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
            className="mb-12 sm:mb-16"
          >
            <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Collection
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-jharoka-burgundy-900 mb-4 sm:mb-6">
              {category.name}
            </h1>
            <p className="text-base sm:text-lg text-jharoka-text-secondary max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </motion.div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-jharoka-text-secondary text-lg mb-6">
                No products available in this category yet.
              </p>
              <Link 
                href="/collections" 
                className="inline-flex items-center gap-2 text-jharoka-burgundy hover:gap-3 transition-all"
              >
                Browse other collections
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link href={`/product/${product.id}`} className="block group">
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden premium-shadow group-hover:premium-shadow-hover transition-all duration-500">
                      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-jharoka-cream-dim">
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {product.inStock ? (
                          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-emerald-600 text-white px-3 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase rounded-full">
                            In Stock
                          </span>
                        ) : (
                          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-jharoka-burgundy-900/80 text-white px-3 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase rounded-full">
                            Made to Order
                          </span>
                        )}

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy-900" />
                          </button>
                          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy-900" />
                          </button>
                        </div>

                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <button className="w-full bg-white/95 backdrop-blur-sm text-jharoka-burgundy-900 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide hover:bg-white transition-colors shadow-lg">
                            Quick View
                          </button>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6">
                        <div className="mb-3 sm:mb-4">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-jharoka-burgundy-900 mb-1 sm:mb-2 group-hover:text-jharoka-burgundy transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-jharoka-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-2">
                            {product.shortDescription}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-jharoka-cream-dim">
                          <div>
                            <span className="text-lg sm:text-xl font-semibold text-jharoka-burgundy-900">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-xs text-jharoka-text-secondary ml-1 sm:ml-2">excl. taxes</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 text-jharoka-burgundy group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                            <span className="text-xs sm:text-sm font-medium">View</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
