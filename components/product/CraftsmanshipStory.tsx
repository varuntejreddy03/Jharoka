export default function CraftsmanshipStory() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#2C2420] mb-6">Materials & Craftsmanship</h2>
            <p className="text-[#6B5D54] text-lg leading-relaxed mb-8">
              Each Heritage Platform Bed is crafted from sustainably sourced solid teak, selected for its exceptional grain and durability.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌳</span>
                </div>
                <div>
                  <h4 className="text-[#2C2420] font-medium mb-1">Premium Solid Teak</h4>
                  <p className="text-[#6B5D54]">Sustainably sourced, naturally resistant to moisture and insects</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✋</span>
                </div>
                <div>
                  <h4 className="text-[#2C2420] font-medium mb-1">Hand-Cut Joinery</h4>
                  <p className="text-[#6B5D54]">Traditional mortise-and-tenon, no screws or nails</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏱</span>
                </div>
                <div>
                  <h4 className="text-[#2C2420] font-medium mb-1">8-10 Weeks Crafting</h4>
                  <p className="text-[#6B5D54]">Each piece receives individual attention from master artisans</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h4 className="text-[#2C2420] font-medium mb-1">Natural Polish Finish</h4>
                  <p className="text-[#6B5D54]">Hand-rubbed to enhance the natural grain and warmth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F3EF] p-12 rounded-sm">
            <p className="text-[#B8956A] text-sm tracking-[0.2em] uppercase mb-4">Artisan Story</p>
            <h3 className="font-serif text-2xl text-[#2C2420] mb-4">Three Generations of Mastery</h3>
            <p className="text-[#6B5D54] leading-relaxed mb-6">
              Our lead craftsman, Ravi Kumar, learned these techniques from his grandfather. His family has been creating heirloom furniture for over 60 years in Rajasthan.
            </p>
            <div className="border-t border-[#E5DFD6] pt-6">
              <p className="text-sm text-[#9B8B7E]">Legacy Since</p>
              <p className="text-2xl font-serif text-[#2C2420]">1963</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
