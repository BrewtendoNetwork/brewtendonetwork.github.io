'use client';

import { useContent } from '../contexts/ContentContext';
import { Home } from 'lucide-react';

const faqs = [
  { q: 'What is Brewtendo?', a: 'Brewtendo is a Nintendo Network revival for the 3DS. It brings back services like the eShop, Badge Arcade, Theme Shop, SpotPass, and Nintendo Video.' },
  { q: 'How is Brewtendo different from Pretendo?', a: 'Brewtendo focuses on the services Pretendo does not offer, like the eShop and Badge Arcade. It is not trying to be a competitor.' },
  { q: 'What do I need to get started?', a: 'A modded 3DS with Luma3DS, a stable Wi-Fi connection, and optionally Nimbus or Pretendo. Check the Installation Guide for full details.' },
  { q: 'What is error code 003?', a: 'It means you have not been accepted yet. Bunny (the proxy owner) needs to manually accept you. He is in EST (UTC -5:00) — please be patient.' },
  { q: 'How do I disable the proxy?', a: 'System Settings > Internet Settings > Connection Settings > your Wi-Fi > Change Settings > Proxy Settings > No. Settings are saved for later.' },
  { q: 'What regions are supported?', a: 'Join the official Brewtendo Discord for the latest info on supported regions.' },
  { q: 'Where can I get help?', a: 'The official Brewtendo Discord at discord.gg/brewtendo is the best place for support and updates.' },
];

export default function FAQPage() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-brand-gold underline text-center mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3 mb-8">
        {faqs.map((faq) => (
          <details key={faq.q} className="bg-surface-1 border border-white/5 rounded-xl overflow-hidden">
            <summary className="px-5 py-3 font-semibold text-gray-200 cursor-pointer hover:text-brand-gold transition-colors text-sm">
              {faq.q}
            </summary>
            <div className="px-5 pb-4 text-gray-400 text-sm">{faq.a}</div>
          </details>
        ))}
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
