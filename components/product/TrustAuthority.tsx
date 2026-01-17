export default function TrustAuthority() {
  return (
    <section className="max-w-[1600px] mx-auto px-8 py-20 border-t border-[#E5DFD6]">
      <h2 className="font-serif text-3xl text-[#2C2420] mb-12 text-center">Trusted by Connoisseurs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#F5F3EF] p-8 rounded-sm">
          <p className="text-[#6B5D54] leading-relaxed mb-4">
            "The craftsmanship is extraordinary. This bed has become the centerpiece of our master suite. Worth every rupee."
          </p>
          <div className="border-t border-[#E5DFD6] pt-4">
            <p className="text-[#2C2420] font-medium">Priya Malhotra</p>
            <p className="text-sm text-[#9B8B7E]">Architect, Delhi</p>
          </div>
        </div>

        <div className="bg-[#F5F3EF] p-8 rounded-sm">
          <p className="text-[#6B5D54] leading-relaxed mb-4">
            "We specified this for three luxury villas. Clients are consistently impressed by the quality and heritage aesthetic."
          </p>
          <div className="border-t border-[#E5DFD6] pt-4">
            <p className="text-[#2C2420] font-medium">Arjun Desai</p>
            <p className="text-sm text-[#9B8B7E]">Interior Designer, Mumbai</p>
          </div>
        </div>

        <div className="bg-[#F5F3EF] p-8 rounded-sm">
          <p className="text-[#6B5D54] leading-relaxed mb-4">
            "An investment piece that will be passed down. The joinery is museum-quality. Truly heirloom furniture."
          </p>
          <div className="border-t border-[#E5DFD6] pt-4">
            <p className="text-[#2C2420] font-medium">Kavita Sharma</p>
            <p className="text-sm text-[#9B8B7E]">Collector, Bangalore</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-3xl font-serif text-[#2C2420] mb-2">60+</p>
          <p className="text-sm text-[#9B8B7E] uppercase tracking-wider">Years Legacy</p>
        </div>
        <div>
          <p className="text-3xl font-serif text-[#2C2420] mb-2">500+</p>
          <p className="text-sm text-[#9B8B7E] uppercase tracking-wider">Premium Homes</p>
        </div>
        <div>
          <p className="text-3xl font-serif text-[#2C2420] mb-2">100%</p>
          <p className="text-sm text-[#9B8B7E] uppercase tracking-wider">Handcrafted</p>
        </div>
        <div>
          <p className="text-3xl font-serif text-[#2C2420] mb-2">Lifetime</p>
          <p className="text-sm text-[#9B8B7E] uppercase tracking-wider">Durability</p>
        </div>
      </div>
    </section>
  );
}
