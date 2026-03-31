'use client';

import { useContent } from '../contexts/ContentContext';

const navItems = [
  { id: 'home', label: 'Brewtendo' },
  { id: 'guide', label: 'Install Guide' },
  { id: 'badgearcade', label: 'Badge Arcade' },
  { id: 'other', label: 'Other Info' },
] as const;

const guidePages = new Set(['guide', 'guide_1', 'guide_2']);

export default function Navbar() {
  const { currentPage, changeContent } = useContent();

  const isActive = (id: string) => {
    if (id === 'guide') return guidePages.has(currentPage);
    return currentPage === id;
  };

  return (
    <nav className="navi-bar" role="navigation" aria-label="Main navigation">
      <div id="center-navi">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item${isActive(item.id) ? ' nav-active' : ''}`}
            onClick={() => changeContent(item.id as any)}
            aria-current={isActive(item.id) ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
