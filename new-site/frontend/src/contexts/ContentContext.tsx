'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Page = 'home' | 'guide' | 'guide_1' | 'guide_2' | 'badgearcade' | 'other' | 'progress' | 'faq';

interface ContentContextType {
  currentPage: Page;
  changeContent: (page: Page) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const changeContent = useCallback((page: Page) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <ContentContext.Provider value={{ currentPage, changeContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
