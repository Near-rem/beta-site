import React from 'react';
import { ReleaseLog } from '../types.ts';
import { Tag, Calendar, CheckCircle2 } from 'lucide-react';

const releases: ReleaseLog[] = [
  {
    version: 'v0.1.0-beta',
    date: 'September 11, 2026',
    tag: 'Latest Beta Release',
    highlights: [
      'Initialized standard React 18 + TypeScript + Vite project structure.',
      'Configured dev server to bind to 0.0.0.0:3000 matching AI Studio web container requirements.',
      'Added interactive beta hub with live tester feedback recorder and issue tracker.',
      'Created system health and runtime diagnostics monitor for reverse-proxy verification.',
      'Prepared roadmap tracking core, interface, and integration milestones.',
    ],
  },
  {
    version: 'v0.0.1-init',
    date: 'September 11, 2026',
    tag: 'GitHub Initial Commit',
    highlights: [
      'Repository initialized on GitHub (Near-rem/beta-site).',
      'Created initial README.md and main branch.',
    ],
  },
];

export const ReleaseNotes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">Release Changelog</h2>
        <p className="text-sm text-neutral-500 mt-0.5">
          History of deployments and iterations for Near-rem/beta-site.
        </p>
      </div>

      <div className="space-y-6">
        {releases.map((rel, idx) => (
          <div
            key={rel.version}
            className="p-6 bg-white border border-neutral-200 rounded-xl shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-base text-neutral-900">
                  {rel.version}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    idx === 0
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {rel.tag}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{rel.date}</span>
              </div>
            </div>

            <ul className="space-y-2">
              {rel.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
