import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isFreeSpace
    ? 'bg-coffee text-cream border-coffee font-heading font-bold text-sm cursor-default'
    : square.isMarked
    ? isWinning
      ? 'bg-bingo/30 border-bingo text-espresso'
      : 'bg-marked border-marked-border text-coffee'
    : 'bg-foam text-espresso border-latte/40 active:bg-cream';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-caramel text-xs">✓</span>
      )}
    </button>
  );
}
