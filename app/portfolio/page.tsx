import { Section } from "@/components/ui/Section";

export default function PortfolioPage() {
  return (
    <main className="pt-24 min-h-screen bg-jharoka-cream">
      <Section>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-center text-jharoka-burgundy-900 mb-8">
          Our Work
        </h1>
        <p className="text-center text-xl text-jharoka-text-secondary max-w-2xl mx-auto mb-16">
          A showcase of homes transformed by Jharoka Furniture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-jharoka-burgundy/5 rounded-lg flex items-center justify-center">
            <span className="text-jharoka-burgundy/30">Project 1</span>
          </div>
          <div className="aspect-video bg-jharoka-burgundy/5 rounded-lg flex items-center justify-center">
            <span className="text-jharoka-burgundy/30">Project 2</span>
          </div>
        </div>
      </Section>
    </main>
  );
}
