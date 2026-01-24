"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowRight, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="py-24 lg:py-36 bg-[#2C1810] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D4A574]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] w-16 bg-[#D4A574] mx-auto mb-10"
          />
          
          <span className="text-[#D4A574] text-[11px] font-semibold tracking-[0.5em] uppercase mb-6 block">
            Get In Touch
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Start Your Journey
          </h2>
          
          <p className="text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed">
            Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Visit Our Studio</h3>
                  <p className="text-white/50 leading-relaxed">
                    Plot No. 123, Road No. 36<br />
                    Kavuri Hills, Hyderabad<br />
                    Telangana 500033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Call Us</h3>
                  <a href="tel:+917386037700" className="text-white/50 hover:text-[#D4A574] transition-colors text-lg">
                    +91 73860 37700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Working Hours</h3>
                  <p className="text-white/50">
                    All Days: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://www.instagram.com/jharoka_furniture/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#D4A574] transition-colors text-sm font-medium tracking-wider uppercase"
              >
                Instagram
              </a>
              <div className="w-[1px] h-4 bg-white/20" />
              <a 
                href="https://www.linkedin.com/company/jharoka-furniture/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#D4A574] transition-colors text-sm font-medium tracking-wider uppercase"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/40 text-xs font-medium tracking-wider uppercase mb-3 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A574]/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-medium tracking-wider uppercase mb-3 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A574]/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs font-medium tracking-wider uppercase mb-3 block">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A574]/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs font-medium tracking-wider uppercase mb-3 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A574]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-[#D4A574] hover:bg-[#C49A6C] text-[#2C1810] py-5 rounded-xl font-medium tracking-wide transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {isSubmitted ? (
                  <>Message Sent Successfully</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
