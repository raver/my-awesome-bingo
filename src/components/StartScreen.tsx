interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-cream">
      <div className="flex flex-col items-center max-w-xs w-full">

        {/* Hero */}
        <div className="text-center" style={{ animation: 'fadeUp 0.5s ease-out both' }}>
          <h1 className="font-heading text-8xl font-bold text-espresso tracking-tight leading-none mb-0">
            Soc Ops
          </h1>
          <hr className="w-10 border-0 border-t-2 border-espresso/20 my-6 mx-auto" />
          <p className="uppercase tracking-[0.3em] text-xs text-latte/80">Social Bingo</p>
        </div>

        <div className="mb-16" />

        {/* How to Play */}
        <div className="w-full" style={{ animation: 'fadeUp 0.5s ease-out 0.15s both' }}>
          <p className="uppercase tracking-widest text-xs text-latte mb-8">How to Play</p>
          <div className="flex items-baseline gap-5 mb-6">
            <span className="font-heading text-4xl font-bold text-espresso/15 leading-none shrink-0 w-8 text-right">1</span>
            <span className="text-sm text-espresso/60 leading-relaxed">Find people who match the questions</span>
          </div>
          <div className="flex items-baseline gap-5 mb-6">
            <span className="font-heading text-4xl font-bold text-espresso/15 leading-none shrink-0 w-8 text-right">2</span>
            <span className="text-sm text-espresso/60 leading-relaxed">Tap a square when you find a match</span>
          </div>
          <div className="flex items-baseline gap-5 mb-0">
            <span className="font-heading text-4xl font-bold text-espresso/15 leading-none shrink-0 w-8 text-right">3</span>
            <span className="text-sm text-espresso/60 leading-relaxed">Get 5 in a row to win!</span>
          </div>
          <hr className="border-0 border-t border-latte/20 mt-10 mb-10" />
        </div>

        {/* CTA */}
        <div className="w-full" style={{ animation: 'fadeUp 0.5s ease-out 0.3s both' }}>
          <button
            onClick={onStart}
            className="w-full bg-coffee text-cream font-semibold py-5 px-8 rounded-2xl text-base tracking-wide shadow-none hover:bg-caramel transition-colors duration-200"
          >
            Start Game
          </button>
        </div>

      </div>
    </div>
  );
}
