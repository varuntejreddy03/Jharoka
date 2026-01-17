import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-jharoka-cream">
      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative aspect-square rounded-lg overflow-hidden border border-jharoka-burgundy/10">
            <div className="absolute inset-0 bg-jharoka-burgundy/5 flex items-center justify-center">
              <span className="text-jharoka-burgundy/20 italic font-serif text-xl">Image Placeholder</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-serif text-5xl font-bold text-jharoka-burgundy-900 mb-6">
              The Jharoka Story
            </h1>
            <p className="text-lg text-jharoka-text-secondary leading-relaxed mb-6 font-light">
              Founded in Kavuri Hills, Hyderabad, Jharoka began with a simple passion: to preserve the soul of Indian craftsmanship while adapting it for modern lifestyles.
            </p>
            <p className="text-lg text-jharoka-text-secondary leading-relaxed mb-6 font-light">
              We specialize in sourcing rare antiques, restoring them with care, and creating bespoke furniture that becomes the centerpiece of your home.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
