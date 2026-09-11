import React, { useState } from 'react';
import { FeedbackSubmission } from '../types.ts';
import { Send, Bug, Lightbulb, MessageSquare, Star, Check } from 'lucide-react';

const initialFeedback: FeedbackSubmission[] = [
  {
    id: 'fb-1',
    name: 'Paulo M.',
    email: 'paulorcmfilho@gmail.com',
    type: 'idea',
    message: 'Initial repository migration setup complete. Looking forward to adding core business logic.',
    submittedAt: 'Today at 5:16 AM',
    rating: 5,
  },
  {
    id: 'fb-2',
    name: 'Internal QA',
    email: 'qa@example.com',
    type: 'general',
    message: 'Dev server responds with clean HTTP 200 on port 3000. Fast asset load times verified.',
    submittedAt: 'Today at 5:18 AM',
    rating: 5,
  },
];

export const FeedbackSection: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<FeedbackSubmission[]>(initialFeedback);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState<'bug' | 'idea' | 'general'>('idea');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newEntry: FeedbackSubmission = {
      id: `fb-${Date.now()}`,
      name: name.trim() || 'Anonymous Tester',
      email: email.trim() || 'tester@beta-site.local',
      type,
      message: message.trim(),
      submittedAt: 'Just now',
      rating,
    };

    setFeedbackList([newEntry, ...feedbackList]);
    setMessage('');
    setName('');
    setEmail('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 bg-white p-6 border border-neutral-200 rounded-xl shadow-xs">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-neutral-900">Tester Feedback Form</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Report bugs, request additions, or submit observations directly to the beta maintainers.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <p className="font-semibold text-sm">Feedback recorded successfully!</p>
              <p className="text-xs text-emerald-600 mt-0.5">Thank you for helping polish this beta release.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Feedback Category</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bug', label: 'Bug Report', icon: Bug },
                  { id: 'idea', label: 'Feature Idea', icon: Lightbulb },
                  { id: 'general', label: 'General', icon: MessageSquare },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id as any)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        type === item.id
                          ? 'border-blue-600 bg-blue-50 text-blue-800'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tester Name"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Satisfaction Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 rounded hover:bg-neutral-100 transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-neutral-500 ml-2">
                  {rating === 5 ? '5/5 - Great experience' : `${rating}/5`}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Detailed Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What did you observe or what would you like to see improved?"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Beta Feedback</span>
            </button>
          </form>
        )}
      </div>

      <div className="lg:col-span-7 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">
            Tester Feed ({feedbackList.length})
          </h3>
          <span className="text-xs text-neutral-500 font-medium">Updated live in session</span>
        </div>

        <div className="space-y-3">
          {feedbackList.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white border border-neutral-200 rounded-xl shadow-xs"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-neutral-900">{item.name}</span>
                    <span className="text-xs text-neutral-400">•</span>
                    <span className="text-xs text-neutral-500">{item.submittedAt}</span>
                  </div>
                  <span className="text-xs text-neutral-500">{item.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.type === 'bug'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : item.type === 'idea'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
