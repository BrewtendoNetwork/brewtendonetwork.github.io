'use client';

import { useContent } from '../contexts/ContentContext';
import { BookOpen, MessageCircle, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-surface-1 border border-white/5 rounded-2xl p-8 sm:p-12 text-center mb-6 relative overflow-hidden">
        <h1 className="font-display text-brand-gold text-4xl sm:text-5xl mb-3 animate-fade-in-up-1">
          Brewtendo
        </h1>
        <p className="text-gray-400 max-w-md mx-auto mb-6 animate-fade-in-up-2">
          Bringing back what Nintendo shut down. eShop. Badge Arcade. SpotPass. All of it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up-3">
          <button
            onClick={() => changeContent('guide')}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-surface-base font-semibold px-6 py-3 rounded-xl hover:bg-brand-gold-light transition-colors"
          >
            <BookOpen size={16} />
            Get Started
          </button>
          <a
            href="https://discord.gg/brewtendo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface-3 text-gray-200 font-semibold px-6 py-3 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-white/20 transition-all"
          >
            <MessageCircle size={16} />
            Join Discord
          </a>
        </div>
      </section>

      {/* Installation Guide card */}
      <section className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6 hover:-translate-y-0.5 transition-transform">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Get Started with Brewtendo</h2>
        </div>
        <div className="p-5">
          <p className="text-gray-300 mb-4">
            Learn how to set up Brewtendo Network on your modded 3DS. You will need Luma3DS and a stable Wi-Fi connection.
          </p>
          <button
            onClick={() => changeContent('guide')}
            className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-medium px-5 py-2.5 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-brand-gold/30 transition-all text-sm"
          >
            Installation Guide
            <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* Badge Arcade card */}
      <section className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6 hover:-translate-y-0.5 transition-transform">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">Badge Arcade</h2>
        </div>
        <div className="p-5">
          <p className="text-gray-300 mb-4">
            Install Badge Arcade from the eShop or hShop, update it, and start collecting badges on Brewtendo Network.
          </p>
          <button
            onClick={() => changeContent('badgearcade')}
            className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-medium px-5 py-2.5 rounded-xl border border-white/10 hover:bg-surface-4 hover:border-brand-gold/30 transition-all text-sm"
          >
            Badge Arcade Guide
            <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* What is Brewtendo */}
      <section className="bg-surface-2 border border-white/5 rounded-2xl p-6 mb-6">
        <h2 className="font-semibold text-lg text-gray-100 mb-3">What is Brewtendo?</h2>
        <div className="h-px bg-white/5 mb-4" />
        <p className="text-gray-300 mb-3">
          Brewtendo is a Nintendo Network revival for the 3DS. It is not trying to be a Pretendo
          rival — instead, it revives the services they would not add: the{' '}
          <strong className="text-gray-100">eShop</strong>,{' '}
          <strong className="text-gray-100">Badge Arcade</strong>,{' '}
          <strong className="text-gray-100">Theme Shop</strong>,{' '}
          <strong className="text-gray-100">SpotPass</strong>, and{' '}
          <strong className="text-gray-100">Nintendo Video</strong>.
        </p>
        <p className="text-gray-400 text-sm">
          Want to know why the eShop shut down in 2023?{' '}
          <a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a" target="_blank" rel="noopener noreferrer">
            Learn more here.
          </a>
        </p>
      </section>
    </div>
  );
}
