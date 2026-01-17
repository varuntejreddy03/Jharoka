import Image from 'next/image';

export default function LifestyleSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2C2420] mb-4">Imagine This in Your Home</h2>
          <p className="text-[#6B5D54] text-lg max-w-2xl mx-auto">
            More than furniture. A statement of refined taste and appreciation for timeless craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] bg-[#F5F3EF] rounded-sm overflow-hidden">
            <Image src="/productpics/bed1.png" alt="Lifestyle" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] bg-[#F5F3EF] rounded-sm overflow-hidden">
            <Image src="/productpics/bed2.png" alt="Lifestyle" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6B5D54] italic text-lg max-w-3xl mx-auto leading-relaxed">
            "Every morning begins with the quiet confidence of waking in a space that reflects your values—authenticity, quality, and heritage."
          </p>
        </div>
      </div>
    </section>
  );
}
