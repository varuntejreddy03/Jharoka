"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowRight, MessageSquare, Car, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Section id="contact" className="relative bg-[#FBF9F6] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* 1. Hero Header */}
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#8B5A2B]/20" />
            <span className="text-[#8B5A2B] font-medium tracking-[0.3em] uppercase text-xs">
              Contact & Visit
            </span>
            <div className="w-12 h-px bg-[#8B5A2B]/20" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none text-[#2C2420] mb-6">
            Experience Our <span className="text-[#8B5A2B]">Craftsmanship</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B5A4E] max-w-2xl mx-auto leading-relaxed font-light">
            We invite you to visit our studio to touch the materials, meet our craftsmen, and discuss your vision in person.
          </p>
        </motion.div>

        {/* 2. Information + Form Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start mb-16 lg:mb-24">

          {/* LEFT: Showroom Information Panel */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Card 1: Location */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#8B5A2B]/5 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#F5F2EB] rounded-full text-[#8B5A2B]">
                  <MapPin className="w-6 h-6" />
                </div>
                <Button
                  variant="ghost"
                  className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B] hover:bg-[#F5F2EB] gap-2"
                  onClick={() => window.open('https://maps.google.com/?q=Kavuri+Hills+Hyderabad', '_blank')}
                >
                  Get Directions <Navigation className="w-3 h-3" />
                </Button>
              </div>
              <h3 className="font-serif text-2xl text-[#2C2420] mb-2">Heritage Studio</h3>
              <p className="text-[#6B5A4E] leading-relaxed mb-4">
                Plot No. 123, Road No. 36<br />
                Kavuri Hills, Hyderabad<br />
                Telangana 500033
              </p>
              <div className="flex items-center gap-2 text-sm text-[#8B5A2B]/80 font-medium bg-[#F5F2EB]/50 p-3 rounded-lg">
                <Car className="w-4 h-4" />
                <span>Valet parking available for guests</span>
              </div>
            </div>

            {/* Card 2: Contact */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#8B5A2B]/5 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#F5F2EB] rounded-full text-[#8B5A2B]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#2C2420]">Contact Us</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#8B5A2B] uppercase tracking-wider font-semibold mb-1">Phone</p>
                  <a href="tel:+917386037700" className="text-lg text-[#2C2420] hover:text-[#8B5A2B] transition-colors font-medium">
                    +91 73860 37700
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#8B5A2B] uppercase tracking-wider font-semibold mb-2">Social</p>
                  <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/jharoka_furniture/" target="_blank" rel="noopener noreferrer" className="text-[#2C2420] hover:text-[#E4405F] transition-colors text-sm font-medium flex items-center gap-2">
                      Instagram
                      <ArrowRight className="w-3 h-3 -rotate-45" />
                    </a>
                    <div className="w-px h-4 bg-[#2C2420]/20" />
                    <a href="https://www.linkedin.com/company/jharoka-furniture/" target="_blank" rel="noopener noreferrer" className="text-[#2C2420] hover:text-[#0A66C2] transition-colors text-sm font-medium flex items-center gap-2">
                      LinkedIn
                      <ArrowRight className="w-3 h-3 -rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Visiting Hours */}
            <div className="bg-[#2C2420] p-8 rounded-sm shadow-xl text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-full text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl">Calling Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">All Days</span>
                  <span className="font-medium">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Conversation Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-10 lg:p-12 rounded-sm shadow-xl shadow-[#2C2420]/5 border border-[#8B5A2B]/10">
              <div className="mb-10">
                <h3 className="font-serif text-3xl text-[#2C2420] mb-4">Start a Conversation</h3>
                <p className="text-[#6B5A4E] leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to listen. No pressure, just a conversation about beautiful spaces.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2C2420] flex items-center gap-2">
                      Name <span className="text-[#8B5A2B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border-0 border-b-2 border-[#E5E0D8] px-0 py-3 text-[#2C2420] focus:ring-0 focus:border-[#8B5A2B] focus:bg-transparent transition-all placeholder:text-[#2C2420]/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2C2420] flex items-center gap-2">
                      Email <span className="text-[#8B5A2B]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border-0 border-b-2 border-[#E5E0D8] px-0 py-3 text-[#2C2420] focus:ring-0 focus:border-[#8B5A2B] focus:bg-transparent transition-all placeholder:text-[#2C2420]/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2C2420]">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border-0 border-b-2 border-[#E5E0D8] px-0 py-3 text-[#2C2420] focus:ring-0 focus:border-[#8B5A2B] focus:bg-transparent transition-all placeholder:text-[#2C2420]/30"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2C2420]">
                      I'm interested in...
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border-0 border-b-2 border-[#E5E0D8] px-0 py-3 text-[#2C2420] focus:ring-0 focus:border-[#8B5A2B] focus:bg-transparent transition-all"
                    >
                      <option value="">Select a Topic</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="interior">Interior Design</option>
                      <option value="visit">Showroom Visit</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2C2420]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border-0 border-b-2 border-[#E5E0D8] px-0 py-3 text-[#2C2420] focus:ring-0 focus:border-[#8B5A2B] focus:bg-transparent transition-all resize-none placeholder:text-[#2C2420]/30"
                    placeholder="Tell us a bit about your vision..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-[#2C2420] hover:bg-[#8B5A2B] text-white py-5 rounded-sm text-lg font-medium tracking-wide transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
                >
                  {isSubmitted ? (
                    <>Message Sent <span className="text-green-400">✓</span></>
                  ) : (
                    <>Send Message <ArrowRight className="w-5 h-5" /></>
                  )}
                </Button>

                <p className="text-center text-xs text-[#6B5A4E]/60 mt-4">
                  Your privacy is important to us. We'll never share your information.
                </p>
              </form>
            </div>
          </motion.div>

        </div>

        {/* 3. Map Section (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-2xl relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.336453962512!2d78.39702840000001!3d17.4436033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911a20e1f4b9%3A0xf69ceab74edce0e!2sJharoka%20-%20Period%20Furniture%20Store!5e0!3m2!1sen!2sin!4v1768672613617!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:filter-none group-hover:opacity-100 transition-all duration-700"
          />
          {/* Map Overlay Label */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg pointer-events-none">
            <p className="text-[#2C2420] font-bold font-serif text-lg">Jharoka Studio</p>
            <p className="text-[#6B5A4E] text-sm">Experience Center</p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}

// Minimal Section Wrapper since we are replacing the whole file and avoiding imports if not needed, 
// but sticking to existing pattern if 'Section' component assumes global availability? 
// Actually 'Section' was imported from components/ui/Section in the original file.
// I will keep the import.

import { Section } from "@/components/ui/Section";