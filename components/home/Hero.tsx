"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative min-h-screen w-full flex items-center bg-jharoka-cream overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-jharoka-cream via-jharoka-cream to-jharoka-cream-dim" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-jharoka-burgundy/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-jharoka-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-premium relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-4 sm:mb-6">
                Heritage Furniture
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-jharoka-burgundy-900 leading-[1.1] mb-4 sm:mb-6">
                <span className="block">Crafting</span>
                <span className="block text-jharoka-burgundy italic">Timeless</span>
                <span className="block">Elegance</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-jharoka-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
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
                <button className="w-full sm:w-auto bg-jharoka-burgundy-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-jharoka-burgundy transition-colors duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base font-medium shadow-lg hover:shadow-xl">
                  Explore Collections
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="group flex items-center gap-2 px-4 py-2">
                <span className="text-jharoka-burgundy-900 text-sm sm:text-base font-medium border-b border-transparent group-hover:border-jharoka-burgundy-900 transition-all">
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
                <div className="text-2xl sm:text-3xl font-serif text-jharoka-burgundy-900">500+</div>
                <div className="text-xs sm:text-sm text-jharoka-text-secondary">Pieces Crafted</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-jharoka-burgundy/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif text-jharoka-burgundy-900">25+</div>
                <div className="text-xs sm:text-sm text-jharoka-text-secondary">Years Legacy</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-jharoka-burgundy/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif text-jharoka-burgundy-900">100%</div>
                <div className="text-xs sm:text-sm text-jharoka-text-secondary">Handcrafted</div>
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
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-2xl bg-jharoka-cream-dim">
                <Image
                  src="/productpics/bigsofa1.png"
                  alt="Heritage Furniture"
                  fill
                  className={`object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
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
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoadedData={() => setVideoLoaded(true)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-t-full border border-white/30 pointer-events-none" />
              </div>

              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm text-jharoka-burgundy-900 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                )}
              </button>

              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-xl bg-white">
                <Image
                  src="/productpics/bed1.png"
                  alt="Featured Bed"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-xl bg-white">
                <Image
                  src="/productpics/2table1.png"
                  alt="Featured Table"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
