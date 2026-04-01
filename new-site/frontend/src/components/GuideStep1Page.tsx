'use client';

import { useContent } from '../contexts/ContentContext';
import { Home, ChevronRight, ChevronLeft, Copy, Check } from 'lucide-react';
import { useState, useCallback } from 'react';
import GuideStepper from './GuideStepper';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 bg-surface-3 hover:bg-surface-4 px-2.5 py-1 rounded-lg border border-white/10 text-sm font-mono transition-colors cursor-pointer"
      title={`Copy ${text}`}
    >
      <code className="text-brand-pink-light bg-transparent p-0">{text}</code>
      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} className="text-gray-500" />}
    </button>
  );
}

export default function GuideStep1Page() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-brand-gold underline text-center mb-4">
        Brewtendo Installation Guide
      </h1>
      <GuideStepper current={1} />

      <div className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Step 2: Setting Up the Proxy</h2>
        </div>
        <div className="p-5 space-y-4">
          <details className="bg-surface-2 border border-white/5 rounded-xl p-4">
            <summary className="font-semibold text-gray-200 cursor-pointer hover:text-brand-gold transition-colors">
              If you DON&apos;T have Nimbus/Pretendo installed
            </summary>
            <div className="mt-3 text-gray-300 space-y-3">
              <p>Copy <code>0004013000002F02.ips</code> to <code>SD:/luma/sysmodules/</code> on your card.</p>
              <p>Shut down and hold <strong className="text-gray-100">Select</strong> on startup. Enable these options:</p>
              <div className="text-center">
                <img src="/images/selectmenuimg.png" className="max-w-[300px] rounded-xl border border-white/10 mx-auto" alt="Luma3DS config" />
              </div>
              <p>When successful, proceed to the next steps!</p>
            </div>
          </details>

          <details className="bg-surface-2 border border-white/5 rounded-xl p-4">
            <summary className="font-semibold text-gray-200 cursor-pointer hover:text-brand-gold transition-colors">
              If you have Pretendo installed
            </summary>
            <div className="mt-3 text-gray-300 space-y-3">
              <p>Go to Nimbus and select <strong className="text-gray-100">Nintendo Network</strong>. <span className="text-gray-500 text-sm">More stable this way.</span></p>
              <p>Navigate: <strong className="text-gray-100">System Settings</strong> &rarr; <strong className="text-gray-100">Internet Settings</strong> &rarr; <strong className="text-gray-100">Connection Settings</strong> &rarr; Wi-Fi &rarr; <strong className="text-gray-100">Change Settings</strong> &rarr; <strong className="text-gray-100">Proxy Settings</strong> &rarr; <strong className="text-gray-100">Yes</strong> &rarr; <strong className="text-gray-100">Detailed Setup</strong>.</p>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-gray-400">Server:</span> <CopyButton text="69.202.205.93" />
                <span className="text-gray-400">Port:</span> <CopyButton text="3000" />
              </div>
              <p>Tap <strong className="text-gray-100">Test Connection</strong>. Wait for error <code>003-####</code>.</p>
              <p className="text-gray-500 text-sm">Proxy address is subject to change.</p>
            </div>
          </details>

          <div className="bg-surface-2 border border-amber-500/20 rounded-xl p-4">
            <h3 className="font-semibold text-amber-400 mb-2">About Error Code 003</h3>
            <p className="text-gray-300 mb-2">You <strong className="text-gray-100">have not been accepted yet</strong>. Bunny (proxy owner) must manually accept you. Complaining in <a href="https://discord.gg/brewtendo" target="_blank" rel="noopener noreferrer">Discord</a> will not help.</p>
            <p className="text-gray-500 text-sm mb-2">Bunny is in EST (UTC -5:00). Please be patient.</p>
            <p className="text-brand-gold font-semibold mt-3">You are now connected to Brewtendo Network!</p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button onClick={() => changeContent('guide')} className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-300 text-sm transition-colors">
              <ChevronLeft size={14} /> Prerequisites
            </button>
            <button onClick={() => changeContent('guide_2')} className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-medium px-5 py-2.5 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-brand-gold/30 transition-all text-sm">
              Next: eShop Setup <ChevronRight size={14} />
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
