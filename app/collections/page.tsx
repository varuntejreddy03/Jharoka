import { Section } from "@/components/ui/Section";

export default function CollectionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-jharoka-cream">
      <Section>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-center text-jharoka-burgundy-900 mb-8">
          Our Collections
        </h1>
        <p className="text-center text-xl text-jharoka-text-secondary max-w-2xl mx-auto mb-16">
          Discover our range of handcrafted furniture, from restored antiques to modern bespoke pieces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for collections grid */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/5] bg-white rounded-lg border border-jharoka-burgundy/10 flex items-center justify-center">
              <span className="text-jharoka-burgundy/40">Collection {i}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
