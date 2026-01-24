"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

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

export default function CategoryClient({ category, items }: CategoryClientProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-14"
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
        className="relative mb-20 sm:mb-28"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-sans text-[10rem] sm:text-[16rem] lg:text-[22rem] font-bold text-[#2C1810]/[0.025] leading-none select-none whitespace-nowrap">
            {category.name}
          </span>
        </div>
        
        <div className="relative text-center py-16 sm:py-24">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mb-10"
          />
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-[#D4A574] text-[11px] sm:text-xs font-semibold tracking-[0.5em] uppercase mb-8"
          >
            The Collection
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C1810] mb-8 leading-[0.9] tracking-tight"
          >
            {category.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-[#5C4A3D]/60 max-w-xl mx-auto leading-relaxed font-light"
          >
            {category.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-5 mt-10"
          >
            <div className="h-[1px] w-16 bg-[#D4A574]/40" />
            <span className="text-[13px] text-[#8B4513] font-medium tracking-[0.2em] uppercase">
              {items.length} Curated Pieces
            </span>
            <div className="h-[1px] w-16 bg-[#D4A574]/40" />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16"
        >
          {items.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.src}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.5 + index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D4A574]/10 via-transparent to-[#8B4513]/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FAF8F5] to-[#F0EBE3]">
                  <div className="absolute inset-[3px] rounded-[1.85rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(44,24,16,0.08)] group-hover:shadow-[0_25px_80px_rgba(44,24,16,0.18)] transition-shadow duration-700">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover transition-all duration-[1000ms] ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/70 via-[#1a0f0a]/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600" />
                    
                    <div className="absolute inset-0 border-[3px] border-white/0 group-hover:border-white/20 rounded-[1.85rem] transition-all duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-out">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[1px] bg-[#D4A574]" />
                        <span className="text-[#D4A574] text-[10px] font-semibold tracking-[0.3em] uppercase">
                          View Details
                        </span>
                      </div>
                      <p className="text-white font-sans text-xl sm:text-2xl tracking-wide leading-snug">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#2C1810]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="mt-8 text-center">
                <p className="font-sans text-xl text-[#2C1810]/80 tracking-[0.01em] group-hover:text-[#8B4513] transition-colors duration-400">
                  {item.name}
                </p>
                <div className="w-0 h-[1px] bg-[#D4A574] mx-auto mt-3 group-hover:w-12 transition-all duration-500" />
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
    </>
  );
}
