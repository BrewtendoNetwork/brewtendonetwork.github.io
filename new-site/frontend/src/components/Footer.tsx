'use client';

import { useContent } from '../contexts/ContentContext';
import { MessageCircle, Play } from 'lucide-react';

export default function Footer() {
  const { changeContent } = useContent();

  return (
    <footer className="w-full bg-gradient-to-b from-brand-gold to-brand-gold-dark text-surface-base">
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <h2 className="font-display text-3xl">Brewtendo</h2>
        <p className="text-sm opacity-60">A Nintendo Network Revival for the 3DS</p>

        <div className="w-16 h-0.5 bg-black/10 rounded-full" />

        {/* Credits */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { name: '@cannedfart', role: 'Website', href: 'https://discord.com/users/1106930666333028422', avatar: 'https://cdn.discordapp.com/avatars/1106930666333028422/7a479319ddd01f829207571fd2636016.png' },
            { name: '@vugbdok8307', role: 'Guide', href: 'https://discord.com/users/1268772602227327083', avatar: 'https://cdn.discordapp.com/avatars/1268772602227327083/d0c4541f94f8562f6babfa151fa98afc.png' },
            { name: 'itsglowny', role: 'Migration', href: 'https://discord.com/users/1055874798535848118', avatar: 'https://cdn.discordapp.com/avatars/1055874798535848118/289a02d4f188a935bc58f5e6dcaf346e.webp?size=80' },
          ].map((person) => (
            <a
              key={person.name}
              href={person.href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 border border-black/15 hover:border-black/30 rounded-xl px-3 py-2 transition-colors text-surface-base"
            >
              <img src={person.avatar} alt="" className="w-8 h-8 rounded-full border-2 border-black/10 flex-shrink-0" />
              <div>
                <span className="block text-xs font-bold leading-tight">{person.name}</span>
                <span className="block text-[10px] opacity-50">{person.role}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="w-16 h-0.5 bg-black/10 rounded-full" />

        {/* Social links */}
        <div className="flex gap-3">
          <a
            href="https://discord.gg/brewtendo"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 bg-black/8 hover:bg-black/15 text-surface-base px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} />
            Discord
          </a>
          <a
            href="https://www.youtube.com/@Trippy76534"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 bg-black/8 hover:bg-black/15 text-surface-base px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <Play size={16} />
            YouTube
          </a>
        </div>

        <button
          onClick={() => changeContent('progress')}
          className="text-[11px] opacity-40 hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none text-surface-base"
        >
          Site Progress
        </button>
      </div>
    </footer>
  );
}
