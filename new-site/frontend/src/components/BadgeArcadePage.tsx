'use client';

import { useContent } from '../contexts/ContentContext';
import { Home } from 'lucide-react';

export default function BadgeArcadePage() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-red-400 underline text-center mb-6">
        Setting Up Badge Arcade
      </h1>

      <div className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Badge Arcade Setup</h2>
        </div>
        <div className="p-5 space-y-3 text-gray-300">
          <p><strong className="text-gray-100">To start,</strong> install Badge Arcade from the eShop or hShop and update the game.</p>
          <p>Once you&apos;re done, load up Badge Arcade and play away!</p>
          <p>
            To gain play coins, follow the{' '}
            <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">Badge Arcade cheats guide</a>.
          </p>
          <p>
            Badge Arcade and the eShop are completely disconnected from each other (other than using the same proxy). Find more updates in the{' '}
            <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">Brewtendo Discord</a>.
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <button onClick={() => changeContent('home')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
          <Home size={14} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
