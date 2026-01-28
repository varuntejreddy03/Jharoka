"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  mainImage: string;
  images: string[];
  shortDescription: string;
  description: string;
  material: string;
  dimensions: string;
  features: string[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface ProductClientProps {
  product: Product;
  category: Category | undefined;
}

export default function ProductClient({ product, category }: ProductClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = product.images[activeImageIndex] || product.mainImage;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
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
          <Link href="/#categories" className="hover:text-jharoka-burgundy transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <Link href={`/category/${product.category}`} className="hover:text-jharoka-burgundy transition-colors">
            {category?.name}
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-jharoka-burgundy-900 font-medium truncate max-w-[150px] sm:max-w-none">{product.name}</span>
        </motion.nav>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              {category?.name}
            </span>
            <h1 className="font-[var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-jharoka-burgundy-900 leading-tight tracking-wide uppercase">
              {product.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg group">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />

              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-jharoka-burgundy-900" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-jharoka-burgundy-900" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx 
                        ? 'bg-white w-6 sm:w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImageIndex === idx 
                        ? 'ring-2 ring-jharoka-burgundy ring-offset-2 shadow-lg' 
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
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10 sm:mt-14"
          >
            <Link 
              href={`/category/${product.category}`}
              className="inline-flex items-center gap-2 text-jharoka-burgundy font-medium hover:gap-3 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to {category?.name}
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
