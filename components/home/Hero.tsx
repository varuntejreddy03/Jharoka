"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-gradient-to-b from-[#FDFBF7] to-[#F5F0E8] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#8B4513]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A574]/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#CD853F]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-premium relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[#8B4513] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-5">
                Since 1999
              </span>
              <h1 className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#2C1810] leading-[1.05] mb-6">
                Crafting
                <span className="block text-[#8B4513] italic font-normal my-1">Legacies</span>
                <span className="block text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#5D4E47]">in Wood & Time</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#5D4E47] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Where royal heritage meets modern living. Each piece is a masterwork of traditional craftsmanship, designed to be treasured for generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/collections" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#2C1810] text-white px-8 py-4 rounded-lg hover:bg-[#8B4513] transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Explore Collections
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="group flex items-center gap-2 px-6 py-3">
                <span className="text-[#2C1810] text-sm sm:text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B4513] group-hover:after:w-full after:transition-all">
                  Visit Showroom
                </span>
                <ArrowRight className="w-4 h-4 text-[#8B4513] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 pt-6 border-t border-[#2C1810]/10"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C1810]">500<span className="text-[#8B4513]">+</span></div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium mt-1">Pieces Crafted</div>
              </div>
              <div className="w-px h-14 bg-[#2C1810]/10" />
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C1810]">25<span className="text-[#8B4513]">+</span></div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium mt-1">Years Legacy</div>
              </div>
              <div className="w-px h-14 bg-[#2C1810]/10" />
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C1810]">100<span className="text-[#8B4513]">%</span></div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium mt-1">Handcrafted</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-[0_25px_80px_-15px_rgba(44,24,16,0.25)] bg-[#E8DCD0]">
                <Image
                  src="/productpics/bigsofa1.png"
                  alt="Heritage Furniture Showcase"
                  fill
                  className={`object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
                />
                
                <video
                  ref={videoRef}
                  src="/productpics/1746211064698.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoadedData={() => setVideoLoaded(true)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/30 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-3 sm:inset-4 lg:inset-5 rounded-t-full border border-white/50 pointer-events-none" />
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                  <span className="text-[#2C1810] text-xs sm:text-sm font-medium tracking-wide">Handcrafted Excellence</span>
                </div>
              </div>

              <div className="absolute bottom-20 sm:bottom-24 right-2 sm:right-4 flex flex-col gap-2.5 z-10">
                <button
                  onClick={togglePlayPause}
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#2C1810] rounded-full flex items-center justify-center hover:bg-[#FDFBF7] transition-all shadow-lg hover:scale-105"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-[#2C1810] text-white rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-all shadow-lg hover:scale-105"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-[#2C1810] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl">
                <div className="text-lg sm:text-xl font-serif font-semibold">Est. 1999</div>
                <div className="text-[10px] sm:text-xs text-white/70 tracking-wide">Hyderabad, India</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
