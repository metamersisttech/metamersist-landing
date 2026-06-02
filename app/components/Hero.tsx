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
      className={`text-sky inline-block transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
    >
      {hero.rotatingWords[currentIndex]}
    </span>
  );
}

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center md:pt-24 pb-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center py-8">
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
          {/* White card inside - Feedled-style dashboard */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Main content area */}
            <div className="flex flex-1 min-h-0">
              {/* Sidebar - hidden on mobile */}
              <div className="hidden md:flex flex-col w-48 lg:w-56 bg-gray-50 border-r border-gray-100 p-4">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">MetaMersist</span>
                </div>

                {/* Nav items */}
                <nav className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sky/10 text-sky font-medium">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm">Products</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm">Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-sm">Users</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Settings</span>
                  </div>
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Products</h2>
                    <p className="text-sm text-gray-500">4 products · 2.4K+ users · All active</p>
                  </div>
                  <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-sky text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Product
                  </button>
                </div>

                {/* Product cards */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                  {/* FarmerApp */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">FarmerApp</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Live</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">2,400+ active farmers across Maharashtra</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs bg-sky/10 text-sky rounded-full">Marketplace</span>
                        <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">AI</span>
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Live</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end ml-4">
                      <div className="text-2xl font-bold text-gray-900">92</div>
                      <div className="text-xs text-green-600 font-medium">↑42%</div>
                      <button className="mt-2 text-sm text-sky font-medium hover:underline">View →</button>
                    </div>
                  </div>

                  {/* Flyr */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">Flyr</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Soon</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Social connection platform for communities</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs bg-pink-100 text-pink-700 rounded-full">Social</span>
                        <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full">Events</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end ml-4">
                      <div className="text-2xl font-bold text-gray-900">74</div>
                      <div className="text-xs text-green-600 font-medium">↑18%</div>
                      <span className="mt-2 text-sm text-amber-600 font-medium">Coming Soon</span>
                    </div>
                  </div>

                  {/* AI Lawyer */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">AI Lawyer</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">Beta</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Legal guidance accessible for everyone</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full">Legal</span>
                        <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">AI</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end ml-4">
                      <div className="text-2xl font-bold text-gray-900">61</div>
                      <div className="text-xs text-green-600 font-medium">↑6%</div>
                      <span className="mt-2 text-sm text-blue-600 font-medium">Beta Access</span>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-600">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
