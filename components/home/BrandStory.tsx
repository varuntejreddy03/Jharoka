"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Gem } from "lucide-react";

const stats = [
  { number: "35+", label: "Years of Legacy", icon: Clock },
  { number: "500+", label: "Masterpieces Created", icon: Gem },
  { number: "3", label: "Generations of Artisans", icon: Users },
  { number: "100%", label: "Handcrafted Excellence", icon: Award },
];

const values = [
  {
    title: "Heritage Craftsmanship",
    description: "Every piece is hand-carved by master artisans using techniques passed down through three generations."
  },
  {
    title: "Timeless Design",
    description: "We blend traditional Indian aesthetics with contemporary elegance for furniture that transcends trends."
  },
  {
    title: "Sustainable Luxury",
    description: "Responsibly sourced materials and eco-conscious practices define our commitment to the future."
  }
];

export default function BrandStory() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#FDFBF7] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A574]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B4513]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] w-16 bg-[#D4A574] mx-auto mb-8"
          />
          <span className="text-[#8B4513] text-[11px] font-semibold tracking-[0.4em] uppercase mb-6 block">
            Our Heritage
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C1810] mb-6 tracking-tight">
            Crafting Legacy Since 1987
          </h2>
          <p className="text-lg text-[#5C4A3D]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Three generations of master craftsmen dedicated to creating furniture 
            that bridges royal heritage with contemporary living.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/productpics/1746207231979.jpg"
                  alt="Heritage Craftsmanship at Jharoka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 sm:right-6"
              >
                <div className="bg-[#2C1810] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <p className="text-[#D4A574] text-xs font-semibold tracking-[0.2em] uppercase mb-1">Established</p>
                  <p className="text-3xl sm:text-4xl font-light">1987</p>
                  <p className="text-white/60 text-sm mt-1">Hyderabad, India</p>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#D4A574]/30 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#D4A574]/30 rounded-br-2xl hidden sm:block" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-sans text-3xl sm:text-4xl font-light text-[#2C1810] mb-6 leading-tight">
                Where Heritage Meets <span className="text-[#8B4513] italic">Artistry</span>
              </h3>
              <p className="text-[#5C4A3D]/70 text-lg leading-relaxed mb-6">
                At Jharoka, we don't just make furniture — we preserve a legacy. Each piece 
                is a testament to the skilled hands that shape it, the stories it will hold, 
                and the homes it will transform.
              </p>
              <p className="text-[#5C4A3D]/70 text-lg leading-relaxed">
                Our master artisans blend centuries-old techniques with contemporary 
                sensibilities, creating heirloom pieces that honor tradition while 
                embracing modern living.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-5 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-[#D4A574] rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans text-[#2C1810] font-medium mb-1">{value.title}</h4>
                    <p className="text-[#5C4A3D]/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <Link href="#contact">
                <button className="group bg-[#2C1810] text-white px-8 py-4 rounded-lg hover:bg-[#8B4513] transition-all duration-300 flex items-center gap-3 text-sm font-medium shadow-lg hover:shadow-xl">
                  Visit Our Showroom
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#2C1810] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D4A574]/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 lg:mt-28"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-[#D4A574] text-6xl font-serif mb-4">"</div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#2C1810] leading-relaxed italic mb-6">
              Where heritage meets home, and every grain tells a story of generations.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#D4A574]/40" />
              <cite className="text-[#8B4513] text-sm tracking-[0.2em] uppercase not-italic font-medium">
                The Jharoka Philosophy
              </cite>
              <div className="w-12 h-[1px] bg-[#D4A574]/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
