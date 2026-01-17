"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
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

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#FBF9F6] overflow-hidden">

      {/* Background & Grain */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#FBF9F6]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5A2B]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5A2B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-16 md:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Brand Narrative */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">


            {/* Headline */}
            {/* Headline */}
            <h1 className="flex flex-col items-center lg:items-start text-[#2C2420]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-serif text-sm md:text-xl tracking-[0.3em] font-medium uppercase mb-2"
              >
                Merging
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-[var(--font-display)] italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#8B5A2B] font-medium leading-[0.85] tracking-tight mb-4 text-center lg:text-left"
              >
                Timeless Heritage
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="font-serif text-sm md:text-xl tracking-[0.3em] font-medium uppercase"
              >
                with Modern Luxury
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="text-lg md:text-xl text-[#6B5A4E] leading-loose max-w-2xl mx-auto lg:mx-0 font-light"
            >
              A Jharoka-based furniture and antiques company specializing in curating spaces that bridge the gap between royal tradition and contemporary living.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-2 lg:pt-4"
            >
              <Link href="#collections" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#2C2420] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-sm hover:bg-[#463932] transition-colors duration-300 flex items-center justify-center gap-3 group text-sm lg:text-base tracking-widest uppercase font-medium shadow-sm">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="#contact" className="group flex items-center gap-2 px-4 py-2">
                <span className="text-[#2C2420] text-sm tracking-widest uppercase font-medium border-b border-transparent group-hover:border-[#2C2420] transition-all">
                  Visit Studio
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Jharoka Window Effect */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-[80%] sm:w-full max-w-sm lg:max-w-md aspect-[3/4.5] -mt-12 lg:-mt-20"
            >
              {/* Clean Arch Frame */}
              <div className="relative w-full h-full rounded-t-full border-[6px] lg:border-[8px] border-white shadow-2xl overflow-hidden bg-[#E5E0D8]">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    src="/productpics/1746211064698.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onError={handleVideoError}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5E0D8] text-[#8B5A2B]">
                    <Volume2 className="w-12 h-12 mb-4 opacity-50" />
                    <span className="text-sm uppercase tracking-widest">Preview</span>
                  </div>
                )}
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Inner Border Ring (Gold accent) */}
                <div className="absolute inset-3 lg:inset-4 rounded-t-full border border-white/30 pointer-events-none" />
              </div>

              {/* Video Controls (Floating Outside Bottom Right) */}
              <div className="absolute bottom-6 -right-2 lg:bottom-8 lg:-right-8 z-30 flex flex-col gap-3">
                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-[#2C2420] rounded-full flex items-center justify-center hover:bg-[#F5F2EB] transition-colors shadow-lg"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#2C2420] rounded-sm" />
                  ) : (
                    <div className="w-0 h-0 border-t-[5px] lg:border-t-[6px] border-t-transparent border-l-[8px] lg:border-l-[10px] border-l-[#2C2420] border-b-[5px] lg:border-b-[6px] border-b-transparent ml-1" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2C2420] text-white rounded-full flex items-center justify-center hover:bg-[#4A3D36] transition-colors shadow-lg"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 lg:w-5 lg:h-5" /> : <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />}
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}