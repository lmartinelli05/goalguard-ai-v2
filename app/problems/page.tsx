import React from 'react';

export default function ProblemsPage() {
  return (
    <main className="min-h-screen bg-slate-light text-slate-dark">
      <section className="py-20 px-6 bg-slate-dark text-white text-center">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">THE GAP IN COACHING</h1>
        <p className="text-xl opacity-80">Why traditional analysis is failing modern goalkeepers.</p>
      </section>
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="p-8 bg-white rounded-3xl border-l-8 border-red-500 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-600">The Subjectivity Trap</h2>
            <p className="text-slate-medium leading-relaxed">
              For decades, goalkeeping has been coached by "feeling". A coach says "you were too slow to react" or "your positioning was off". But "off" by how many centimeters? "Slow" by how many milliseconds? Without data, the athlete is fighting a ghost.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl border-l-8 border-primary shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-primary">The Data Revolution</h2>
            <p className="text-slate-medium leading-relaxed">
              GoalGuard AI removes the doubt. We provide the exact angle of the torso relative to the goal line. We measure the distance of the leap. We provide a mathematical proof of performance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
EOF
