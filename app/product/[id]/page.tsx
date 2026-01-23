"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Shield,
  Truck,
  ChevronRight,
  Heart,
  Share2,
  Check,
  Phone,
} from "lucide-react";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="bg-jharoka-cream min-h-screen">
        <Navbar />
        <main className="pt-32 text-center container-premium">
          <h1 className="font-serif text-4xl text-jharoka-burgundy-900 mb-4">Product not found</h1>
          <Link href="/collections" className="text-jharoka-burgundy hover:underline inline-flex items-center gap-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Collections
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.slug === product.category);
  const activeImage = product.images[activeImageIndex] || product.mainImage;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div className="container-premium">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-jharoka-text-secondary mb-6 sm:mb-10 flex-wrap"
          >
            <Link href="/" className="hover:text-jharoka-burgundy transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link href="/collections" className="hover:text-jharoka-burgundy transition-colors">Collections</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link href={`/category/${product.category}`} className="hover:text-jharoka-burgundy transition-colors">
              {category?.name}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-jharoka-burgundy-900 font-medium truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-jharoka-cream group">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex flex-col gap-2">
                  <span className="bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg text-jharoka-burgundy-900">
                    Handcrafted
                  </span>
                  {product.inStock && (
                    <span className="bg-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg text-white">
                      Ready to Ship
                    </span>
                  )}
                </div>

                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex flex-col gap-2">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy-900" />
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy-900" />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImageIndex === idx 
                        ? 'ring-2 ring-jharoka-burgundy ring-offset-2' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`${product.name} view ${idx + 1}`} 
                      fill 
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32 space-y-6 sm:space-y-8"
            >
              <div>
                <span className="text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  {category?.name}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-jharoka-burgundy-900 mb-4 sm:mb-6 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-jharoka-burgundy-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs sm:text-sm text-jharoka-text-secondary">excl. taxes</span>
                </div>

                <p className="text-jharoka-text-secondary text-base sm:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 border-y border-jharoka-cream-dim">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-jharoka-cream mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-jharoka-burgundy-900 block">10 Year</span>
                  <span className="text-[10px] sm:text-xs text-jharoka-text-secondary">Warranty</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-jharoka-cream mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-jharoka-burgundy-900 block">Free</span>
                  <span className="text-[10px] sm:text-xs text-jharoka-text-secondary">Delivery</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-jharoka-cream mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-jharoka-burgundy" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-jharoka-burgundy-900 block">{product.deliveryTime}</span>
                  <span className="text-[10px] sm:text-xs text-jharoka-text-secondary">Delivery</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <button className="w-full bg-jharoka-burgundy-900 text-white py-3.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-jharoka-burgundy transition-colors duration-300 font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule Consultation
                </button>
                <button className="w-full bg-jharoka-cream text-jharoka-burgundy-900 py-3.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-jharoka-cream-dim transition-colors duration-300 font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Request Custom Quote
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-jharoka-burgundy-900">Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {product.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 text-jharoka-text-secondary">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-jharoka-cream rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-jharoka-burgundy-900">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <span className="text-[10px] sm:text-xs text-jharoka-text-secondary uppercase tracking-wider block mb-1">Dimensions</span>
                    <span className="text-xs sm:text-sm text-jharoka-burgundy-900 font-medium">{product.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-jharoka-text-secondary uppercase tracking-wider block mb-1">Material</span>
                    <span className="text-xs sm:text-sm text-jharoka-burgundy-900 font-medium">{product.material}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
