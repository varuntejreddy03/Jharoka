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
          className="inline-flex items-center gap-2 text-sm text-[#5C4A3D]/60 hover:text-[#8B4513] transition-colors duration-300 group"
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
          <span className="font-serif text-[10rem] sm:text-[16rem] lg:text-[22rem] font-bold text-[#2C1810]/[0.025] leading-none select-none whitespace-nowrap">
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
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C1810] mb-8 leading-[0.9] tracking-tight"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14"
        >
          {items.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.src}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#F5F3F0] shadow-[0_4px_30px_rgba(44,24,16,0.08)] hover:shadow-[0_20px_60px_rgba(44,24,16,0.15)] transition-all duration-500 ease-out">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/50 via-[#1a0f0a]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white font-serif text-xl sm:text-2xl tracking-wide leading-tight">
                    {item.name}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="font-serif text-lg sm:text-xl text-[#2C1810]/80 tracking-[0.02em] group-hover:text-[#8B4513] transition-colors duration-300">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-24 sm:mt-32 pb-8"
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
