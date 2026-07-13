'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const clone = el.querySelector('.marquee-content')?.cloneNode(true) as HTMLElement;
    if (clone) el.appendChild(clone);

    const scrollWidth = el.scrollWidth;
    gsap.to(el.querySelectorAll('.marquee-content'), {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'none',
    });
  }, []);

  return (
    <section className="bg-[#C7FF2E] py-6 overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="flex">
        <div className="marquee-content flex gap-8 pr-8">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-xl md:text-3xl font-serif text-[#121212] tracking-wide">
              PRIMAL SCIENCE FOR MODERN SKIN —&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
