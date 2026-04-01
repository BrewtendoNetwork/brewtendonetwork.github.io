'use client';

import { useContent } from '../contexts/ContentContext';
import { staffMembers } from '../data/staff';
import { Home } from 'lucide-react';

export default function OtherPage() {
  const { changeContent } = useContent();

  return (
    <div className="animate-fade-in">
      <div className="bg-surface-1 border border-white/5 rounded-2xl overflow-hidden mb-6">
        <div className="bg-brand-pink px-5 py-3">
          <h2 className="text-white font-semibold text-sm">The Team Behind Brewtendo</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
            {staffMembers.map((member) => (
              <div
                key={member.name}
                className={`flex flex-col items-center text-center gap-1 group${member.name === 'Andrea' ? ' easter-egg' : ''}`}
                title={member.name === 'Andrea' ? 'His uncle is the best' : undefined}
              >
                <img
                  src={member.image}
                  width="80"
                  height="80"
                  alt={member.name}
                  loading="lazy"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-surface-3 p-0.5 group-hover:shadow-lg group-hover:shadow-black/30 transition-shadow"
                />
                <span className="text-xs font-semibold text-gray-300 break-words leading-tight">{member.name}</span>
                <span className="text-[10px] text-gray-500">{member.role}</span>
              </div>
            ))}
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
