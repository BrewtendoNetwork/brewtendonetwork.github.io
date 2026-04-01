'use client';

const steps = ['Prerequisites', 'Proxy Setup', 'eShop Setup'];

export default function GuideStepper({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          {i > 0 && (
            <div className={`w-8 h-0.5 rounded-full ${i <= current ? 'bg-brand-gold' : 'bg-surface-3'}`} />
          )}
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < current
                  ? 'bg-green-500/20 text-green-400'
                  : i === current
                  ? 'bg-brand-gold text-surface-base shadow-md shadow-brand-gold/30'
                  : 'bg-surface-3 text-gray-500'
              }`}
            >
              {i < current ? '\u2713' : i + 1}
            </div>
            <span className="text-[10px] text-gray-500 hidden sm:block">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
