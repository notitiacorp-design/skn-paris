export default function CommunityGrid() {
  const cells = [
    { type: 'img', color: '#d4cfc4' },
    { type: 'vid', color: '#c4bfb4' },
    { type: 'review', color: '#121212', text: 'Enfin une routine simple qui marche. — Camille L.' },
    { type: 'img', color: '#e4dfd4' },
    { type: 'review', color: '#C7FF2E', text: 'Ma peau n\'a jamais été aussi calme. — Marc D.' },
    { type: 'img', color: '#b4afa4' },
  ];

  return (
    <section className="bg-[#121212] text-[#F4F1EA] py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-xs tracking-[0.3em] text-[#C7FF2E] uppercase mb-4">Community</p>
        <h2 className="text-5xl lg:text-6xl font-serif mb-16">
          REAL SKN.<br />REAL ROUTINES.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {cells.map((cell, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center p-6"
              style={{ backgroundColor: cell.color }}
            >
              {cell.type === 'review' ? (
                <p className="text-xs md:text-sm leading-relaxed text-center font-light"
                  style={{ color: cell.color === '#121212' ? '#F4F1EA' : '#121212' }}>
                  {cell.text}
                </p>
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  {cell.type === 'vid' ? (
                    <div className="w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-transparent border-l-white/60 ml-1" />
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
