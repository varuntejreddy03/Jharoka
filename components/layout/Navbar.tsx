"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-2 lg:py-3"
            : "bg-white/80 backdrop-blur-sm py-3 lg:py-5"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-4 group relative z-10">
            <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-all duration-500">
              <Image
                src="/logo.png"
                alt="Jharoka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-2xl font-semibold text-[#2C1810] leading-none tracking-tight group-hover:text-[#8B4513] transition-colors duration-300">
                Jharoka
              </span>
              <span className="hidden lg:block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8B4513]/70 mt-0.5">
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
            className="lg:hidden p-2 text-[#2C1810] hover:text-[#8B4513] transition-all duration-300"
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
              <div className="flex items-center justify-between p-6 border-b border-[#2C1810]/10">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src="/logo.png" alt="Jharoka" fill className="object-cover" />
                  </div>
                  <span className="text-lg font-semibold text-[#2C1810]">Jharoka</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#2C1810] hover:text-[#8B4513] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-2xl font-medium text-[#2C1810] hover:text-[#8B4513] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="pt-6"
                  >
                    <Link
                      href="/#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full bg-[#2C1810] text-white text-center px-6 py-4 text-sm font-medium tracking-wider uppercase rounded-xl hover:bg-[#8B4513] transition-colors duration-300"
                    >
                      Private Consultation
                    </Link>
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