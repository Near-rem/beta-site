export interface FeatureItem {
  id: string;
  title: string;
  category: 'Core' | 'Interface' | 'Performance' | 'Integration';
  status: 'live' | 'in_progress' | 'planned';
  description: string;
  version: string;
  progress: number;
}

export interface FeedbackSubmission {
  id: string;
  name: string;
  email: string;
  type: 'bug' | 'idea' | 'general';
  message: string;
  submittedAt: string;
  rating: number;
}

export interface ReleaseLog {
  version: string;
  date: string;
  tag: string;
  highlights: string[];
}
