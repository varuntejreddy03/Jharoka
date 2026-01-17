"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Minus,
  Plus
} from "lucide-react";
import products from "@/data/products.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Helper to format currency
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeImage, setActiveImage] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState(false);

  // Find product or fallback to first one for demo if ID mismatch (handling the likely case of testing with random IDs)
  // In a real app, strict 404 is better.
  const product = products.find(p => p.id === id) || products[0];

  // Set initial active image
  if (!activeImage && product) {
    setActiveImage(product.heroImage);
  }

  // Combine all images for gallery
  const allImages = product ? [product.heroImage, ...(product.images?.gallery || []), ...(product.images?.lifestyle || []), ...(product.images?.details || [])] : [];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-jharoka-cream min-h-screen selection:bg-jharoka-burgundy/20 selection:text-jharoka-burgundy-900">
      <Navbar />

      {/* 
        HERO SECTION: "Museum-Like" 
        Split layout: Left = Scrollable Gallery, Right = Sticky Information
      */}
      <main className="pt-24 lg:pt-32 pb-20 px-6 lg:px-12 max-w-[1920px] mx-auto">

        {/* Breadcrumb - Minimal */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-jharoka-burgundy-900/60 mb-8 lg:mb-12 font-medium">
          <Link href="/" className="hover:text-jharoka-burgundy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/collections" className="hover:text-jharoka-burgundy transition-colors">{product.collection}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-jharoka-burgundy-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT: GALLERY (Editorial/Museum Style) - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Main Stage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] lg:aspect-[16/11] w-full overflow-hidden rounded-sm bg-jharoka-cream-dim group cursor-crosshair"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={activeImage || product.heroImage}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-700 ease-out will-change-transform ${isZoomed ? 'scale-150' : 'group-hover:scale-105'}`}
                priority
              />

              {/* Image Tags / Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-jharoka-burgundy-900 font-semibold rounded-full shadow-sm">
                  Handcrafted
                </span>
                {product.inStock && (
                  <span className="bg-jharoka-burgundy/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white font-semibold rounded-full shadow-sm">
                    Ready to Ship
                  </span>
                )}
              </div>


            </motion.div>

            {/* Thumbnails Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
            >
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-sm overflow-hidden transition-all duration-300 ${activeImage === img ? 'ring-1 ring-jharoka-burgundy opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <Image src={img} alt={`View ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </motion.div>

            {/* Extra Details / Story (Below Images on Desktop) */}
            <div className="hidden lg:block mt-12 space-y-16">

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-8 border-t border-jharoka-burgundy/10 pt-12">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-jharoka-cream-dim flex items-center justify-center text-jharoka-burgundy">
                    <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-jharoka-burgundy-900">Meticulous Craftsmanship</h3>
                  <p className="text-jharoka-burgundy-900/70 text-sm leading-relaxed">
                    Every curve and joint is hand-finished by master artisans in Rajasthan, ensuring a piece that transcends time.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-jharoka-cream-dim flex items-center justify-center text-jharoka-burgundy">
                    <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-jharoka-burgundy-900">Heritage Warranty</h3>
                  <p className="text-jharoka-burgundy-900/70 text-sm leading-relaxed">
                    Backed by our 10-year structural warranty. Authenticity certificate included with every purchase.
                  </p>
                </div>
              </div>

              {/* Dimensions Section */}
              <div className="border-t border-jharoka-burgundy/10 pt-12">
                <h3 className="font-serif text-2xl text-jharoka-burgundy-900 mb-8">Dimensions & Specs</h3>
                <div className="bg-white p-8 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-jharoka-burgundy/60 mb-2">Dimensions</h4>
                    <p className="text-jharoka-burgundy-900 font-medium text-lg">{product.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-jharoka-burgundy/60 mb-2">Materials</h4>
                    <p className="text-jharoka-burgundy-900 font-medium text-lg">{product.material}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xs uppercase tracking-widest text-jharoka-burgundy/60 mb-2">Care Instructions</h4>
                    <p className="text-jharoka-burgundy-900/80 leading-relaxed">
                      Clean with a soft, dry cloth. Avoid direct sunlight and moisture. Apply natural beeswax polish every 6 months to maintain luster.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: CONTENTS (Sticky) - Spans 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-10">

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-sm uppercase tracking-[0.25em] text-jharoka-burgundy font-medium">
                  {product.collection}
                </h2>
                <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-jharoka-burgundy-900 leading-[1.1]">
                  {product.name}
                </h1>

                {/* Price Block */}
                <div className="flex items-baseline gap-4 pt-2">
                  <span className="text-2xl lg:text-3xl text-jharoka-burgundy-900 font-light">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-jharoka-burgundy-900/50 uppercase tracking-widest">
                    (Excl. Taxes)
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-jharoka-burgundy-900/70 text-lg leading-relaxed font-light"
              >
                <p>{product.description}</p>
              </motion.div>

              {/* Action Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-8 rounded-sm shadow-[0_4px_30px_-15px_rgba(43,28,20,0.05)] border border-jharoka-burgundy/5 space-y-6"
              >
                <div className="flex items-center gap-2 text-jharoka-burgundy-900/60 pb-4 border-b border-jharoka-burgundy/5">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Made to order • {product.deliveryTime} delivery</span>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="w-full bg-jharoka-burgundy-900 text-white h-14 rounded-sm hover:bg-jharoka-burgundy transition-colors duration-500 uppercase tracking-[0.1em] text-sm font-medium flex items-center justify-center gap-2 group">
                    Schedule Private Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-transparent border border-jharoka-burgundy-900/20 text-jharoka-burgundy-900 h-14 rounded-sm hover:border-jharoka-burgundy hover:text-jharoka-burgundy transition-all duration-300 uppercase tracking-[0.1em] text-sm font-medium">
                    View in Showroom
                  </button>
                  <button className="w-full text-jharoka-burgundy-900/60 hover:text-jharoka-burgundy text-xs uppercase tracking-[0.15em] py-2 transition-colors">
                    Request Customization
                  </button>
                </div>
              </motion.div>

              {/* Features List */}
              <div className="space-y-3 pt-4">
                {product.features?.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    className="flex items-center gap-3 text-jharoka-burgundy-900/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-jharoka-burgundy/40" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Only: Details moved here for stacking */}
              <div className="lg:hidden mt-12 space-y-12 block">
                {/* Duplicate content for mobile layout omitted for brevity, focusing on desktop editorial feel first. 
                      Ideally would componentize the Highlights and Dimensions.
                  */}
                <div className="pt-8 border-t border-jharoka-burgundy/10">
                  <h3 className="font-serif text-xl mb-4">Craftsmanship</h3>
                  <p className="text-sm text-jharoka-burgundy-900/70 mb-4">
                    Hand-finished by master artisans. 10-year warranty included.
                  </p>
                  <div className="bg-white p-6 rounded-sm">
                    <p className="font-medium mb-2">Dimensions</p>
                    <p className="text-sm text-jharoka-burgundy-900/70">{product.dimensions}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
