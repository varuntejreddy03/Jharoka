"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
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
    <section className="relative min-h-screen w-full flex items-center bg-[#FDFBF7] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#FAF7F2] to-[#F5F0E8]" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#8B4513]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#D4A574]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-premium relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[#8B4513] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4 sm:mb-6">
                Heritage Furniture
              </span>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#2C1810] leading-[1.1] mb-4 sm:mb-6">
                <span className="block">Crafting</span>
                <span className="block text-[#8B4513] italic font-light">Timeless</span>
                <span className="block">Elegance</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#5D4E47] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              Discover handcrafted furniture that bridges royal tradition with contemporary living. Each piece tells a story of artisanal excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/collections" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#2C1810] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-[#8B4513] transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base font-medium shadow-lg hover:shadow-xl">
                  Explore Collections
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="group flex items-center gap-2 px-4 py-2">
                <span className="text-[#2C1810] text-sm sm:text-base font-medium border-b-2 border-transparent hover:border-[#8B4513] transition-all">
                  Visit Showroom
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-sans font-semibold text-[#2C1810]">500+</div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium">Pieces Crafted</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-[#8B4513]/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-sans font-semibold text-[#2C1810]">25+</div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium">Years Legacy</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-[#8B4513]/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-sans font-semibold text-[#2C1810]">100%</div>
                <div className="text-xs sm:text-sm text-[#7D6E66] font-medium">Handcrafted</div>
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
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-2xl bg-[#E8E0D5]">
                <video
                  ref={videoRef}
                  src="/productpics/1746211064698.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-t-full border border-white/40 pointer-events-none" />
              </div>

              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-2 z-10">
                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm text-[#2C1810] rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
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
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C1810]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-[#2C1810] transition-colors shadow-lg"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
