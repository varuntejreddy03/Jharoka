export default function DimensionsGuide() {
  return (
    <section className="max-w-[1600px] mx-auto px-8 py-20">
      <h2 className="font-sans text-3xl text-[#2C2420] mb-12 text-center">Size & Fit Guide</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-sm border border-[#E5DFD6]">
          <h3 className="text-[#2C2420] font-medium mb-6 text-lg">Dimensions</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-[#F5F3EF] pb-3">
              <span className="text-[#9B8B7E]">King Size</span>
              <span className="text-[#2C2420] font-medium">84" × 76" × 42"</span>
            </div>
            <div className="flex justify-between border-b border-[#F5F3EF] pb-3">
              <span className="text-[#9B8B7E]">Queen Size</span>
              <span className="text-[#2C2420] font-medium">84" × 66" × 42"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9B8B7E]">Headboard Height</span>
              <span className="text-[#2C2420] font-medium">42"</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-sm border border-[#E5DFD6]">
          <h3 className="text-[#2C2420] font-medium mb-6 text-lg">Ideal Room Size</h3>
          <div className="space-y-4">
            <div>
              <p className="text-[#9B8B7E] mb-2">Minimum Room</p>
              <p className="text-[#2C2420] font-medium text-2xl">12' × 14'</p>
            </div>
            <div className="pt-4 border-t border-[#F5F3EF]">
              <p className="text-[#9B8B7E] mb-2">Recommended Room</p>
              <p className="text-[#2C2420] font-medium text-2xl">14' × 16'</p>
            </div>
            <p className="text-sm text-[#6B5D54] pt-4">Allows comfortable movement and additional furniture placement</p>
          </div>
        </div>

        <div className="bg-[#F5F3EF] p-8 rounded-sm">
          <h3 className="text-[#2C2420] font-medium mb-6 text-lg">Perfect Pairing</h3>
          <p className="text-[#6B5D54] mb-6">This bed pairs beautifully with:</p>
          <ul className="space-y-3 text-[#6B5D54]">
            <li className="flex items-start gap-2">
              <span className="text-[#B8956A]">•</span>
              <span>Matching nightstands (24" height)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B8956A]">•</span>
              <span>Low-profile dresser</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B8956A]">•</span>
              <span>Statement chandelier or pendant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B8956A]">•</span>
              <span>Handwoven area rug (9' × 12')</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
