"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("[HomePage] Page mounted successfully");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-800/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-600/15 to-cyan-700/10 blur-[100px]" />

      {/* Nav */}
      <nav className={`relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm tracking-tight">
            T
          </div>
          <span className="text-lg font-semibold tracking-tight text-white/90">Totalum App</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              Iniciar Sesion
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-white text-black hover:bg-white/90 font-medium px-5 transition-all hover:scale-[1.02]">
              Registrarse
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className={`max-w-3xl transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Plataforma activa
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Bienvenido a tu
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              OOOOOOOOO
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
            Tu plataforma esta lista para construir. Inicia sesion o registrate para comenzar a gestionar tu negocio de forma eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 h-12 text-base transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/20">
                Comenzar ahora
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 h-12 px-8 text-base transition-all">
                Ya tengo cuenta
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mt-24 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Card className="bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Gestion de datos</h3>
              <p className="text-white/40 text-sm leading-relaxed">Organiza y administra toda la informacion de tu negocio desde un solo lugar.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Seguro y confiable</h3>
              <p className="text-white/40 text-sm leading-relaxed">Autenticacion robusta y proteccion de datos integrada en toda la plataforma.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Rapido y eficiente</h3>
              <p className="text-white/40 text-sm leading-relaxed">Rendimiento optimizado para que puedas trabajar sin interrupciones.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 border-t border-white/[0.05] transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">Powered by Totalum</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Politica de privacidad
            </Link>
            <Link href="/terms-of-service" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Terminos de servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
