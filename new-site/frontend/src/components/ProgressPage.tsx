'use client';

import { useContent } from '../contexts/ContentContext';
import { Home, Check, Circle } from 'lucide-react';

const tasks = [
  { label: 'Proper Home Page', done: true },
  { label: 'Make "Other Info" Page', done: true },
  { label: 'Give Out Deserved Credits', done: true },
  { label: 'Installation Guide', done: true },
  { label: 'Badge Arcade Guide', done: true },
  { label: 'FAQ Page', done: true },
  { label: 'Support Page', done: false },
];

export default function ProgressPage() {
  const { changeContent } = useContent();
  const completed = tasks.filter(t => t.done).length;

  return (
    <div className="animate-fade-in text-center">
      <h1 className="font-display text-3xl sm:text-4xl text-blue-400 underline mb-6">
        Progress on Website
      </h1>

      <div className="w-full max-w-lg mx-auto mb-6">
        <div className="progressbar relative h-12 w-full rounded-xl bg-surface-2 border border-white/5 overflow-hidden shadow-md">
          <div
            id="value"
            className="h-full rounded-xl bg-gradient-to-r from-brand-gold-dark to-brand-gold"
            style={{ '--maxvalue': tasks.length, '--value': completed } as React.CSSProperties}
          />
        </div>
        <p className="text-gray-500 text-sm mt-2">{completed} of {tasks.length} tasks completed</p>
      </div>

      <ul className="space-y-2 mb-6 list-none p-0 max-w-sm mx-auto">
        {tasks.map((task) => (
          <li key={task.label} className={`flex items-center gap-3 text-left ${task.done ? 'text-gray-500' : 'text-gray-300'}`}>
            {task.done
              ? <Check size={16} className="text-green-400 flex-shrink-0" />
              : <Circle size={16} className="text-gray-600 flex-shrink-0" />
            }
            <span className={task.done ? 'line-through' : ''}>{task.label}</span>
          </li>
        ))}
      </ul>

      <button onClick={() => changeContent('home')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors mb-8">
        <Home size={14} />
        Back to Home
      </button>
    </div>
  );
}
