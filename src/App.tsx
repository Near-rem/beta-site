import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Overview } from './components/Overview.tsx';
import { RoadmapView } from './components/RoadmapView.tsx';
import { FeedbackSection } from './components/FeedbackSection.tsx';
import { ReleaseNotes } from './components/ReleaseNotes.tsx';

export function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'feedback' | 'changelog'>('overview');

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'overview' && (
          <Overview onNavigateTab={(tab) => setActiveTab(tab)} />
        )}
        {activeTab === 'features' && <RoadmapView />}
        {activeTab === 'feedback' && <FeedbackSection />}
        {activeTab === 'changelog' && <ReleaseNotes />}
      </main>

      <footer className="border-t border-neutral-200 bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Beta Site. Imported from GitHub repository Near-rem/beta-site.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Environment Healthy
            </span>
            <span>Port 3000</span>
            <span>Node 22</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
