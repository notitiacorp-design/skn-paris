'use client';

interface Product {
  name: string;
  num: string;
  type: string;
  desc: string;
  price: string;
  accent: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer relative overflow-hidden border border-[#121212]/5 hover:border-[#121212]/10 transition-all duration-500">
      {/* Product image placeholder */}
      <div className="h-72 bg-gradient-to-b from-[#f0ece2] to-[#d8d4c8] flex items-center justify-center relative overflow-hidden glass-ribbed">
        <div className="w-20 h-52 bg-white/40 rounded-full blur-sm group-hover:scale-110 transition-transform duration-700" />
        {/* Abstract shape on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-48 h-48 rounded-full absolute -bottom-12 -right-12"
            style={{ background: `radial-gradient(circle, ${product.accent}20, transparent)` }} />
        </div>
      </div>

      {/* Info */}
      <div className="p-8 bg-[#F4F1EA] group-hover:bg-[#121212] transition-colors duration-500">
        <p className="text-xs tracking-[0.3em] text-[#A8D5BA] mb-2">{product.num}</p>
        <h3 className="text-xl font-medium mb-1 group-hover:text-[#F4F1EA] transition-colors">{product.name}</h3>
        <p className="text-sm text-[#121212]/40 mb-3 group-hover:text-[#F4F1EA]/40">{product.type}</p>
        <p className="text-sm text-[#121212]/70 mb-6 group-hover:text-[#F4F1EA]/70 leading-relaxed">{product.desc}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium group-hover:text-[#A8D5BA] transition-colors">{product.price}</span>
          <button className="text-xs tracking-[0.15em] uppercase py-2 px-4 border border-[#121212]/10 group-hover:border-[#A8D5BA] group-hover:text-[#A8D5BA] transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
            ADD TO BAG →
          </button>
        </div>
      </div>
    </div>
  );
}
