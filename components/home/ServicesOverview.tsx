"use client";

import { motion } from "framer-motion";
import { Home, Coffee, Building, ArrowUpRight, Sparkles, Shield, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "residences",
    title: "Luxury Residences",
    subtitle: "Transform Your Living Space",
    description: "Bespoke furniture solutions for discerning homeowners. We craft pieces that become the soul of your residence, blending heritage craftsmanship with modern comfort.",
    icon: Home,
    image: "/productpics/bigsofa1.png",
    features: ["Custom Design", "Space Planning", "Heritage Pieces"],
    accent: "from-[#2C1810] to-[#4A3228]"
  },
  {
    id: "cafes",
    title: "Boutique Cafés",
    subtitle: "Create Memorable Experiences",
    description: "Distinctive furniture that defines your café's character. From intimate seating to statement pieces, we help create spaces where every visit becomes a memory.",
    icon: Coffee,
    image: "/productpics/smallsofa1.png",
    features: ["Commercial Grade", "Unique Aesthetics", "Durable Materials"],
    accent: "from-[#8B4513] to-[#A0522D]"
  },
  {
    id: "hotels",
    title: "Heritage Hotels",
    subtitle: "Timeless Hospitality Design",
    description: "Grand furniture collections for heritage properties. We understand the delicate balance between preserving history and providing modern luxury.",
    icon: Building,
    image: "/productpics/bed1.png",
    features: ["Bulk Orders", "Period Accurate", "Premium Quality"],
    accent: "from-[#4A2C2A] to-[#6B4442]"
  }
];

const stats = [
  { icon: Sparkles, value: "500+", label: "Projects Delivered" },
  { icon: Shield, value: "25+", label: "Years Experience" },
  { icon: Clock, value: "100%", label: "Client Satisfaction" }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#8B4513]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D4A574]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Our Services</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] mb-6 leading-tight">
            Crafting <span className="text-[#8B4513] italic font-light">Legacies</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5D4E47] max-w-2xl mx-auto leading-relaxed">
            Our integrated approach unites three distinct disciplines to create cohesive, living environments that stand the test of time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-[#E8E0D5]">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-90 z-10`} />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 border border-white/30">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 font-medium">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base font-light">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-[#5D4E47] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#F8F5EF] text-[#8B4513] text-xs sm:text-sm font-medium rounded-full border border-[#E8DCD0]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#2C1810] to-[#4A3228] rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-14"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 font-medium">
                Why Choose Us?
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Three generations of master craftsmen creating furniture that becomes family heirlooms.
              </p>
            </div>
            
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-serif text-white font-semibold">
                    {stat.value}
                  </span>
                </div>
                <p className="text-white/60 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
