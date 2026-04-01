'use client';

import { useContent } from '../contexts/ContentContext';
import { Home, ChevronRight } from 'lucide-react';
import GuideStepper from './GuideStepper';

export default function GuidePage() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-brand-gold underline text-center mb-4">
        Brewtendo Installation Guide
      </h1>

      <GuideStepper current={0} />

      <div className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Prerequisites</h2>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg text-gray-100 mb-2">What You Will Need</h3>
          <div className="h-px bg-white/5 mb-4" />
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-gray-100">A modded 3DS</strong> with Luma3DS and Universal Downloader installed.
              <br />
              <a href="https://3ds.hacks.guide/" rel="noopener noreferrer" target="_blank" className="text-sm">
                Click here for more info.
              </a>
            </li>
            <li><strong className="text-gray-100">A stable Wi-Fi connection.</strong></li>
            <li>
              <strong className="text-gray-100">A way to transfer files</strong> to the SD or microSD card.{' '}
              <span className="text-gray-500 text-sm">(may not be needed)</span>
            </li>
            <li>
              <strong className="text-gray-100">Nimbus/Pretendo installed</strong> (optional).
              <br />
              <a href="https://pretendo.network/docs/install/3ds" rel="noopener noreferrer" target="_blank" className="text-sm">
                Click here for more info.
              </a>
            </li>
          </ul>
          <div className="h-px bg-white/5 my-4" />
          <div className="text-center">
            <button
              onClick={() => changeContent('guide_1')}
              className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-medium px-5 py-2.5 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-brand-gold/30 transition-all text-sm"
            >
              Next: Proxy Setup
              <ChevronRight size={14} />
            </button>
          </div>
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
