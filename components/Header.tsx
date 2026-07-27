'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#F4F1EA]/90 backdrop-blur-sm py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="text-lg tracking-[0.3em] font-light text-[#121212]">
          SKN PARIS
        </Link>

        <div className="flex items-center gap-10">
          <Link href="/shop" className="text-xs tracking-[0.2em] uppercase text-[#121212]/70 hover:text-[#121212] transition-colors">
            Shop
          </Link>
          <Link href="/method" className="text-xs tracking-[0.2em] uppercase text-[#121212]/70 hover:text-[#121212] transition-colors">
            Méthode
          </Link>
          <Link href="/journal" className="text-xs tracking-[0.2em] uppercase text-[#121212]/70 hover:text-[#121212] transition-colors">
            Journal
          </Link>

          <Link
            href="/shop"
            className="px-5 py-2 bg-[#A8D5BA] text-[#121212] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#96C4A8] transition-colors"
          >
            FIND YOUR SKN →
          </Link>

          {/* Chrome cart button */}
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-[#121212]"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #f5f5f5, #c0c0c0 50%, #a0a0a0 80%, #808080)',
              boxShadow: 'inset 0 -1px 3px rgba(0,0,0,0.2), 0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            0
          </button>
        </div>
      </nav>
    </header>
  );
}
