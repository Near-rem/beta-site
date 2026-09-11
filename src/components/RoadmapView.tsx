import React, { useState } from 'react';
import { FeatureItem } from '../types.ts';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

const initialFeatures: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Container Web Runtime Setup',
    category: 'Core',
    status: 'live',
    description: 'Initialized Node.js 22 Vite runtime binding to host 0.0.0.0 and port 3000.',
    version: 'v0.1.0',
    progress: 100,
  },
  {
    id: 'feat-2',
    title: 'Interactive Beta Hub UI',
    category: 'Interface',
    status: 'live',
    description: 'Standardized responsive dashboard with metrics, feedback recorder, and roadmap.',
    version: 'v0.1.0',
    progress: 100,
  },
  {
    id: 'feat-3',
    title: 'Client State Persistence',
    category: 'Performance',
    status: 'in_progress',
    description: 'Local caching of user test entries, bug reports, and customization states.',
    version: 'v0.2.0',
    progress: 65,
  },
  {
    id: 'feat-4',
    title: 'Automated CI/CD Integration',
    category: 'Integration',
    status: 'in_progress',
    description: 'Continuous compilation validation and automated release tagging.',
    version: 'v0.2.0',
    progress: 40,
  },
  {
    id: 'feat-5',
    title: 'Cloud Data Synchronization',
    category: 'Core',
    status: 'planned',
    description: 'Persistent cloud datastore connectivity for multi-tester collaboration.',
    version: 'v0.3.0',
    progress: 0,
  },
];

export const RoadmapView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'live' | 'in_progress' | 'planned'>('all');
  const [features] = useState<FeatureItem[]>(initialFeatures);

  const filteredFeatures = filter === 'all' 
    ? features 
    : features.filter((f) => f.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">Feature Roadmap & Milestones</h2>
          <p className="text-sm text-neutral-500 mt-0.5">
            Track upcoming implementations and live capabilities in the beta site release cycle.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg self-start sm:self-auto">
          {(['all', 'live', 'in_progress', 'planned'] as const).map((status) => (
            <button
              key={status}
              id={`filter-${status}`}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-all ${
                filter === status
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {status === 'in_progress' ? 'In Progress' : status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFeatures.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white border border-neutral-200 rounded-xl shadow-xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700">
                  {item.category}
                </span>

                {item.status === 'live' && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Live
                  </span>
                )}
                {item.status === 'in_progress' && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    <Clock className="w-3.5 h-3.5" />
                    In Progress
                  </span>
                )}
                {item.status === 'planned' && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200">
                    <Calendar className="w-3.5 h-3.5" />
                    Planned
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-neutral-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Target: {item.version}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.status === 'live'
                        ? 'bg-emerald-500'
                        : item.status === 'in_progress'
                        ? 'bg-blue-600'
                        : 'bg-neutral-300'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span className="font-mono text-neutral-700">{item.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
