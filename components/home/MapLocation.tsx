"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MapLocation() {
  return (
    <section className="relative bg-gradient-to-b from-jharoka-cream to-jharoka-burgundy-900 py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-jharoka-burgundy" />
            <span className="text-jharoka-burgundy font-medium tracking-[0.3em] uppercase text-xs">
              Visit Our Atelier
            </span>
            <div className="w-8 h-px bg-jharoka-burgundy" />
          </div>
          
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-jharoka-burgundy-900 leading-tight mb-6">
            Experience Heritage
            <span className="block text-jharoka-burgundy italic font-light">In Person</span>
          </h2>
          
          <p className="text-lg text-jharoka-text-secondary max-w-3xl mx-auto leading-relaxed">
            Step into our curated showroom where three generations of craftsmanship come alive. Touch the wood, feel the artistry, and discover pieces that will become family heirlooms.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Context & Information */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Why Visit */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-jharoka-burgundy/10">
              <h3 className="font-sans text-2xl font-bold text-jharoka-burgundy-900 mb-6">
                Why Visit Our Experience Center?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-jharoka-burgundy rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-jharoka-burgundy-900 mb-1">Touch & Feel Quality</h4>
                    <p className="text-jharoka-text-secondary text-sm">Experience the texture of heritage wood and the precision of our craftsmanship firsthand.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-jharoka-burgundy rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-jharoka-burgundy-900 mb-1">Personal Consultation</h4>
                    <p className="text-jharoka-text-secondary text-sm">Meet our master craftsmen and discuss custom designs tailored to your vision.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-jharoka-burgundy rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-jharoka-burgundy-900 mb-1">Complete Collections</h4>
                    <p className="text-jharoka-text-secondary text-sm">View our full range of heritage and contemporary pieces in beautifully curated room settings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-jharoka-burgundy/10">
              <h3 className="font-sans text-xl font-bold text-jharoka-burgundy-900 mb-6">Visit Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-jharoka-burgundy mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-jharoka-burgundy-900">Address</p>
                    <p className="text-jharoka-text-secondary text-sm">Plot No. 123, Road No. 36<br />Kavuri Hills, Hyderabad, Telangana 500033</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-jharoka-burgundy mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-jharoka-burgundy-900">Hours</p>
                    <p className="text-jharoka-text-secondary text-sm">Mon - Sat: 10:30 AM - 8:00 PM<br />Sunday: 11:00 AM - 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-jharoka-burgundy mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-jharoka-burgundy-900">Contact</p>
                    <p className="text-jharoka-text-secondary text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div className="bg-jharoka-burgundy/5 p-6 rounded-2xl border border-jharoka-burgundy/10">
              <h4 className="font-sans text-lg font-semibold text-jharoka-burgundy-900 mb-4">Getting There</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-jharoka-burgundy" />
                  <span className="text-jharoka-text-secondary">15 min from Gachibowli</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-jharoka-burgundy" />
                  <span className="text-jharoka-text-secondary">Metro: Jubilee Hills</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Integrated Map */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-jharoka-burgundy-900 to-jharoka-burgundy p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-sans text-xl font-bold mb-1">Jharoka Experience Center</h3>
                    <p className="text-white/80 text-sm">Kavuri Hills, Hyderabad</p>
                  </div>
                  <Button 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                    onClick={() => window.open('https://maps.google.com/?q=Kavuri+Hills+Hyderabad', '_blank')}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
              
              {/* Map Container */}
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3908!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sKavuri%20Hills%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647834567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Custom Map Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-jharoka-burgundy rounded-full animate-pulse" />
                    <div>
                      <p className="font-semibold text-jharoka-burgundy-900 text-sm">Jharoka Furniture</p>
                      <p className="text-jharoka-text-secondary text-xs">Heritage Experience Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visit CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            className="bg-jharoka-burgundy-900 hover:bg-jharoka-burgundy text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => {
              const message = "Hello, I would like to schedule a visit to your Experience Center. Could you please let me know the best time to visit?";
              window.open(`https://wa.me/917386037700?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Schedule Your Visit
          </Button>
          <p className="text-jharoka-text-secondary text-sm mt-4">
            Or call us at +91 98765 43210 to book your personal consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}