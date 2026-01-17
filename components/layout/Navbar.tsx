"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Collections", href: "#collections" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-jharoka-cream/95 backdrop-blur-xl shadow-sm border-b border-jharoka-burgundy/8 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-6 group relative z-10">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-xl border-2 border-jharoka-burgundy/20 group-hover:border-jharoka-burgundy/60 transition-all duration-500 group-hover:shadow-2xl">
              <Image
                src="/logo.png"
                alt="Jharoka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-bold text-jharoka-burgundy-900 leading-none tracking-tight group-hover:text-jharoka-burgundy transition-colors duration-300">
                Jharoka
              </span>
              <span className="hidden sm:block text-xs font-semibold tracking-[0.3em] uppercase text-jharoka-burgundy/80 mt-1 group-hover:text-jharoka-burgundy transition-colors duration-300">
                Heritage Furniture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-jharoka-burgundy-900/80 hover:text-jharoka-burgundy-900 transition-colors duration-300 group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-jharoka-burgundy group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link href="#contact">
              <button className="group relative overflow-hidden bg-transparent border border-jharoka-burgundy/30 text-jharoka-burgundy px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:border-jharoka-burgundy transition-all duration-500 shadow-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Private Consultation
                </span>
                <div className="absolute inset-0 bg-jharoka-burgundy transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-jharoka-burgundy-900 hover:text-jharoka-burgundy transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-jharoka-cream lg:hidden"
          >
            <div className="flex flex-col h-full">

              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-jharoka-burgundy/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-jharoka-burgundy/20">
                    <Image src="/logo.png" alt="Jharoka" fill className="object-cover" />
                  </div>
                  <span className="font-serif text-xl font-bold text-jharoka-burgundy-900">Jharoka</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-jharoka-burgundy-900 hover:text-jharoka-burgundy transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-8 text-center">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-serif text-3xl font-medium text-jharoka-burgundy-900 hover:text-jharoka-burgundy transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="pt-8"
                  >
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-jharoka-burgundy text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-jharoka-burgundy-900 transition-colors duration-300 w-full shadow-sm"
                    >
                      Private Consultation
                    </button>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}