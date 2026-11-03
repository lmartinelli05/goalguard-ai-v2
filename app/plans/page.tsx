import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-slate-light text-slate-dark">
      <section className="py-20 px-6 bg-athletic-gradient text-white text-center">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">INVEST IN EXCELLENCE</h1>
        <p className="text-xl opacity-80">Professional plans for every level of ambition.</p>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-10 rounded-3xl bg-white border border-slate-medium/20 shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Academy Tier</h3>
          <div className="text-4xl font-black mb-6">€49<span className="text-lg font-normal text-slate-medium">/mo</span></div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary"/> 5 Goalkeepers maximum</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary"/> Standard AI Overlay</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary"/> Monthly PDF Reports</li>
          </ul>
          <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get Started</button>
        </div>
        <div className="p-10 rounded-3xl bg-slate-dark text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent text-slate-dark px-4 py-1 text-xs font-black rounded-bl-xl uppercase">Elite Choice</div>
          <h3 className="text-2xl font-bold mb-2">Professional Tier</h3>
          <div className="text-4xl font-black mb-6">€149<span className="text-lg font-normal opacity-60">/mo</span></div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Unlimited Goalkeepers</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Advanced Real-time Overlay</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Instant PDF Reports</li>
            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Full Curator Panel & Analytics</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-accent text-slate-dark font-black hover:scale-105 transition-all">Go Pro Now</button>
        </div>
      </section>
    </main>
  );
}
