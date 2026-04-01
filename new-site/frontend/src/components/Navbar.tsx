'use client';

import { useState, useCallback } from 'react';
import { useContent } from '../contexts/ContentContext';
import { BookOpen, Trophy, Users, HelpCircle, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'guide', label: 'Guide', icon: BookOpen },
  { id: 'badgearcade', label: 'Badge Arcade', icon: Trophy },
  { id: 'other', label: 'Staff', icon: Users },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
] as const;

const guidePages = new Set(['guide', 'guide_1', 'guide_2']);

export default function Navbar() {
  const { currentPage, changeContent } = useContent();
  const [open, setOpen] = useState(false);

  const isActive = (id: string) => {
    if (id === 'guide') return guidePages.has(currentPage);
    return currentPage === id;
  };

  const navigate = useCallback((id: string) => {
    changeContent(id as any);
    setOpen(false);
  }, [changeContent]);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50">
      <div className="mt-2 bg-surface-2 border border-white/10 rounded-2xl shadow-lg shadow-black/30 backdrop-blur-sm">
        <div className="flex items-center justify-between px-2">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 px-3 py-3 rounded-xl transition-colors"
          >
            <span className="font-display text-brand-gold text-lg">Brewtendo</span>
          </button>

          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.id)
                      ? 'bg-brand-gold/15 text-brand-gold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden p-3 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden border-t border-white/5 px-2 pb-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.id)
                      ? 'bg-brand-gold/15 text-brand-gold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
