'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Image from 'next/image';

export default function HeroNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const productImgRef = useRef<HTMLDivElement>(null);
  const barrierWordRef = useRef<HTMLDivElement>(null);
  const labTextsRef = useRef<HTMLDivElement>(null);
  const ingCeramidesRef = useRef<HTMLDivElement>(null);
  const ingNiacinamideRef = useRef<HTMLDivElement>(null);
  const ingPanthenolRef = useRef<HTMLDivElement>(null);
  const proofCopyRef = useRef<HTMLDivElement>(null);
  const routineProductsRef = useRef<HTMLDivElement>(null);
  const chromeSphereRef = useRef<HTMLDivElement>(null);
  const gelRef = useRef<HTMLDivElement>(null);
  const rockRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=5000',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl
        // Scene 1 → 2 transition
        .to(heroCopyRef.current, { yPercent: -120, opacity: 0, duration: 0.2 }, 0.15)
        .to(ctaRef.current, { opacity: 0, duration: 0.1 }, 0.15)
        .to(chromeSphereRef.current, { x: -200, y: -40, scale: 1.3, duration: 0.25 }, 0.18)
        .to(rockRef.current, { y: 300, opacity: 0, duration: 0.2 }, 0.18)
        .to(gelRef.current, { x: 150, y: -100, scale: 1.4, opacity: 0.5, duration: 0.3 }, 0.20)
        .to(productImgRef.current, { rotateX: 18, rotateY: -10, scale: 1.22, x: -60, duration: 0.3 }, 0.20)
        .to(bgRef.current, { backgroundColor: '#121212', duration: 0.5 }, 0.28)
        // Dark scene
        .to(barrierWordRef.current, { opacity: 1, yPercent: -10, duration: 0.3 }, 0.35)
        .to(labTextsRef.current, { opacity: 1, duration: 0.3 }, 0.38)
        // Ingredient explosion
        .to(ingCeramidesRef.current, { x: -250, y: -60, scale: 1, opacity: 1, duration: 0.4 }, 0.48)
        .to(ingNiacinamideRef.current, { x: 220, y: 50, scale: 1, opacity: 1, duration: 0.4 }, 0.52)
        .to(ingPanthenolRef.current, { y: 180, scale: 1, opacity: 1, duration: 0.4 }, 0.56)
        .to(productImgRef.current, { scale: 0.5, y: 100, opacity: 0.3, duration: 0.3 }, 0.55)
        // Proof copy
        .to(proofCopyRef.current, { opacity: 1, y: 0, duration: 0.4 }, 0.62)
        .to(barrierWordRef.current, { opacity: 0, duration: 0.2 }, 0.65)
        .to(labTextsRef.current, { opacity: 0, duration: 0.2 }, 0.65)
        // Fade ingredients out, return background
        .to(
          [ingCeramidesRef.current, ingNiacinamideRef.current, ingPanthenolRef.current],
          { opacity: 0, scale: 0.6, duration: 0.5 },
          0.73
        )
        .to(bgRef.current, { backgroundColor: '#F4F1EA', duration: 0.6 }, 0.75)
        // Routine products
        .to(productImgRef.current, { scale: 1, y: 0, opacity: 1, x: 0, rotateX: 0, rotateY: 0, duration: 0.5 }, 0.78)
        .to(routineProductsRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.82)
        .fromTo('.routine-item', { opacity: 0, y: 60 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.5 }, 0.84);

      return () => { tl.kill(); };
    });

    return () => { mm.revert(); };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 bg-[#F4F1EA] z-0" />

      {/* Chrome sphere */}
      <div ref={chromeSphereRef} className="absolute top-[20%] right-[25%] w-48 h-48 rounded-full z-10"
        style={{ background: 'radial-gradient(circle at 35% 35%, #f5f5f5, #c0c0c0 50%, #a0a0a0 80%, #808080)', boxShadow: 'inset 0 -2px 6px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)' }} />

      {/* Gel blob — mint instead of acid lime */}
      <div ref={gelRef} className="absolute top-[35%] right-[10%] w-40 h-56 rounded-[60%_40%_50%_50%] z-10 opacity-70"
        style={{ background: 'radial-gradient(ellipse at center, rgba(168,213,186,0.25), rgba(168,213,186,0.05))', filter: 'blur(20px)' }} />

      {/* Porous rock */}
      <div ref={rockRef} className="absolute bottom-[15%] right-[20%] w-36 h-36 z-10 opacity-80"
        style={{ borderRadius: '40% 60% 45% 55%', background: 'radial-gradient(circle at 40% 40%, #F4F1EA, #d4d0c6, #b8b4aa)' }} />

      {/* Grid overlay — warm mineral instead of electric blue */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#C49A6C 1px, transparent 1px), linear-gradient(90deg, #C49A6C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Hero Copy — Scene 1 */}
      <div ref={heroCopyRef} className="absolute top-[15%] left-[8%] max-w-[45%] z-20">
        <p className="text-xs tracking-[0.3em] text-[#B8B6B0] mb-4 uppercase">SKN PARIS</p>
        <h1 className="text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.92] text-[#121212] tracking-tight">
          YOUR SKIN<br />IS NOT<br />THE<br />PROBLEM.
        </h1>
        <p className="mt-6 text-lg text-[#121212]/60 font-light tracking-wide">
          La science de la peau.<br />Sans le bruit.
        </p>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="absolute bottom-[12%] left-[8%] z-20">
        <button className="px-8 py-4 bg-[#A8D5BA] text-[#121212] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#96C4A8] transition-colors">
          DÉCOUVRIR LA ROUTINE →
        </button>
      </div>

      {/* Product Image — Scene 1 */}
      <div ref={productImgRef} className="absolute top-1/2 right-[12%] -translate-y-1/2 z-20" style={{ perspective: '1200px' }}>
        <div className="w-72 h-96 bg-gradient-to-b from-[#e8e4d8] to-[#c8c4b8] rounded-[40px] flex items-center justify-center shadow-2xl glass-ribbed">
          <div className="w-16 h-64 bg-white/60 rounded-full blur-sm" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-32 bg-[#121212] flex flex-col items-center justify-center text-[#F4F1EA] text-[8px] tracking-[0.2em] leading-relaxed">
            SKN<br />PARIS<br /><br />02<br />BARRIER<br />SERUM<br />30ML
          </div>
        </div>
      </div>

      {/* Barrier Word — Scene 2 */}
      <div ref={barrierWordRef} className="absolute inset-0 flex items-center justify-center z-10 opacity-0 pointer-events-none">
        <span className="text-[20vw] font-serif text-[#A8D5BA] opacity-20 tracking-[-0.04em] select-none">
          BARRIER
        </span>
      </div>

      {/* Lab Texts — Scene 2 */}
      <div ref={labTextsRef} className="absolute inset-0 z-10 opacity-0 pointer-events-none">
        <p className="absolute top-[12%] right-[8%] text-[10px] tracking-[0.3em] text-[#B8B6B0]">SKN_02 / BARRIER SERUM</p>
        <p className="absolute top-[18%] right-[8%] text-[10px] tracking-[0.3em] text-[#B8B6B0]">SKIN COMFORT</p>
        <p className="absolute bottom-[15%] left-[8%] text-[10px] tracking-[0.3em] text-[#B8B6B0]">FORMULA STATUS: ACTIVE</p>
        <p className="absolute bottom-[8%] left-[8%] text-[10px] tracking-[0.3em] text-[#B8B6B0]">PARIS / FRANCE</p>
      </div>

      {/* Ingredients — Scene 3 */}
      {/* Ceramides */}
      <div ref={ingCeramidesRef} className="absolute top-[25%] right-[60%] z-30 opacity-0 scale-50">
        <div className="w-32 h-32 rounded-full bg-white/90 flex flex-col items-center justify-center shadow-xl">
          <span className="text-[10px] tracking-[0.2em] text-[#121212]/60 mb-1">CERAMIDES</span>
          <div className="w-12 h-12 rounded-full bg-[#e8e4d8]" />
        </div>
      </div>
      {/* Niacinamide */}
      <div ref={ingNiacinamideRef} className="absolute top-[40%] right-[8%] z-30 opacity-0 scale-50">
        <div className="w-36 h-20 rounded-full bg-[#A8D5BA]/80 flex flex-col items-center justify-center shadow-xl">
          <span className="text-[10px] tracking-[0.2em] text-[#121212] mb-1">NIACINAMIDE</span>
          <div className="w-8 h-8 rounded-full bg-[#121212]/20" />
        </div>
      </div>
      {/* Panthenol */}
      <div ref={ingPanthenolRef} className="absolute bottom-[20%] left-[15%] z-30 opacity-0 scale-50">
        <div className="w-28 h-40 rounded-[50%] bg-[#E8C4A2]/80 flex flex-col items-center justify-center shadow-xl">
          <span className="text-[10px] tracking-[0.2em] text-[#C49A6C]/80 mb-2">PANTHENOL</span>
          <div className="w-10 h-10 rounded-full bg-[#C49A6C]/20 blur-sm" />
        </div>
      </div>

      {/* Proof Copy — Scene 3 */}
      <div ref={proofCopyRef} className="absolute top-[25%] left-[8%] max-w-[35%] z-20 opacity-0 translate-y-8">
        <h2 className="text-6xl lg:text-7xl font-serif leading-[0.95] text-[#121212]">
          PROOF,<br />NOT<br />PANIC.
        </h2>
        <p className="mt-6 text-base text-[#121212]/60 font-light leading-relaxed">
          Des actifs sélectionnés pour leur rôle.<br />
          Pas pour créer de la peur.
        </p>
        <div className="mt-10 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/90 flex-shrink-0" />
            <div>
              <p className="text-xs tracking-[0.2em] text-[#121212]/50 uppercase">Ceramides</p>
              <p className="text-sm text-[#121212]/70">Soutiennent la barrière cutanée.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#A8D5BA]/80 flex-shrink-0" />
            <div>
              <p className="text-xs tracking-[0.2em] text-[#121212]/50 uppercase">Niacinamide</p>
              <p className="text-sm text-[#121212]/70">Aide à améliorer l&apos;uniformité visuelle de la peau.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E8C4A2] flex-shrink-0" />
            <div>
              <p className="text-xs tracking-[0.2em] text-[#121212]/50 uppercase">Panthenol</p>
              <p className="text-sm text-[#121212]/70">Apporte du confort et soutient l&apos;hydratation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Routine Products — Scene 4 */}
      <div ref={routineProductsRef} className="absolute bottom-0 left-0 w-full z-20 opacity-0 translate-y-12">
        <div className="flex items-end justify-center gap-16 pb-16">
          {[{ name: '01 RESET', type: 'Cleanser', price: '49€', size: 'w-44 h-64', pos: '-rotate-6' },
            { name: '02 BARRIER', type: 'Serum', price: '89€', size: 'w-56 h-80', pos: '' },
            { name: '03 SHIELD', type: 'SPF 50', price: '59€', size: 'w-48 h-68', pos: 'rotate-3' }
          ].map((p, i) => (
            <div key={p.name} className={`routine-item flex flex-col items-center gap-3 ${p.pos}`}>
              <div className={`${p.size} bg-gradient-to-b from-[#e8e4d8] to-[#c8c4b8] rounded-[30px] flex items-center justify-center shadow-xl relative glass-ribbed`}>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-24 bg-[#121212] flex flex-col items-center justify-center text-[#F4F1EA] text-[7px] tracking-[0.15em] leading-relaxed">
                  SKN<br />{p.name.split(' ')[0]}<br />{p.name.split(' ')[1]}
                </div>
              </div>
              <p className="text-[10px] tracking-[0.25em] text-[#121212]/40 uppercase">{p.name}</p>
              <p className="text-sm font-light">{p.type}</p>
              <p className="text-sm font-medium">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center pb-20">
          <p className="text-2xl font-serif text-[#121212] mb-2">THE SKN SYSTEM</p>
          <p className="text-sm text-[#121212]/50 mb-6">3 gestes. Une routine qui respecte ta peau.</p>
          <button className="px-8 py-4 bg-[#A8D5BA] text-[#121212] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#96C4A8] transition-colors">
            SHOP THE SYSTEM — 89 €
          </button>
        </div>
      </div>
    </div>
  );
}
