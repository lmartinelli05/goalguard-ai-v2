import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-medium/10 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-dark">
          <Shield className="text-primary" size={28} />
          GOALGUARD <span className="text-primary">AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-slate-medium">
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/problems" className="hover:text-primary transition-colors">The Problem</Link>
          <Link href="/plans" className="hover:text-primary transition-colors">Pricing</Link>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            Start Now
          </button>
        </div>
      </div>
    </nav>
  );
}
