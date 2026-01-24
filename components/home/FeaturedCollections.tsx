"use client";

import { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Maximize2,
  Clock,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import productsData from "@/data/products.json";
import { Button } from "@/components/ui/Button";

// Helper to format currency
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function FeaturedCollections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentProduct = productsData[currentIndex];
  // Combine all images: Hero + Gallery + Lifestyle + Details
  const allImages = [
    currentProduct.heroImage,
    ...(currentProduct.images?.gallery || []),
    ...(currentProduct.images?.lifestyle || []),
    ...(currentProduct.images?.details || [])
  ].filter(Boolean);

  // Reset image index when product changes
  const switchProduct = (index: number) => {
    setCurrentIndex(index);
    setActiveImageIndex(0);
    setIsZoomed(false);
  };

  const nextProduct = () => {
    switchProduct((currentIndex + 1) % productsData.length);
  };

  const prevProduct = () => {
    switchProduct((currentIndex - 1 + productsData.length) % productsData.length);
  };

  return (
    <Section id="collections" className="bg-jharoka-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,90,43,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Editorial Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-jharoka-burgundy/30" />
            <span className="text-jharoka-burgundy font-medium tracking-[0.3em] uppercase text-xs">
              Legacy Collection
            </span>
            <div className="w-12 h-px bg-jharoka-burgundy/30" />
          </div>
          <h2 className="font-sans text-5xl md:text-6xl text-jharoka-burgundy-900 leading-none font-bold uppercase tracking-tighter">
            Curated <span className="text-jharoka-burgundy">Masterpieces</span>
          </h2>
        </motion.div>

        {/* Flagship Product Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start" ref={ref}>

          {/* LEFT: Gallery Section (Editorial Style) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Hero Image */}
            <div
              className="relative aspect-[4/5] lg:aspect-[16/11] w-full overflow-hidden rounded-sm bg-jharoka-cream-dim group cursor-crosshair shadow-[0_2px_40px_-20px_rgba(0,0,0,0.1)]"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentProduct.id}-${activeImageIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={allImages[activeImageIndex]}
                    alt={currentProduct.name}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-out will-change-transform ${isZoomed ? 'scale-150' : 'group-hover:scale-105'}`}
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-jharoka-burgundy-900 font-semibold rounded-full shadow-sm">
                  Handcrafted
                </span>
              </div>

              {/* Zoom Hint */}
              <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-jharoka-burgundy-900" />
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <motion.div
                className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {allImages.map((img, idx) => (
                  <button
                    key={`${currentProduct.id}-thumb-${idx}`}
                    onClick={() => { setActiveImageIndex(idx); setIsZoomed(false); }}
                    className={`relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-sm overflow-hidden transition-all duration-300 ${activeImageIndex === idx
                      ? 'ring-1 ring-jharoka-burgundy opacity-100'
                      : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                      }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </motion.div>
            )}

            {/* Extra Editorial Content (Visible on Desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-8 border-t border-jharoka-burgundy/10 pt-12 mt-4">
              {/* Highlight 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-jharoka-burgundy shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-lg text-jharoka-burgundy-900 mb-1">Meticulous Detail</h3>
                  <p className="text-jharoka-burgundy-900/60 text-sm leading-relaxed">
                    Hand-finished by master artisans using techniques passed down for generations.
                  </p>
                </div>
              </div>
              {/* Highlight 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-jharoka-burgundy shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-lg text-jharoka-burgundy-900 mb-1">Heritage Warranty</h3>
                  <p className="text-jharoka-burgundy-900/60 text-sm leading-relaxed">
                    Every piece comes with a certificate of authenticity and structural warranty.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Info Section (Sticky-ish feel) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-jharoka-burgundy text-xs font-semibold tracking-[0.25em] uppercase">
                      {currentProduct.collection}
                    </span>
                    <div className="flex gap-2">
                      <button onClick={prevProduct} className="p-2 hover:bg-jharoka-burgundy/5 rounded-full transition-colors group">
                        <ChevronLeft className="w-5 h-5 text-jharoka-burgundy-900/60 group-hover:text-jharoka-burgundy" />
                      </button>
                      <button onClick={nextProduct} className="p-2 hover:bg-jharoka-burgundy/5 rounded-full transition-colors group">
                        <ChevronRight className="w-5 h-5 text-jharoka-burgundy-900/60 group-hover:text-jharoka-burgundy" />
                      </button>
                    </div>
                  </div>

                  <h2 className="font-sans text-4xl lg:text-5xl font-medium text-jharoka-burgundy-900 leading-[1.1]">
                    {currentProduct.name}
                  </h2>

                  <div className="flex items-baseline gap-4 pt-2 border-b border-jharoka-burgundy/10 pb-6">
                    <span className="text-2xl lg:text-3xl text-jharoka-burgundy-900 font-light">
                      {formatPrice(currentProduct.price)}
                    </span>
                    <span className="text-sm text-jharoka-burgundy-900/40 uppercase tracking-widest">
                      (Investment)
                    </span>
                  </div>

                  <p className="text-jharoka-burgundy-900/70 text-lg leading-relaxed font-light pt-2">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Specs & Dimensions */}
                <div className="grid grid-cols-2 gap-6 bg-white/50 p-6 rounded-sm border border-jharoka-burgundy/5">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-jharoka-burgundy/60 mb-2">Material</h4>
                    <p className="text-jharoka-burgundy-900 font-medium text-sm leading-relaxed">{currentProduct.material}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-jharoka-burgundy/60 mb-2">Dimensions</h4>
                    <p className="text-jharoka-burgundy-900 font-medium text-sm leading-relaxed">{currentProduct.dimensions}</p>
                  </div>
                </div>

                {/* Action Block */}
                <div className="bg-white p-8 rounded-sm shadow-[0_4px_30px_-15px_rgba(43,28,20,0.05)] border border-jharoka-burgundy/5 space-y-6">
                  <div className="flex items-center gap-2 text-jharoka-burgundy-900/60 pb-4 border-b border-jharoka-burgundy/5">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wide">Made to Order • {currentProduct.deliveryTime}</span>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-jharoka-burgundy-900 text-white h-14 rounded-sm hover:bg-jharoka-burgundy transition-colors duration-500 uppercase tracking-[0.1em] text-sm font-medium flex items-center justify-center gap-2 group"
                      onClick={() => {
                        const message = `Hello, I'm interested in the ${currentProduct.name} from your Legacy Collection.`;
                        window.open(`https://wa.me/917386037700?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Schedule Private Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="w-full bg-transparent border border-jharoka-burgundy-900/20 text-jharoka-burgundy-900 h-12 rounded-sm hover:border-jharoka-burgundy hover:text-jharoka-burgundy transition-all duration-300 uppercase tracking-[0.1em] text-xs font-medium">
                        View in Showroom
                      </button>
                      <button className="w-full bg-transparent border border-jharoka-burgundy-900/20 text-jharoka-burgundy-900 h-12 rounded-sm hover:border-jharoka-burgundy hover:text-jharoka-burgundy transition-all duration-300 uppercase tracking-[0.1em] text-xs font-medium">
                        Customization
                      </button>
                    </div>
                  </div>
                </div>

                {/* Navigation Bullets (Bottom) */}
                <div className="flex justify-center pt-4">
                  <div className="flex gap-2">
                    {productsData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => switchProduct(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx
                          ? 'w-8 bg-jharoka-burgundy'
                          : 'w-2 bg-jharoka-burgundy/20 hover:bg-jharoka-burgundy/40'
                          }`}
                      />
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}