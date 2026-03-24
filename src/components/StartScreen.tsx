interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-[radial-gradient(ellipse_at_top,_#fff8f0_0%,_#fdf6e3_100%)]">
      <div className="text-center max-w-sm w-full">
        <div className="text-5xl mb-4">☕</div>
        <h1 className="font-heading text-5xl font-bold text-espresso mb-1 leading-tight">Soc Ops</h1>
        <p className="text-xs uppercase tracking-widest text-latte mb-8">Social Bingo</p>

        <div className="bg-foam rounded-2xl p-6 mb-8 border border-latte/30 shadow-[0_4px_24px_rgba(92,51,23,0.08)]">
          <h2 className="font-heading text-lg font-semibold text-coffee mb-4">How to play</h2>
          <ul className="text-left text-sm space-y-3">
            <li className="flex gap-2 items-start text-espresso/80">
              <span>☕</span><span>Find people who match the questions</span>
            </li>
            <li className="flex gap-2 items-start text-espresso/80">
              <span>✔️</span><span>Tap a square when you find a match</span>
            </li>
            <li className="flex gap-2 items-start text-espresso/80">
              <span>🏆</span><span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-coffee text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-[0_4px_16px_rgba(92,51,23,0.25)] active:bg-caramel transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
