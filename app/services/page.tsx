import { Section } from "@/components/ui/Section";
import { PenTool, Hammer, Sofa } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen bg-jharoka-cream">
      <Section>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-center text-jharoka-burgundy-900 mb-8">
          Services
        </h1>
        <p className="text-center text-xl text-jharoka-text-secondary max-w-2xl mx-auto mb-16">
          Beyond selling furniture, we craft experiences.
        </p>

        <div className="grid gap-12 max-w-4xl mx-auto">
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-jharoka-burgundy/10 rounded-full text-jharoka-burgundy">
              <Sofa size={32} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-jharoka-burgundy-900 mb-2">Bespoke Furniture Design</h3>
              <p className="text-jharoka-text-secondary leading-relaxed">
                We create custom furniture pieces tailored to your specific dimensions, style, and comfort requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-jharoka-burgundy/10 rounded-full text-jharoka-burgundy">
              <Hammer size={32} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-jharoka-burgundy-900 mb-2">Antique Restoration</h3>
              <p className="text-jharoka-text-secondary leading-relaxed">
                Our master craftsmen meticulously restore heritage pieces to their former glory using traditional techniques.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-jharoka-burgundy/10 rounded-full text-jharoka-burgundy">
              <PenTool size={32} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-jharoka-burgundy-900 mb-2">Interior Styling</h3>
              <p className="text-jharoka-text-secondary leading-relaxed">
                Expert advice on curating and styling your space with our furniture to achieve a cohesive look.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
