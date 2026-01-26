"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X, ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, Sparkles } from "lucide-react";

interface CategoryItem {
  src: string;
  name: string;
  type: 'product' | 'output';
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface CategoryClientProps {
  category: Category;
  items: CategoryItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function CategoryClient({ category, items }: CategoryClientProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => (prev !== null ? (prev + 1) % items.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
      }
    };

    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, items.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % items.length : null));
  };

  const goToPrev = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 sm:mb-14"
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 px-5 py-3 bg-[#2C1810] text-white text-sm font-medium rounded-full hover:bg-[#8B4513] transition-all duration-300 group shadow-lg hover:shadow-xl"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-12 sm:mb-28"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-sans text-[6rem] sm:text-[16rem] lg:text-[22rem] font-bold text-[#2C1810]/[0.025] leading-none select-none whitespace-nowrap"
          >
            {category.name}
          </motion.span>
        </div>
        
        <div className="relative text-center py-10 sm:py-24">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mb-6 sm:mb-10"
          />
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-[#D4A574] text-[10px] sm:text-xs font-semibold tracking-[0.4em] uppercase mb-5 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            The Collection
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C1810] mb-5 sm:mb-8 leading-[0.95] tracking-tight"
          >
            {category.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-xl text-[#5C4A3D]/60 max-w-xl mx-auto leading-relaxed font-light px-4"
          >
            {category.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10"
          >
            <div className="h-[1px] w-10 sm:w-16 bg-[#D4A574]/40" />
            <span className="text-[11px] sm:text-[13px] text-[#8B4513] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              {items.length} Curated Pieces
            </span>
            <div className="h-[1px] w-10 sm:w-16 bg-[#D4A574]/40" />
          </motion.div>
        </div>
      </motion.div>

      {items.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-32"
        >
          <p className="text-[#5C4A3D]/50 text-lg mb-10 font-light">
            This collection is being curated. Check back soon.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#2C1810] text-white text-sm tracking-wider rounded-full hover:bg-[#3D251A] transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            Explore Other Categories
          </Link>
        </motion.div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-16"
        >
          {items.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.src}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              style={{ perspective: 1000 }}
            >
              {/* Mobile: Clean horizontal card */}
              <div className="sm:hidden">
                <div className="relative flex gap-4 p-4 bg-white rounded-2xl shadow-[0_4px_24px_rgba(44,24,16,0.08)] border border-[#F0EBE3]">
                  <div 
                    className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer active:scale-95 transition-transform"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <span className="text-[#D4A574] text-[9px] font-semibold tracking-[0.2em] uppercase mb-1">
                      Exclusive
                    </span>
                    <h3 className="font-sans text-[#2C1810] text-base font-medium leading-snug mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <div 
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="w-6 h-[1px] bg-[#D4A574]/50" />
                      <span className="text-[10px] text-[#8B4513]/60 tracking-wider uppercase">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Premium vertical card */}
              <div className="hidden sm:block relative">
                <div 
                  className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FAF8F5] to-[#F0EBE3] cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="absolute inset-[3px] rounded-[1.85rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(44,24,16,0.08)] group-hover:shadow-[0_25px_80px_rgba(44,24,16,0.18)] transition-shadow duration-700">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="absolute inset-0 border-[3px] border-white/0 group-hover:border-[#D4A574]/20 rounded-[1.85rem] transition-all duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[1px] bg-[#D4A574]" />
                        <span className="text-[#D4A574] text-[10px] font-semibold tracking-[0.25em] uppercase">
                          View Details
                        </span>
                      </div>
                      <p className="text-white font-sans text-xl lg:text-2xl tracking-wide leading-snug font-light">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="font-sans text-xl text-[#2C1810]/80 tracking-[0.01em] group-hover:text-[#8B4513] transition-colors duration-400">
                    {item.name}
                  </p>
                  <div className="w-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-28 sm:mt-36 pb-8"
      >
        <Link 
          href="/"
          className="inline-flex items-center gap-3 text-[#8B4513]/80 font-medium text-sm tracking-wider hover:text-[#8B4513] hover:gap-4 transition-all duration-300 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="border-b border-[#8B4513]/20 group-hover:border-[#8B4513]/60 pb-1 transition-colors duration-300">
            Browse All Categories
          </span>
        </Link>
      </motion.div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && items[selectedImage] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-50 text-white/60 text-sm font-medium tracking-wider">
              {selectedImage + 1} / {items.length}
            </div>

            {/* Previous Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 sm:left-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* Next Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[selectedImage].src}
                alt={items[selectedImage].name}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Image Name */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-center">
              <p className="text-white font-sans text-lg sm:text-xl font-light tracking-wide">
                {items[selectedImage].name}
              </p>
              <div className="w-12 h-[1px] bg-[#D4A574] mx-auto mt-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
