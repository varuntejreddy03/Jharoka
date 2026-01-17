"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <Section id="contact" className="py-24 md:py-32 bg-jharoka-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-jharoka-burgundy font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Experience Our Showroom
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-jharoka-burgundy-900 mb-6">
            Visit our 5,000 sq ft <br className="hidden md:block" /> heritage showroom.
          </h2>
          <p className="text-jharoka-text-secondary max-w-xl mx-auto text-lg font-light leading-relaxed">
            We’d love to welcome you to our studio. Experience our craftsmanship firsthand or start a conversation about your dream space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Store Card */}
            <div className="bg-white p-10 rounded-sm shadow-[0_2px_40px_-12px_rgba(43,28,20,0.05)] border border-jharoka-burgundy/5">
              <h3 className="font-serif text-2xl text-jharoka-burgundy-900 mb-8 flex items-center gap-3">
                <MapPin strokeWidth={1.5} className="w-6 h-6 text-jharoka-burgundy" />
                Hyderabad Studio
              </h3>

              <div className="space-y-6 text-jharoka-text-secondary leading-relaxed">
                <div className="pl-9">
                  <p className="font-medium text-jharoka-burgundy-900 mb-1">Kavuri Hills</p>
                  <p className="font-light">
                    Plot No. 123, Road No. 36<br />
                    Jubilee Hills - Kavuri Hills Rd<br />
                    Hyderabad, Telangana 500033
                  </p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-jharoka-burgundy text-xs font-bold tracking-widest uppercase mt-4 hover:opacity-70 transition-opacity"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Contact & Hours */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-[0_2px_40px_-12px_rgba(43,28,20,0.05)] border border-jharoka-burgundy/5">
                <h4 className="font-serif text-xl text-jharoka-burgundy-900 mb-6 flex items-center gap-3">
                  <Phone strokeWidth={1.5} className="w-5 h-5 text-jharoka-burgundy" /> Contact
                </h4>
                <div className="pl-8 space-y-4">
                  <a href="tel:+917386037700" className="block text-lg text-jharoka-burgundy-900 hover:text-jharoka-burgundy transition-colors font-medium">
                    +91 73860 37700
                  </a>
                  <a href="mailto:hello@jharoka.store" className="block text-base text-jharoka-text-secondary hover:text-jharoka-burgundy transition-colors">
                    hello@jharoka.store
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-[0_2px_40px_-12px_rgba(43,28,20,0.05)] border border-jharoka-burgundy/5">
                <h4 className="font-serif text-xl text-jharoka-burgundy-900 mb-6 flex items-center gap-3">
                  <Clock strokeWidth={1.5} className="w-5 h-5 text-jharoka-burgundy" /> Hours
                </h4>
                <div className="pl-8 text-jharoka-text-secondary font-light space-y-2">
                  <p><span className="font-medium text-jharoka-burgundy-900/80 w-16 inline-block">Mon-Sat</span> 10:30 AM - 8:00 PM</p>
                  <p><span className="font-medium text-jharoka-burgundy-900/80 w-16 inline-block">Sun</span> 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 lg:p-12 rounded-sm shadow-[0_2px_60px_-12px_rgba(43,28,20,0.08)] border border-jharoka-burgundy/5 h-full"
          >
            <h3 className="font-serif text-3xl text-jharoka-burgundy-900 mb-2">Start a Conversation</h3>
            <p className="text-jharoka-text-secondary font-light mb-10">Use the form below to inquire about projects, products, or collaborations.</p>

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-bold tracking-widest uppercase text-jharoka-burgundy-900/50 mb-2 group-focus-within:text-jharoka-burgundy transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-lg py-3 border-b border-jharoka-burgundy/10 bg-transparent focus:outline-none focus:border-jharoka-burgundy transition-colors placeholder:text-jharoka-burgundy-900/20 text-jharoka-burgundy-900"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold tracking-widest uppercase text-jharoka-burgundy-900/50 mb-2 group-focus-within:text-jharoka-burgundy transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full text-lg py-3 border-b border-jharoka-burgundy/10 bg-transparent focus:outline-none focus:border-jharoka-burgundy transition-colors placeholder:text-jharoka-burgundy-900/20 text-jharoka-burgundy-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold tracking-widest uppercase text-jharoka-burgundy-900/50 mb-2 group-focus-within:text-jharoka-burgundy transition-colors">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full text-lg py-3 border-b border-jharoka-burgundy/10 bg-transparent focus:outline-none focus:border-jharoka-burgundy transition-colors placeholder:text-jharoka-burgundy-900/20 text-jharoka-burgundy-900 resize-none"
                    placeholder="Tell us about your space or project..."
                  />
                </div>
              </div>

              <Button size="lg" className="w-full bg-jharoka-burgundy-900 text-white hover:bg-jharoka-burgundy rounded-none h-14 tracking-widest uppercase text-xs">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 rounded-sm overflow-hidden border border-jharoka-burgundy/10 shadow-lg h-[450px] relative z-0"
        >
          {/* Map Overlay for Style (Optional - keeps map visible but tones it down until hover) */}
          <div className="absolute inset-0 bg-jharoka-burgundy/5 pointer-events-none z-10 mix-blend-multiply" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.336453962512!2d78.39702840000001!3d17.4436033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911a20e1f4b9%3A0xf69ceab74edce0e!2sJharoka%20-%20Period%20Furniture%20Store!5e0!3m2!1sen!2sin!4v1768255362272!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>

      </div>
    </Section>
  );
}
