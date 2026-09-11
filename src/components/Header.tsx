import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: 'overview' | 'features' | 'feedback' | 'changelog';
  setActiveTab: (tab: 'overview' | 'features' | 'feedback' | 'changelog') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
            β
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-neutral-900 tracking-tight">Beta Site</h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                v0.1.0-beta
              </span>
            </div>
            <p className="text-xs text-neutral-500 hidden sm:block">
              Near-rem/beta-site • Running in AI Studio
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {(
            [
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Roadmap' },
              { id: 'feedback', label: 'Tester Feedback' },
              { id: 'changelog', label: 'Releases' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {tab.label}
            </button>
          ))}

          <a
            href="https://github.com/Near-rem/beta-site"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>
        </nav>
      </div>
    </header>
  );
};
