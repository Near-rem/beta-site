import React from 'react';
import { Cpu, Globe, Server, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const SystemHealth: React.FC = () => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Runtime Environment & Health</h2>
          <p className="text-sm text-neutral-500 mt-0.5">
            Active container specifications and host architecture compliance
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Container Operational
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-1">
            <Server className="w-4 h-4 text-blue-600" />
            <span>Target Port</span>
          </div>
          <p className="text-base font-semibold text-neutral-900 font-mono">3000</p>
          <p className="text-xs text-neutral-500 mt-1">Host bound to 0.0.0.0</p>
        </div>

        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-1">
            <Cpu className="w-4 h-4 text-purple-600" />
            <span>Node.js Engine</span>
          </div>
          <p className="text-base font-semibold text-neutral-900 font-mono">v22.23 (LTS)</p>
          <p className="text-xs text-neutral-500 mt-1">npm 10 package manager</p>
        </div>

        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-1">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Applet Core</span>
          </div>
          <p className="text-base font-semibold text-neutral-900 font-mono">Vite + React 18</p>
          <p className="text-xs text-neutral-500 mt-1">Single-page modern bundle</p>
        </div>

        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Sandboxed State</span>
          </div>
          <p className="text-base font-semibold text-neutral-900 font-mono">AI Studio Secure</p>
          <p className="text-xs text-neutral-500 mt-1">Nginx reverse-proxy routed</p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-neutral-400" />
          <span>Source Repository:</span>
          <span className="font-mono text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded">Near-rem/beta-site</span>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-neutral-400" />
          <span>Reverse Proxy: Port 3000 &rarr; Ingress 8080</span>
        </div>
      </div>
    </div>
  );
};
