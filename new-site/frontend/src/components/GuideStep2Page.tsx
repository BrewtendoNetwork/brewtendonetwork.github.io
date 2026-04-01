'use client';

import { useContent } from '../contexts/ContentContext';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import GuideStepper from './GuideStepper';

export default function GuideStep2Page() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-brand-gold underline text-center mb-4">
        Brewtendo Installation Guide
      </h1>
      <GuideStepper current={2} />

      <div className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Step 3: Disabling the Proxy</h2>
        </div>
        <div className="p-5 space-y-4 text-gray-300">
          <p>
            Open <strong className="text-gray-100">System Settings</strong> &rarr; <strong className="text-gray-100">Internet Settings</strong> &rarr; <strong className="text-gray-100">Connection Settings</strong> &rarr; Wi-Fi &rarr; <strong className="text-gray-100">Change Settings</strong> &rarr; <strong className="text-gray-100">Proxy Settings</strong> &rarr; select <strong className="text-gray-100">No</strong>.
          </p>
          <p>Your settings will be remembered. Re-enabling with <strong className="text-gray-100">Yes</strong> keeps the IP and port.</p>

          <div className="flex justify-between items-center pt-2">
            <button onClick={() => changeContent('guide_1')} className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-300 text-sm transition-colors">
              <ChevronLeft size={14} /> Proxy Setup
            </button>
            <button onClick={() => changeContent('badgearcade')} className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-medium px-5 py-2.5 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-brand-gold/30 transition-all text-sm">
              Badge Arcade Setup <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <button onClick={() => changeContent('home')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
          <Home size={14} /> Back to Home
        </button>
      </div>
    </div>
  );
}
