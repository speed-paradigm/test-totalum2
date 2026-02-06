"use client";

import { useState, useEffect } from "react";

export default function Main() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center p-6">
      <div
        className={`text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-lg mx-auto">
          {/* Greeting Icon */}
          <div className="mb-6">
            <span className="text-7xl">👋</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Hello World
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Welcome to your new application, built with Next.js and Totalum.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mb-8" />

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="text-white font-semibold text-sm mb-1">Framework</h3>
              <p className="text-white/70 text-sm">Next.js + React</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="text-white font-semibold text-sm mb-1">Styling</h3>
              <p className="text-white/70 text-sm">Tailwind CSS</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="text-white font-semibold text-sm mb-1">Database</h3>
              <p className="text-white/70 text-sm">Totalum Platform</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="text-white font-semibold text-sm mb-1">Language</h3>
              <p className="text-white/70 text-sm">TypeScript</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/50 text-sm mt-8">
          Powered by Totalum
        </p>
      </div>
    </div>
  );
}
