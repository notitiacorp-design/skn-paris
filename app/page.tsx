'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroNarrative from '@/components/HeroNarrative';
import MethodSection from '@/components/MethodSection';
import Marquee from '@/components/Marquee';
import ProductCard from '@/components/ProductCard';
import CommunityGrid from '@/components/CommunityGrid';
import Footer from '@/components/Footer';

const products = [
  { num: '01', name: 'RESET', type: 'Cleanser', desc: 'Nettoie sans décaper. Une mousse légère qui respecte le pH naturel de votre peau.', price: '49 €', accent: '#B84A3C' },
  { num: '02', name: 'BARRIER', type: 'Serum', desc: 'Le cœur de la routine. Ceramides, niacinamide et panthenol pour une barrière cutanée renforcée.', price: '89 €', accent: '#C49A6C' },
  { num: '03', name: 'SHIELD', type: 'SPF 50', desc: 'Protection minérale quotidienne. Aucun filtre chimique. Texture invisible sur toutes les carnations.', price: '59 €', accent: '#A8D5BA' },
];

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <HeroNarrative />

      {/* Product Grid */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <p className="text-xs tracking-[0.3em] text-[#B8B6B0] uppercase mb-4">The System</p>
        <h2 className="text-5xl lg:text-6xl font-serif text-[#121212] mb-16">
          THREE PRODUCTS.<br />ONE ROUTINE.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.num} product={p} />
          ))}
        </div>
      </section>

      <Marquee />
      <MethodSection />
      <CommunityGrid />
      <Footer />
    </main>
  );
}
