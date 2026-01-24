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
        className="mb-8 sm:mb-12"
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-jharoka-text-secondary hover:text-jharoka-burgundy transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-16 sm:mb-24"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-serif text-[12rem] sm:text-[18rem] lg:text-[24rem] font-bold text-[#2C1810]/[0.03] leading-none select-none whitespace-nowrap">
            {category.name}
          </span>
        </div>
        
        <div className="relative text-center py-12 sm:py-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-[#D4A574] mx-auto mb-8"
          />
          
          <span className="inline-block text-[#D4A574] text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase mb-6">
            The Collection
          </span>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C1810] mb-6 sm:mb-8 leading-none">
            {category.name}
          </h1>
          
          <p className="text-lg sm:text-xl text-[#5C4A3D]/70 max-w-2xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#D4A574]/50" />
            <span className="text-sm text-[#8B4513] font-medium tracking-wider">
              {items.length} Curated Pieces
            </span>
            <div className="h-[1px] w-12 bg-[#D4A574]/50" />
          </div>
        </div>
      </motion.div>

      {items.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-24"
        >
          <p className="text-[#5C4A3D]/70 text-lg mb-8">
            This collection is being curated. Check back soon.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C1810] text-white rounded-full hover:bg-[#3D251A] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Explore Other Categories
          </Link>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {items.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.src}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-serif text-lg sm:text-xl">
                    {item.name}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <svg className="w-5 h-5 text-[#2C1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-[#2C1810] group-hover:text-[#8B4513] transition-colors duration-300">
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
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-20 sm:mt-28"
      >
        <Link 
          href="/"
          className="inline-flex items-center gap-3 text-[#8B4513] font-medium hover:gap-4 transition-all group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="border-b border-[#8B4513]/30 group-hover:border-[#8B4513] pb-0.5">
            Browse All Categories
          </span>
        </Link>
      </motion.div>
    </>
  );
}
