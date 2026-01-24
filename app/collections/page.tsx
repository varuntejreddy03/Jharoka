import Image from "next/image";
import fs from "fs";
import path from "path";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CollectionsClient from "@/components/collections/CollectionsClient";

const collections = [
  { name: "Sofas", folder: "Sofas" },
  { name: "Chairs", folder: "Chairs" },
  { name: "Beds", folder: "Beds" },
  { name: "Dining Tables", folder: "Dining Tables" },
  { name: "Wardrobes", folder: "Wardrobes" },
  { name: "Office Furniture", folder: "Office Furniture" },
];

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

function getImagesFromFolder(folder: string): { src: string; name: string }[] {
  const outputPath = path.join(process.cwd(), "public", "output", folder);
  
  try {
    const files = fs.readdirSync(outputPath);
    return files
      .filter(file => /\.(webp|png|jpg|jpeg)$/i.test(file))
      .map(file => ({
        src: `/output/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        name: formatImageName(file),
      }));
  } catch (error) {
    console.error(`Error reading folder ${folder}:`, error);
    return [];
  }
}

export default function CollectionsPage() {
  const collectionsData = collections.map(collection => ({
    ...collection,
    images: getImagesFromFolder(collection.folder),
  }));

  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      
      <main className="pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="container-premium">
          <div className="text-center mb-16 sm:mb-24">
            <span className="inline-block text-jharoka-burgundy text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4 sm:mb-6">
              Curated Excellence
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-jharoka-burgundy-900 mb-6 sm:mb-8 leading-[1.1]">
              Our Collections
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-jharoka-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
              Discover furniture that tells a story. Each piece is a masterwork of traditional craftsmanship.
            </p>
          </div>

          <CollectionsClient collections={collectionsData} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
