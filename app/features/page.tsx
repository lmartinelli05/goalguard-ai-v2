import React from 'react';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-light text-slate-dark">
      <section className="py-20 px-6 bg-athletic-gradient text-white text-center">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">ELITE FEATURES</h1>
        <p className="text-xl opacity-80">The most advanced tools for goalkeeper analysis.</p>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Biomechanical Overlay</h2>
            <p className="text-slate-medium leading-relaxed">
              Our AI tracks every joint movement in real-time. We don't just see the save; we see the angle of the hips, the extension of the arms, and the timing of the jump. Every frame is converted into a data point.
            </p>
          </div>
          <div className="bg-slate-dark h-64 rounded-3xl flex items-center justify-center text-white italic opacity-50 border-4 border-accent">
            [Biomechanical Overlay Image/Video Placeholder]
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-dark h-64 rounded-3xl flex items-center justify-center text-white italic opacity-50 border-4 border-accent order-2 md:order-1">
            [Curator Panel UI Placeholder]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">The Curator Panel</h2>
            <p className="text-slate-medium leading-relaxed">
              The AI suggests, but the Coach decides. The Curator Panel allows professional analysts to verify AI detections, correct anomalies, and add custom coaching notes to every clip.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
