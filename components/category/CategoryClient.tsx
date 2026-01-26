"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Sparkles } from "lucide-react";

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16"
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
              <div className="relative">
                <motion.div 
                  className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#D4A574]/20 via-[#8B4513]/10 to-[#D4A574]/15 rounded-[1.5rem] sm:rounded-[2.5rem] blur-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#FAF8F5] to-[#F0EBE3] shadow-xl">
                  <div className="absolute inset-[2px] sm:inset-[3px] rounded-[0.875rem] sm:rounded-[1.85rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(44,24,16,0.12)] group-hover:shadow-[0_25px_80px_rgba(44,24,16,0.22)] transition-shadow duration-700">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-[#1a0f0a]/20 to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <motion.div 
                      className="absolute inset-0 border-2 sm:border-[3px] border-[#D4A574]/0 group-hover:border-[#D4A574]/30 rounded-[0.875rem] sm:rounded-[1.85rem] transition-all duration-500"
                    />
                    
                    <div className="absolute top-4 right-4 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]" />
                      </motion.div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform translate-y-0 sm:translate-y-4 opacity-100 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <motion.div 
                        className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-6 sm:w-8 h-[1px] bg-[#D4A574]" />
                        <span className="text-[#D4A574] text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase">
                          Heritage Piece
                        </span>
                      </motion.div>
                      <p className="text-white font-sans text-lg sm:text-xl lg:text-2xl tracking-wide leading-snug font-light">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 sm:h-8 bg-[#2C1810]/8 rounded-full blur-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
              
              <motion.div 
                className="mt-5 sm:mt-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-sans text-lg sm:text-xl text-[#2C1810]/80 tracking-[0.01em] group-hover:text-[#8B4513] transition-colors duration-400 hidden sm:block">
                  {item.name}
                </p>
                <motion.div 
                  className="hidden sm:block w-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mt-3 group-hover:w-16 transition-all duration-500"
                />
              </motion.div>
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
