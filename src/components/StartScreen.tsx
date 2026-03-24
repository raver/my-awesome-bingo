interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full p-8 bg-espresso"
      style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 35%, rgba(92,51,23,0.8) 0%, #2c1810 100%)',
        animation: 'posterReveal 0.5s ease-out both',
      }}
    >
      {/* Hero section */}
      <div className="text-center" style={{ animation: 'posterFade 0.6s ease-out 0.1s both' }}>
        <p className="uppercase tracking-[0.4em] text-xs text-latte/50 mb-8">✦ Social Bingo ✦</p>
        <span className="text-6xl mb-4 block">☕</span>
        <h1 className="font-heading text-7xl font-bold text-cream leading-none mb-0">Soc Ops</h1>
        <div className="flex items-center gap-3 my-6 justify-center">
          <div className="h-px bg-latte/30 w-16" />
          <span className="text-latte/50 text-xs">✦</span>
          <div className="h-px bg-latte/30 w-16" />
        </div>
      </div>

      {/* How to Play card */}
      <div
        className="w-full max-w-xs bg-coffee/40 rounded-xl border border-latte/15 p-6 mb-10"
        style={{ animation: 'posterFade 0.6s ease-out 0.25s both' }}
      >
        <p className="uppercase tracking-widest text-xs text-latte/60 border-b border-latte/20 pb-3 mb-5">
          How to Play
        </p>
        {[
          'Find people who match the questions',
          'Tap a square when you find a match',
          'Get 5 in a row to win!',
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
            <span className="font-heading text-xl font-bold text-bingo/60 leading-none w-5 shrink-0 mt-0.5">
              {i + 1}.
            </span>
            <span className="text-sm text-cream/70 leading-snug">{step}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ animation: 'posterFade 0.6s ease-out 0.4s both' }} className="w-full max-w-xs">
        <button
          onClick={onStart}
          className="w-full bg-bingo text-espresso font-bold py-4 px-8 rounded-xl text-lg tracking-wide shadow-[0_4px_24px_rgba(212,160,23,0.3)] hover:shadow-[0_6px_32px_rgba(212,160,23,0.5)] hover:-translate-y-0.5 active:opacity-90 transition-all duration-200"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
