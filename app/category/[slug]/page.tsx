"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
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
        <main className="pt-32 text-center">
          <h1 className="font-serif text-4xl text-jharoka-burgundy-900">Category not found</h1>
          <Link href="/collections" className="text-jharoka-burgundy mt-4 inline-block hover:underline">
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
      
      <main className="pt-24 min-h-screen">
        <Section>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-jharoka-burgundy-900/60 mb-8 font-medium">
            <Link href="/" className="hover:text-jharoka-burgundy transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/collections" className="hover:text-jharoka-burgundy transition-colors">Collections</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-jharoka-burgundy-900">{category.name}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-jharoka-burgundy-900 mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-jharoka-text-secondary max-w-2xl mx-auto">
              {category.description}
            </p>
          </motion.div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-jharoka-burgundy-900/60 text-lg">
                No products available in this category yet.
              </p>
              <Link 
                href="/collections" 
                className="inline-block mt-6 text-jharoka-burgundy hover:underline"
              >
                Browse other collections
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group bg-white rounded-lg overflow-hidden border border-jharoka-burgundy/10 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/3] bg-jharoka-cream-dim overflow-hidden">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-20 h-20 rounded-full bg-jharoka-burgundy/10 flex items-center justify-center">
                          <span className="text-3xl text-jharoka-burgundy/40">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-jharoka-burgundy/0 group-hover:bg-jharoka-burgundy/5 transition-colors duration-300" />
                      
                      {product.inStock && (
                        <span className="absolute top-4 left-4 bg-jharoka-burgundy/90 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium rounded-full">
                          In Stock
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-jharoka-burgundy-900 mb-2 group-hover:text-jharoka-burgundy transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-jharoka-burgundy-900/60 text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-jharoka-burgundy-900">
                          {formatPrice(product.price)}
                        </span>
                        <Link 
                          href={`/product/${product.id}`}
                          className="inline-flex items-center gap-2 bg-jharoka-burgundy-900 text-white px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-jharoka-burgundy transition-colors duration-300"
                        >
                          View Product
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Section>
      </main>

      <Footer />
    </div>
  );
}
