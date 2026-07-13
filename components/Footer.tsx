import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#F4F1EA] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <p className="text-lg tracking-[0.3em] font-light mb-6">SKN PARIS</p>
            <p className="text-sm text-[#F4F1EA]/50 leading-relaxed max-w-xs">
              Primal science for modern skin.<br />
              Paris, France.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#F4F1EA]/30 mb-6">Shop</p>
            <div className="space-y-3">
              {['The System', '01 RESET', '02 BARRIER', '03 SHIELD'].map((l) => (
                <Link key={l} href="/shop" className="block text-sm text-[#F4F1EA]/60 hover:text-[#C7FF2E] transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#F4F1EA]/30 mb-6">Learn</p>
            <div className="space-y-3">
              {['Our Method', 'Journal', 'Ingredients', 'FAQ'].map((l) => (
                <Link key={l} href="#" className="block text-sm text-[#F4F1EA]/60 hover:text-[#C7FF2E] transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#F4F1EA]/30 mb-6">Newsletter</p>
            <p className="text-sm text-[#F4F1EA]/50 mb-4">No noise. Just science.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-[#F4F1EA]/20 px-4 py-2 text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 outline-none focus:border-[#C7FF2E] transition-colors"
              />
              <button className="px-4 py-2 bg-[#C7FF2E] text-[#121212] text-xs tracking-[0.1em] uppercase font-medium hover:bg-[#b3e626] transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F4F1EA]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#F4F1EA]/30">© 2026 SKN Paris. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-[#F4F1EA]/30">
            <Link href="#" className="hover:text-[#C7FF2E] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#C7FF2E] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#C7FF2E] transition-colors">Shipping</Link>
            <Link href="#" className="hover:text-[#C7FF2E] transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
