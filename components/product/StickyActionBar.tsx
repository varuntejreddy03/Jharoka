'use client';
import { useEffect, useState } from 'react';

export default function StickyActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5DFD6] py-4 px-8 z-50 shadow-lg">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div>
          <p className="text-sm text-[#9B8B7E]">Heritage Platform Bed</p>
          <p className="text-xl font-serif text-[#2C2420]">₹1,25,000</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#2C2420] text-[#FAF8F5] px-8 py-3 rounded-sm hover:bg-[#3D342E] transition text-sm tracking-wider uppercase">
            Enquire Now
          </button>
          <button className="border border-[#2C2420] text-[#2C2420] px-6 py-3 rounded-sm hover:bg-[#2C2420] hover:text-[#FAF8F5] transition text-sm">
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}
