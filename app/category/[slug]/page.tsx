import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import categories from "@/data/categories.json";
import products from "@/data/products.json";
import CategoryClient from "@/components/category/CategoryClient";

const folderMap: { [key: string]: string } = {
  "sofas": "Sofas",
  "chairs": "Chairs",
  "beds": "Beds",
  "dining-tables": "Dining Tables",
  "wardrobes": "Wardrobes",
  "office-furniture": "Office Furniture",
};

function formatImageName(filename: string): string {
  return filename
    .replace(/\.webp$/i, "")
    .replace(/\.png$/i, "")
    .replace(/\.jpg$/i, "")
    .replace(/\.jpeg$/i, "")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getOutputImages(slug: string): { src: string; name: string }[] {
  const folderName = folderMap[slug];
  if (!folderName) return [];
  
  const outputPath = path.join(process.cwd(), "public", "output", folderName);
  
  try {
    const files = fs.readdirSync(outputPath);
    return files
      .filter(file => /\.(webp|png|jpg|jpeg)$/i.test(file))
      .map(file => ({
        src: `/output/${encodeURIComponent(folderName)}/${encodeURIComponent(file)}`,
        name: formatImageName(file),
      }));
  } catch (error) {
    return [];
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);
  const outputImages = getOutputImages(slug);

  if (!category) {
    return (
      <div className="bg-jharoka-cream min-h-screen">
        <Navbar />
        <main className="pt-32 text-center container-premium">
          <h1 className="font-serif text-4xl text-jharoka-burgundy-900 mb-4">Category not found</h1>
          <Link href="/collections" className="text-jharoka-burgundy hover:underline inline-flex items-center gap-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Collections
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const allItems = [
    ...categoryProducts.map(p => ({ src: p.mainImage, name: p.name, type: 'product' as const })),
    ...outputImages.map(img => ({ ...img, type: 'output' as const })),
  ];

  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      
      <main className="pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="container-premium">
          <CategoryClient 
            category={category}
            items={allItems}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
