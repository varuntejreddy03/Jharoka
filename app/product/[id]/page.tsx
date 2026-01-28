import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductClient from "@/components/product/ProductClient";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="bg-jharoka-cream min-h-screen">
        <Navbar />
        <main className="pt-32 text-center container-premium">
          <h1 className="font-[var(--font-bebas)] text-4xl text-jharoka-burgundy-900 mb-4 tracking-wide uppercase">Product not found</h1>
          <Link href="/#categories" className="text-jharoka-burgundy hover:underline inline-flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Collections
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.slug === product.category);

  return (
    <div className="bg-jharoka-cream min-h-screen">
      <Navbar />
      <ProductClient product={product} category={category} />
      <Footer />
    </div>
  );
}
