import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-light">
      <section className="bg-athletic-gradient text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tighter">
          GOALGUARD <span className="text-accent">AI</span>
        </h1>
        <p className="text-xl mb-8 opacity-90">The Future of Goalkeeping Analysis</p>
        <button className="bg-accent text-slate-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          Start Analyzing Now
        </button>
      </section>
      
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-2">Biomechanical Overlay</h3>
          <p className="text-slate-medium">Real-time angle measurements and body position tracking.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-2">Performance Reports</h3>
          <p className="text-slate-medium">Instant, professional PDF reports with identified strengths.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-2">Curator Panel</h3>
          <p className="text-slate-medium">An analyst-first interface for coaches to verify and refine data.</p>
        </div>
      </section>
    </main>
  );
}
