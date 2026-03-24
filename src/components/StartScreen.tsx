import { motion } from 'motion/react';

interface StartScreenProps {
  onStart: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  'Find people who match the questions',
  'Tap a square when you find a match',
  'Get 5 in a row to win!',
];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-full p-6"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, #fff8f0 0%, transparent 70%),
          radial-gradient(ellipse 100% 60% at 50% 100%, rgba(92,51,23,0.06) 0%, transparent 70%),
          #fdf6e3`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center max-w-sm w-full">
        {/* Icon badge */}
        <motion.div
          className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-coffee/10 ring-1 ring-latte/30 text-4xl shadow-[0_2px_12px_rgba(92,51,23,0.08)] mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.4, ease }}
        >
          ☕
        </motion.div>

        {/* Title + rule + subtitle */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease }}
        >
          <h1 className="font-heading text-6xl font-bold text-espresso leading-none mb-2">
            Soc Ops
          </h1>
          <div className="w-12 h-px bg-latte/50 mx-auto my-3" />
          <div className="flex gap-2 items-center justify-center mb-10">
            <span className="text-latte/40">—</span>
            <p className="uppercase tracking-widest text-xs text-latte">Social Bingo</p>
            <span className="text-latte/40">—</span>
          </div>
        </motion.div>

        {/* How to Play card */}
        <motion.div
          className="bg-foam rounded-2xl p-6 mb-8 border border-latte/30 shadow-[0_4px_24px_rgba(92,51,23,0.08)]"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.45, ease }}
        >
          <p className="uppercase tracking-widest text-xs text-latte border-b border-latte/30 pb-3 mb-4">
            How to Play
          </p>
          {steps.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3 border-b border-latte/15 last:border-0"
            >
              <span className="font-heading text-2xl font-bold text-coffee/30 leading-none w-6 shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-espresso/80 leading-snug pt-1">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease }}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={onStart}
            className="w-full bg-coffee text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-[0_4px_16px_rgba(92,51,23,0.25)] hover:bg-caramel hover:shadow-[0_6px_24px_rgba(92,51,23,0.35)] active:bg-caramel transition-all duration-200"
          >
            Start Game
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

