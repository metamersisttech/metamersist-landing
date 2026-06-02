"use client";

import { useState, useEffect } from "react";
import { hero } from "../content";

function AnimatedWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % hero.rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`gradient-text inline-block transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
    >
      {hero.rotatingWords[currentIndex]}
    </span>
  );
}

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Announcement Badge */}
        <div className="mb-8 flex justify-center">
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-badge px-2 py-1 text-sm text-sky-dark transition-colors hover:bg-sky-light/20"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="hidden sm:inline">{hero.badge}</span>
            <span className="sm:hidden">{hero.badgeMobile}</span>
          </a>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-2">
          {hero.headline}
        </h1>

        {/* Animated cycling word */}
        <div className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 h-[1.2em]">
          <AnimatedWord />
        </div>

        {/* Subheading */}
        <p className="text-text-muted text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-6">
          {hero.subheading}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Primary CTA - Solid sky blue */}
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-sky px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-sky-light active:scale-[0.98]"
          >
            {hero.primaryCta.label}
          </a>

          {/* Secondary CTA - Outlined */}
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-semibold text-sky transition-all duration-300 bg-sky/10"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

      </div>
      {/* Dashboard Preview - Pink container */}
      <div className="mx-auto w-full max-w-[95%] h-[70vh] sm:h-[80vh] lg:h-[90vh]">
        <div className="bg-rose h-full rounded-3xl p-4 sm:p-6 lg:p-8">
          {/* White card inside */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Mock dashboard UI */}
            <div className="p-4 sm:p-6">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{hero.dashboard.title}</p>
                    <p className="text-xs text-gray-500">{hero.dashboard.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Live</span>
                </div>
              </div>

              {/* Dashboard content grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {hero.dashboard.metrics.map((metric) => (
                  <div key={metric.label} className="p-3 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="h-32 sm:h-40 bg-gradient-to-r from-sky/5 via-sky/10 to-sky/5 rounded-xl flex items-end justify-around px-4 pb-4">
                <div className="w-6 sm:w-8 bg-sky/30 rounded-t" style={{ height: '40%' }} />
                <div className="w-6 sm:w-8 bg-sky/40 rounded-t" style={{ height: '60%' }} />
                <div className="w-6 sm:w-8 bg-sky/50 rounded-t" style={{ height: '45%' }} />
                <div className="w-6 sm:w-8 bg-sky/60 rounded-t" style={{ height: '80%' }} />
                <div className="w-6 sm:w-8 bg-sky/70 rounded-t" style={{ height: '65%' }} />
                <div className="w-6 sm:w-8 bg-sky rounded-t" style={{ height: '90%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
