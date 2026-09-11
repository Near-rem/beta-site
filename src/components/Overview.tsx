import React, { useState } from 'react';
import { SystemHealth } from './SystemHealth.tsx';
import { ArrowRight, CheckCircle, RefreshCw, Play, Code2 } from 'lucide-react';

interface OverviewProps {
  onNavigateTab: (tab: 'features' | 'feedback' | 'changelog') => void;
}

export const Overview: React.FC<OverviewProps> = ({ onNavigateTab }) => {
  const [testPayload, setTestPayload] = useState('{"message": "Testing beta response", "status": "active"}');
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);

  const runTestSimulation = () => {
    setTestStatus('running');
    setTimeout(() => {
      try {
        const parsed = JSON.parse(testPayload);
        setExecutionOutput(`[Success 200 OK] Handled payload in 18ms:\n${JSON.stringify(parsed, null, 2)}`);
        setTestStatus('success');
      } catch (err: any) {
        setExecutionOutput(`[Error 400 Bad Request] Invalid JSON format: ${err.message}`);
        setTestStatus('idle');
      }
    }, 400);
  };

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Repository Migration Successful
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
            Welcome to the Beta Site Hub
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-6">
            This application has been structured and initialized from{' '}
            <span className="font-semibold text-neutral-800">Near-rem/beta-site</span> into a high-performance
            Node.js and Vite environment. Explore live feature milestones, test real-time state mechanics, or record
            early feedback.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('features')}
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>Explore Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTab('feedback')}
              className="px-4 py-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm font-medium transition-colors"
            >
              Submit Early Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Quick Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white border border-neutral-200 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Release Stage</span>
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">Beta v0.1</p>
          <p className="text-xs text-neutral-500 mt-1">Ready for tester verification</p>
        </div>

        <div className="p-5 bg-white border border-neutral-200 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Source Tree</span>
            <Code2 className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">Branch: main</p>
          <p className="text-xs text-neutral-500 mt-1">Near-rem/beta-site</p>
        </div>

        <div className="p-5 bg-white border border-neutral-200 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Platform Check</span>
            <RefreshCw className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">Port 3000</p>
          <p className="text-xs text-neutral-500 mt-1">Direct reverse-proxy mapped</p>
        </div>
      </div>

      {/* Interactive Sandbox Test */}
      <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Interactive Runtime Tester</h3>
            <p className="text-xs text-neutral-500">
              Verify client-side parsing and event dispatcher in this container preview.
            </p>
          </div>
          <button
            onClick={runTestSimulation}
            disabled={testStatus === 'running'}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-xs transition-colors self-start sm:self-auto disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{testStatus === 'running' ? 'Processing...' : 'Run Simulation'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">JSON Payload Input</label>
            <textarea
              rows={4}
              value={testPayload}
              onChange={(e) => setTestPayload(e.target.value)}
              className="w-full p-3 font-mono text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none bg-neutral-50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">Execution Telemetry Output</label>
            <div className="p-3 h-28 font-mono text-xs border border-neutral-200 rounded-lg bg-neutral-900 text-emerald-400 overflow-auto whitespace-pre">
              {executionOutput || '// Click "Run Simulation" to execute test event'}
            </div>
          </div>
        </div>
      </div>

      {/* System Health Section */}
      <SystemHealth />
    </div>
  );
};
