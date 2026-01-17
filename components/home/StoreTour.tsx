"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Play, Pause, MapPin, Store, Palette, ArrowRight, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StoreTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const features = [
    { icon: Store, label: "5,000 sq ft Experience Center" },
    { icon: Palette, label: "Curated Heirloom Gallery" },
    { icon: MapPin, label: "Heart of Kavuri Hills" },
  ];

  return (
    <Section className="bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B5A2B]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* MEDIA COLUMN (Mobile: First) */}
        <motion.div
          className="lg:col-span-7 order-1 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full rounded-t-full border-[12px] border-white shadow-2xl shadow-[#2C2420]/20 bg-[#E5E0D8] overflow-hidden group">
            {/* Inner Gold trim */}
            <div className="absolute inset-0 border border-[#8B5A2B]/20 rounded-t-full pointer-events-none z-10" />

            <video
              ref={videoRef}
              src="/productpics/1747208112809.mp4"
              className="w-full h-full object-cover rounded-t-[calc(100%-12px)]"
              playsInline
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
              suppressHydrationWarning
            />

            {/* Video Controls (Floating Outside Bottom Right) */}
            <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-3">
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-white text-[#2C2420] rounded-full flex items-center justify-center hover:bg-[#F5F2EB] transition-colors shadow-lg"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-1" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="w-12 h-12 bg-[#2C2420] text-white rounded-full flex items-center justify-center hover:bg-[#4A3D36] transition-colors shadow-lg"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8B5A2B]/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* CONTENT COLUMN (Mobile: Second) */}
        <motion.div
          className="lg:col-span-5 order-2 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <span className="text-[#8B5A2B] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              The Experience
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#2C2420] mb-6 leading-none font-bold uppercase tracking-tighter">
              Step Inside Our <br /><span className="text-[#8B5A2B]">Sanctuary</span>
            </h2>
            <p className="text-[#6B5A4E] text-lg leading-relaxed font-light">
              More than a furniture store, Jharoka is a living gallery where heritage breathes effortlessly. Walk through our curated zones, touch the textures of reclaimed teak, and sense the stories behind every piece.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white px-6 py-4 rounded-sm shadow-sm border border-[#8B5A2B]/5 mx-auto lg:mx-0 w-full max-w-sm lg:max-w-none">
                <div className="p-2 bg-[#FAF8F5] rounded-full text-[#8B5A2B]">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[#2C2420] font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link href="#contact" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#2C2420] hover:bg-[#4A3D36] text-white px-10 py-6 text-base tracking-widest uppercase rounded-sm shadow-sm font-medium"
              >
                Plan Your Visit
              </Button>
            </Link>
          </div>

        </motion.div>
      </div>
    </Section>
  );
}
