"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-jharoka-cream">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-jharoka-cream to-jharoka-burgundy/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-jharoka-burgundy-900 mb-6">
              Visit Our
              <span className="block text-jharoka-burgundy italic">Experience Center</span>
            </h1>
            <p className="text-xl text-jharoka-text-secondary max-w-2xl mx-auto leading-relaxed">
              Step into our world of heritage craftsmanship. Experience the beauty of Indian artistry in our curated showroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-jharoka-burgundy/10">
                <h2 className="font-serif text-2xl font-bold text-jharoka-burgundy-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-jharoka-burgundy/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-jharoka-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-jharoka-burgundy-900 mb-1">Address</h3>
                      <p className="text-jharoka-text-secondary text-sm leading-relaxed">
                        Plot No. 123, Road No. 36<br />
                        Jubilee Hills - Kavuri Hills Rd<br />
                        Hyderabad, Telangana 500033
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-jharoka-burgundy/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-jharoka-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-jharoka-burgundy-900 mb-1">Phone</h3>
                      <p className="text-jharoka-text-secondary">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-jharoka-burgundy/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-jharoka-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-jharoka-burgundy-900 mb-1">Email</h3>
                      <p className="text-jharoka-text-secondary">hello@jharoka.store</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-jharoka-burgundy/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-jharoka-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-jharoka-burgundy-900 mb-1">Hours</h3>
                      <p className="text-jharoka-text-secondary text-sm">
                        Mon - Sat: 10:30 AM - 8:00 PM<br />
                        Sun: 11:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-jharoka-burgundy/10"
              >
                <h3 className="font-serif text-xl font-bold text-jharoka-burgundy-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 bg-jharoka-cream/30 border border-jharoka-burgundy/20 rounded-lg focus:outline-none focus:border-jharoka-burgundy focus:ring-2 focus:ring-jharoka-burgundy/20 transition-all" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 bg-jharoka-cream/30 border border-jharoka-burgundy/20 rounded-lg focus:outline-none focus:border-jharoka-burgundy focus:ring-2 focus:ring-jharoka-burgundy/20 transition-all" 
                  />
                  <textarea 
                    placeholder="Tell us about what you're looking for..." 
                    rows={4} 
                    className="w-full p-4 bg-jharoka-cream/30 border border-jharoka-burgundy/20 rounded-lg focus:outline-none focus:border-jharoka-burgundy focus:ring-2 focus:ring-jharoka-burgundy/20 transition-all resize-none"
                  ></textarea>
                  <Button className="w-full bg-jharoka-burgundy hover:bg-jharoka-burgundy-900 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </motion.div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-jharoka-burgundy/10 h-full min-h-[600px]">
                <div className="p-6 border-b border-jharoka-burgundy/10">
                  <h3 className="font-serif text-xl font-bold text-jharoka-burgundy-900">Find Us Here</h3>
                  <p className="text-jharoka-text-secondary mt-1">Kavuri Hills, Hyderabad</p>
                </div>
                
                {/* Google Maps Embed */}
                <div className="relative h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3908!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sKavuri%20Hills%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647834567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-jharoka-burgundy rounded-full"></div>
                      <span className="text-sm font-medium text-jharoka-burgundy-900">Jharoka Experience Center</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-jharoka-burgundy-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-jharoka-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Visit our experience center to see our collections in person and speak with our design consultants.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-jharoka-burgundy-900 px-8 py-3 rounded-lg font-medium">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}