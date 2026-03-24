interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-espresso/60 flex items-center justify-center p-4 z-50">
      <div className="bg-cream rounded-2xl p-6 max-w-xs w-full text-center border border-latte/30 shadow-[0_8px_48px_rgba(44,24,16,0.3)] animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">☕🎉</div>
        <h2 className="font-heading text-3xl font-bold text-coffee mb-2">BINGO!</h2>
        <p className="text-latte mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-coffee text-cream font-semibold py-3 px-6 rounded-xl shadow-[0_4px_16px_rgba(92,51,23,0.25)] active:bg-caramel transition-colors"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
