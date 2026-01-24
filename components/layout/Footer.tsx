"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const footerLinks = {
  collections: [
    { name: "Heritage Collection", href: "#collections" },
    { name: "Contemporary Line", href: "#collections" },
    { name: "Custom Furniture", href: "#collections" },
    { name: "Outdoor Collection", href: "#collections" }
  ],
  services: [
    { name: "Interior Design", href: "#services" },
    { name: "Architecture", href: "#services" },
    { name: "Landscape Design", href: "#services" },
    { name: "Consultation", href: "#contact" }
  ],
  company: [
    { name: "Our Story", href: "#about" },
    { name: "Craftsmanship", href: "#about" },
    { name: "Sustainability", href: "#about" },
    { name: "Careers", href: "#contact" }
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Visit Showroom", href: "#contact" },
    { name: "Care Guide", href: "#contact" },
    { name: "Warranty", href: "#contact" }
  ]
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/jharoka_furniture/", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/jharoka-furniture/", color: "hover:text-blue-700" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-jharoka-burgundy-900 text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">

          {/* Newsletter Section Removed */}

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">

            {/* Brand Column */}
            <motion.div
              className="col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/" className="flex items-center gap-4 mb-6 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <Image
                    src="/logo.png"
                    alt="Jharoka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-sans text-2xl font-bold">Jharoka</span>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase">Heritage Furniture</p>
                </div>
              </Link>

              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                Three generations of master craftsmen creating furniture that bridges heritage and modern living. Rooted in culture, crafted with soul.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-white/80">Kavuri Hills, Hyderabad</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-white/80">+91 73860 37700</span>
                </div>
              </div>
            </motion.div>

            {/* Collections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-sans text-lg font-bold mb-6 text-white">Collections</h3>
              <ul className="space-y-3">
                {footerLinks.collections.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-sans text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-sans text-lg font-bold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-sans text-lg font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <span className="text-white/80 text-sm font-medium">Follow Our Journey</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm flex items-center gap-2">
                © 2024 Jharoka Furniture. Crafted with
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                in India
              </p>
              <div className="flex items-center gap-6 mt-2 text-xs text-white/50">
                <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white/70 transition-colors">Sitemap</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}