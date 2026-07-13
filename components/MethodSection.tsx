'use client';

export default function MethodSection() {
  return (
    <section className="relative py-32 px-8 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left — manifesto */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-serif leading-[1.05] text-[#121212]">
            NO FEAR.<br />NO NOISE.<br />JUST SKIN<br />INTELLIGENCE.
          </h2>
        </div>

        {/* Right — pillars */}
        <div className="flex-1 bg-[#121212] text-[#F4F1EA] p-16">
          <div className="space-y-12">
            {[
              { num: '01', title: 'BARRIER FIRST', desc: "Tout commence par une barrière cutanée intacte. Nous ne contournons pas la biologie de votre peau : nous travaillons avec elle." },
              { num: '02', title: 'ACTIVE WITH PURPOSE', desc: "Chaque actif a un rôle documenté. Pas d'ingrédients tendance ajoutés pour le marketing." },
              { num: '03', title: 'LESS, BUT BETTER', desc: "Trois produits. C'est tout ce dont votre peau a besoin. Le minimalisme comme philosophie de formulation." },
              { num: '04', title: 'PROOF OVER HYPE', desc: "Nous publions nos tests. Pas de promesses vides, pas de peur créée artificiellement." },
            ].map((p) => (
              <div key={p.num} className="border-b border-[#F4F1EA]/10 pb-8 last:border-0 last:pb-0">
                <p className="text-xs tracking-[0.3em] text-[#C7FF2E] mb-2">{p.num}</p>
                <h3 className="text-lg font-medium tracking-wide mb-2">{p.title}</h3>
                <p className="text-sm text-[#F4F1EA]/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative METHOD word */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5">
        <span className="text-[20vw] font-serif text-[#121212] leading-none">METHOD</span>
      </div>
    </section>
  );
}
