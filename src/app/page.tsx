"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Activity, Brain, Lock, LineChart, Menu, X, Mail, Send,
  Database, CloudRain, Phone, MapPin, Apple, Play, Users, Stethoscope,
  Building2, Server, Globe2, CheckCircle2, BarChart3, Network,
  Fingerprint, ArrowDown, Zap, Radio, Cpu, Heart, Download
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "La Plataforma", href: "#plataforma" },
  { name: "Motor Predictivo", href: "#motor" },
  { name: "Ecosistema B2B", href: "#b2b" },
  { name: "Evidencia Clínica", href: "#evidencia" },
  { name: "Contacto", href: "#contacto" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pacientes" | "doctores" | "clinicas">("pacientes");
  const [contactType, setContactType] = useState("paciente");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B1121] overflow-x-hidden text-slate-50 font-sans">

      {/* ── HEADER ── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-[#0B1121]/90 backdrop-blur-md border-slate-800 py-4" : "bg-transparent border-transparent py-6"}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo → link al home */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] via-[#8B5CF6] to-[#10B981] flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)] group-hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-all">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold text-white tracking-widest uppercase leading-none">EpiMigrApp</span>
              <span className="text-[10px] text-[#10B981] font-mono tracking-widest">ENTERPRISE</span>
            </div>
          </Link>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-800 shrink-0" />
            <a href="https://epimigrapp-web-portal.onrender.com" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-[#4F46E5] hover:text-[#8B5CF6] transition-colors border border-[#4F46E5]/30 px-4 py-2 rounded-full hover:border-[#8B5CF6]/50 hover:bg-[#4F46E5]/10">
              Portal Médico ↗
            </a>
            <Link href="#descargas" className="px-5 py-2.5 bg-white text-[#0B1121] text-sm font-bold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Obtener App
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#0B1121] border-t border-slate-800">
              <div className="px-6 py-6 flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-300 hover:text-white pb-4 border-b border-slate-800/50">
                    {link.name}
                  </Link>
                ))}
                <a href="https://epimigrapp-web-portal.onrender.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-[#4F46E5]">Portal Médico ↗</a>
                <Link href="#descargas" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-[#10B981]">Obtener App →</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative w-full pt-40 pb-20 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MUgwem0wIDM5aDQwdjFIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjQwaDFWMHptMzkgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PC9zdmc+')] opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 border border-[#10B981]/30 bg-[#10B981]/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-bold text-[#10B981] tracking-widest uppercase font-mono">Motor Predictivo v2.2 · Activo</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-white mb-8 leading-[1.05]">
            El Nuevo Estándar en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#10B981]">
              Neurología Predictiva.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            EpiMigrApp combina biometría en tiempo real, algoritmos XAI y datos ambientales para anticipar crisis de Epilepsia y Migraña antes de que ocurran.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="#descargas" className="w-full sm:w-auto px-8 py-4 bg-white text-[#0B1121] font-bold rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
              <Download size={22} /> Pacientes: Obtener App
            </Link>
            <a href="https://epimigrapp-web-portal.onrender.com" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1121] border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-3 hover:scale-105">
              <Stethoscope size={22} className="text-[#10B981]" /> Acceso Portal Médico
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 flex justify-center">
            <Link href="#plataforma" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
              <span className="text-xs font-mono tracking-widest uppercase">Descubrir más</span>
              <ArrowDown size={18} className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── LA PLATAFORMA ── */}
      <section id="plataforma" className="relative w-full py-24 md:py-36 bg-white text-[#0B1121]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#4F46E5] tracking-widest uppercase block mb-4">La Plataforma</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Un Ecosistema Completo de Cuidado Neurológico</h2>
            <p className="text-xl text-slate-600 leading-relaxed">EpiMigrApp no es solo una app. Es una infraestructura médica interconectada que une al paciente, al médico y a la institución en un único sistema predictivo de tiempo real.</p>
          </div>

          {/* Architecture Flow */}
          <div className="mb-20 p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="text-center text-lg font-bold text-slate-500 uppercase tracking-widest mb-10 font-mono">Arquitectura del Sistema</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { icon: Heart, label: "Wearable / Sensor", sub: "Apple Health · Garmin · Fitbit", color: "#10B981" },
                { arrow: true },
                { icon: Cpu, label: "Motor IA (XAI)", sub: "Análisis λ, IPC, ICC en tiempo real", color: "#4F46E5" },
                { arrow: true },
                { icon: Radio, label: "App del Paciente", sub: "React Native · iOS & Android", color: "#8B5CF6" },
                { arrow: true },
                { icon: Globe2, label: "Portal Médico", sub: "Dashboard biométrico B2B", color: "#0B1121" },
              ].map((item, i) =>
                item.arrow ? (
                  <div key={i} className="text-slate-300 text-3xl font-light rotate-90 md:rotate-0 mx-4">→</div>
                ) : (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm w-48 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${item.color}15` }}>
                      {item.icon && <item.icon size={24} style={{ color: item.color }} />}
                    </div>
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* 4 Pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Radio, color: "#10B981", bg: "#ecfdf5", title: "Monitoreo Continuo 24/7", desc: "La app corre en segundo plano capturando señales biométricas sin interrumpir la rutina del paciente." },
              { icon: Zap, color: "#4F46E5", bg: "#eef2ff", title: "Alertas Predictivas", desc: "Notificaciones estructuradas hasta 12 horas antes del evento, con recomendaciones accionables de mitigación." },
              { icon: Lock, color: "#8B5CF6", bg: "#f5f3ff", title: "Privacidad Clínica", desc: "Separación estricta PII vs datos biométricos. Cifrado AES-256. Consentimiento informado versionado con firma digital." },
              { icon: Globe2, color: "#0B1121", bg: "#f1f5f9", title: "Multi-plataforma", desc: "App móvil (iOS/Android), Portal Web para médicos e integración API REST para sistemas hospitalarios (HL7/FHIR)." },
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: p.bg }}>
                  <p.icon size={24} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTOR PREDICTIVO ── */}
      <section id="motor" className="relative w-full py-24 md:py-36 bg-[#0B1121] text-white border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase block mb-4">Motor Predictivo XAI</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Inteligencia Artificial Explicable para Neurología</h2>
            <p className="text-xl text-slate-400 leading-relaxed">No una caja negra: algoritmos que no solo predicen, sino que explican exactamente qué factores biométricos y ambientales están convergiendo hacia una crisis.</p>
          </div>

          {/* Pipeline visual */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20 items-center">
            {[
              { icon: Heart, label: "1. Ingesta", sub: "HRV, EDA, Sueño, Temperatura, Presión atm.", color: "#10B981" },
              { arrow: true },
              { icon: Cpu, label: "2. Feature Engineering", sub: "Vectores de 24/72hs, baseline individual 21 días", color: "#4F46E5" },
              { arrow: true },
              { icon: Brain, label: "3. Modelo XAI", sub: "Pesos: HR×0.30 · EDA×0.25 · HRV×0.25 · History×0.20", color: "#8B5CF6" },
              { arrow: true },
              { icon: BarChart3, label: "4. Risk Score", sub: "IPC + ICC + λ (0.0–1.0)", color: "#F59E0B" },
              { arrow: true },
              { icon: Zap, label: "5. Alerta Clínica", sub: "Push notification + escalación SOS", color: "#EF4444" },
            ].map((item, i) =>
              item.arrow ? (
                <div key={i} className="hidden md:flex justify-center text-slate-600 text-2xl">→</div>
              ) : (
                <div key={i} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                  <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: `${item.color}20` }}>
                    {item.icon && <item.icon size={20} style={{ color: item.color }} />}
                  </div>
                  <div className="font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              )
            )}
          </div>

          {/* Índices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { code: "IPC", name: "Índice de Protección Clínica", range: "0 – 100%", desc: "Mide la fortaleza del escudo homeostático. IPC > 80% = tratamiento óptimo. IPC < 40% = intervención urgente.", color: "#10B981" },
              { code: "ICC", name: "Índice de Condición Clínica", range: "0 – 100", desc: "Evaluación global de biomarcadores. Deriva VFC (Variabilidad de Frecuencia Cardíaca), EDA y señales de sueño en un score unificado.", color: "#4F46E5" },
              { code: "λ", name: "Probabilidad Lambda", range: "0.0 – 1.0", desc: "Probabilidad dinámica de evento en próximas 12h. λ > 0.75 detona el protocolo de alerta crítica y SOS automático.", color: "#8B5CF6" },
            ].map((idx, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors">
                <div className="text-4xl font-black font-mono mb-4" style={{ color: idx.color }}>{idx.code}</div>
                <h3 className="text-xl font-bold mb-2">{idx.name}</h3>
                <div className="text-xs font-mono px-3 py-1 rounded-full inline-block mb-4" style={{ backgroundColor: `${idx.color}20`, color: idx.color }}>Rango: {idx.range}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{idx.desc}</p>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
            <div className="text-xs text-slate-500 mb-4 border-b border-slate-800 pb-3 flex justify-between">
              <span>// ml.service.ts — CORE AI ENGINE</span><span className="text-[#10B981]">● LIVE</span>
            </div>
            <div className="space-y-1.5">
              <div><span className="text-[#8B5CF6]">const</span> analyzeRisk = <span className="text-[#8B5CF6]">async</span> (userId: <span className="text-[#10B981]">string</span>) {`=>`} {'{'}</div>
              <div className="pl-4 text-slate-500">{"// Fusión multimodal: Wearables + Datos climáticos + Historial"}</div>
              <div className="pl-4"><span className="text-[#8B5CF6]">const</span> hrScore = getHRVScore(readings.<span className="text-white">heartRate</span>);   <span className="text-slate-600">{"// peso: 0.30"}</span></div>
              <div className="pl-4"><span className="text-[#8B5CF6]">const</span> edaScore = getEDAScore(readings.<span className="text-white">eda</span>);         <span className="text-slate-600">{"// peso: 0.25"}</span></div>
              <div className="pl-4"><span className="text-[#8B5CF6]">const</span> hrv = deriveHRV(readings);                          <span className="text-slate-600">{"// peso: 0.25"}</span></div>
              <div className="pl-4"><span className="text-[#8B5CF6]">const</span> history = getEpisodeRecency(userId);               <span className="text-slate-600">{"// peso: 0.20"}</span></div>
              <div className="pl-4 mt-2"><span className="text-[#8B5CF6]">const</span> lambda = (hrScore * <span className="text-[#10B981]">0.30</span>) + (edaScore * <span className="text-[#10B981]">0.25</span>) + (hrv * <span className="text-[#10B981]">0.25</span>) + (history * <span className="text-[#10B981]">0.20</span>);</div>
              <div className="pl-4"><span className="text-[#8B5CF6]">if</span> (lambda {'>'} <span className="text-[#10B981]">0.75</span>) <span className="text-[#8B5CF6]">await</span> triggerClinicalAlert(userId, lambda);</div>
              <div className="pl-4"><span className="text-[#8B5CF6]">return</span> {'{ riskLevel, lambda, ipc, icc, factors, explanation }'}</div>
              <div>{'}'}</div>
              <div className="mt-4 text-[#10B981] animate-pulse">{'>'} Benchmark accuracy: 94.2% | val_loss: 0.012 | patients monitored: 1,204</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA B2B (TABS) ── */}
      <section id="b2b" className="relative w-full py-24 bg-white text-[#0B1121]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Un Ecosistema para Cada Rol</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Soluciones específicas para cada eslabón de la cadena de cuidado neurológico.</p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {[
              { key: "pacientes", label: "Para Pacientes", icon: Users },
              { key: "doctores", label: "Para Profesionales", icon: Stethoscope },
              { key: "clinicas", label: "Para Instituciones", icon: Building2 },
            ].map(({ key, label, icon: Icon }) => (
              <button key={key} onClick={() => setActiveTab(key as typeof activeTab)}
                className={`px-8 py-4 rounded-full font-bold text-sm flex items-center gap-3 transition-all ${activeTab === key ? "bg-[#0B1121] text-white shadow-xl" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                <Icon size={18} /> {label}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-14 min-h-[420px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "pacientes" && (
                <motion.div key="pac" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-7">
                    <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full font-bold text-sm">Tu Escudo Personal 24/7</div>
                    <h3 className="text-4xl font-extrabold leading-tight">La tranquilidad de la previsibilidad.</h3>
                    <p className="text-lg text-slate-600">Conecta tu smartwatch y deja que EpiMigrApp vigile en silencio. Recibe alertas preventivas cuando tus biomarcadores convergen hacia un episodio, con tiempo para actuar.</p>
                    <ul className="space-y-4">
                      {[
                        { icon: Lock, t: "Protección Index en tiempo real", d: "Tu porcentaje de homeostasis neurológica visible en un glance." },
                        { icon: Zap, t: "SOS Mode integrado", d: "Un toque notifica a tu red de emergencia con geolocalización exacta." },
                        { icon: Activity, t: "Historial de episodios", d: "Trazabilidad completa de cada crisis con contexto biométrico completo." },
                      ].map(({ icon: Icon, t, d }, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0"><Icon size={18} className="text-[#10B981]" /></div>
                          <div><div className="font-bold">{t}</div><div className="text-sm text-slate-500">{d}</div></div>
                        </li>
                      ))}
                    </ul>
                    <Link href="#descargas" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1121] text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
                      <Download size={18} /> Descargar la App
                    </Link>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-[260px] h-[520px] bg-[#0B1121] rounded-[2.5rem] border-[8px] border-slate-200 shadow-2xl relative overflow-hidden p-5 flex flex-col">
                      <div className="w-24 h-5 bg-slate-700 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />
                      <div className="mt-8 text-white text-sm flex justify-between"><span>EpiMigrApp</span><Activity size={16} className="text-[#10B981]" /></div>
                      <div className="mt-10 flex flex-col items-center">
                        <div className="relative w-36 h-36 rounded-full border-4 border-[#10B981] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                          <div className="text-center"><span className="text-4xl font-light text-white">92</span><span className="text-sm text-slate-400 block">%</span></div>
                          <div className="absolute inset-0 rounded-full border border-[#10B981]/30 animate-ping" />
                        </div>
                        <span className="text-white mt-5 font-bold tracking-widest text-xs uppercase">Escudo Activo</span>
                      </div>
                      <div className="mt-auto space-y-3">
                        <div className="w-full h-14 bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-700" /><div className="flex-1 h-2 bg-slate-600 rounded-full" />
                        </div>
                        <div className="w-full h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-white font-black tracking-[0.3em] text-sm">SOS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "doctores" && (
                <motion.div key="doc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-7">
                    <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full font-bold text-sm">Decisiones Basadas en Evidencia</div>
                    <h3 className="text-4xl font-extrabold leading-tight">Telemedicina de Grado Clínico.</h3>
                    <p className="text-lg text-slate-600">Supervise toda su cohorte de pacientes desde un portal unificado. Reciba alertas Lambda cuando algún paciente supera el umbral de riesgo crítico, con explicación detallada del patrón XAI detectado.</p>
                    <ul className="space-y-4">
                      {[
                        { icon: Brain, t: "XAI Pattern Matching", d: "La IA explica en lenguaje clínico qué factores convergieron hacia el episodio." },
                        { icon: BarChart3, t: "Ajuste Farmacológico Preciso", d: "Measura el impacto de cada prescripción sobre el Clinical Index basal del paciente." },
                        { icon: LineChart, t: "Reportes Exportables", d: "PDF con validez clínica y auditoría de series temporales de biomarcadores." },
                      ].map(({ icon: Icon, t, d }, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0"><Icon size={18} className="text-[#4F46E5]" /></div>
                          <div><div className="font-bold">{t}</div><div className="text-sm text-slate-500">{d}</div></div>
                        </li>
                      ))}
                    </ul>
                    <a href="https://epimigrapp-web-portal.onrender.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white font-bold rounded-full hover:bg-[#4338CA] transition-colors">
                      Acceder al Portal Médico ↗
                    </a>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="w-full bg-[#0B1121] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                      <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="font-mono text-[10px] text-slate-500 ml-3">portal.epimigrapp.com/patients/9482X</span>
                      </div>
                      <div className="p-5 grid grid-cols-2 gap-4">
                        <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-4 relative overflow-hidden h-28">
                          <div className="text-xs text-slate-500 font-mono mb-2">λ Probability — Últimas 48h</div>
                          <svg className="absolute bottom-0 left-0 w-full h-16" preserveAspectRatio="none">
                            <path d="M0 60 Q80 40 160 50 T320 35 T480 55 T600 20 L600 64 L0 64 Z" fill="rgba(79,70,229,0.15)" stroke="#4F46E5" strokeWidth="2" />
                          </svg>
                          <div className="absolute top-3 right-4 text-[#EF4444] text-xl font-mono font-bold">λ 0.83</div>
                        </div>
                        {[["Pacientes Activos", "1,204", "white"], ["Eficacia", "94.2%", "#10B981"]].map(([l, v, c]) => (
                          <div key={l} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <div className="text-xs text-slate-500 mb-1">{l}</div>
                            <div className="font-mono text-2xl font-bold" style={{ color: c }}>{v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "clinicas" && (
                <motion.div key="cli" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-7">
                    <div className="inline-block px-4 py-1 bg-violet-100 text-violet-800 rounded-full font-bold text-sm">Infraestructura Hospitalaria</div>
                    <h3 className="text-4xl font-extrabold leading-tight">Implementación a Escala Institucional.</h3>
                    <p className="text-lg text-slate-600">Integra el motor de Risk Scoring de EpiMigrApp directamente en los sistemas EHR de tu institución mediante API REST / Webhooks seguros. Gestiona cohortes sin límite desde un panel centralizado.</p>
                    <ul className="space-y-4">
                      {[
                        { icon: Database, t: "Manejo Poblacional", d: "Dashboards agregados para identificar demografías en riesgo y optimizar guardias." },
                        { icon: Network, t: "Integración HL7 / FHIR", d: "Compatible con estándares de historia clínica electrónica existentes." },
                        { icon: CheckCircle2, t: "ROI Medible", d: "Reducción de consultas de urgencia no programadas. Mayor retención de pacientes." },
                      ].map(({ icon: Icon, t, d }, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0"><Icon size={18} className="text-[#8B5CF6]" /></div>
                          <div><div className="font-bold">{t}</div><div className="text-sm text-slate-500">{d}</div></div>
                        </li>
                      ))}
                    </ul>
                    <Link href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-bold rounded-full hover:bg-[#7C3AED] transition-colors">
                      Solicitar Demo Institucional
                    </Link>
                  </div>
                  <div className="lg:w-1/2 grid grid-cols-2 gap-5">
                    <div className="bg-[#0B1121] text-white p-7 rounded-2xl flex flex-col gap-4 shadow-xl">
                      <Server className="text-[#8B5CF6]" size={32} />
                      <div className="text-xl font-bold">API REST & Webhooks</div>
                      <p className="text-sm text-slate-400">HL7/FHIR. Integración bidireccional con historias clínicas.</p>
                    </div>
                    <div className="bg-[#4F46E5] text-white p-7 rounded-2xl flex flex-col gap-4 shadow-xl transform translate-y-6">
                      <Globe2 size={32} />
                      <div className="text-xl font-bold">Cohortes Globales</div>
                      <p className="text-sm text-indigo-100">Clustering automático por riesgo para toda la institución.</p>
                    </div>
                    <div className="bg-slate-100 text-[#0B1121] p-7 rounded-2xl flex flex-col gap-4 col-span-2">
                      <BarChart3 className="text-[#0B1121]" size={28} />
                      <div className="text-lg font-bold">Dashboard Poblacional en Tiempo Real</div>
                      <div className="flex gap-2 h-10 items-end">
                        {[30,50,40,70,60,80,55,90,65,75].map((v,i)=>(
                          <div key={i} className="flex-1 bg-[#4F46E5] rounded-t-sm opacity-70" style={{height:`${v}%`}}/>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── EVIDENCIA CLÍNICA ── */}
      <section id="evidencia" className="relative w-full py-24 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#10B981] tracking-widest uppercase block mb-4">Evidencia Clínica</span>
            <h2 className="text-4xl font-bold mb-6">Resultados que Respaldan el Sistema</h2>
            <p className="text-xl text-slate-400">Métricas reales del sistema en entornos de monitoreo clínico supervisado.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[["94.2%", "Precisión Predictiva"], ["12h", "Anticipación promedio a la crisis"], ["1,204", "Pacientes monitoreados activos"], ["< 0.012", "val_loss del modelo ML"]].map(([val, label]) => (
              <div key={label} className="text-center p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-slate-600 transition-colors">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981] mb-3">{val}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: CloudRain, color: "#4F46E5", title: "Contexto Ambiental", quote: '"El sistema cruzó una fuerte caída nocturna en la presión atmosférica con mis niveles bajos de sueño. Recibí la alerta preventiva el lunes por la mañana, evitando un cuadro severo."', trigger: "TRIGGER: ATMOSPHERIC_PRESSURE + HRV_DROP", who: "Paciente con Migraña Crónica, 34 años" },
              { icon: Activity, color: "#10B981", title: "Monitoreo Continuo", quote: '"Dejé de registrar episodios en planillas. EpiMigrApp consume la telemetría en segundo plano y alerta si detecta anomalías. Es delegar la vigilancia al algoritmo mientras yo vivo normal."', trigger: "TRIGGER: CHRONIC_STRESS_PATTERN + SLEEP_FRAGMENTATION", who: "Paciente con Epilepsia Focal, 28 años" },
            ].map(({ icon: Icon, color, title, quote, trigger, who }) => (
              <div key={title} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}20` }}><Icon size={20} style={{ color }} /></div>
                  <h3 className="font-bold text-lg">{title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">{quote}</p>
                <div className="inline-block bg-slate-700 px-3 py-1 rounded text-xs font-mono text-slate-400 mb-2 block">{trigger}</div>
                <div className="text-xs text-slate-500">{who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGURIDAD ── */}
      <section id="seguridad" className="w-full py-20 bg-[#0B1121] text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <Fingerprint className="w-16 h-16 text-[#10B981] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Seguridad Medical-Grade</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">Separación estricta PII versus datos biométricos. Consentimiento Informado versionado con firma digital e IP del paciente. Cifrado AES-256 en reposo y TLS 1.3 en tránsito.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HIPAA Compliant", "GDPR Ready", "AES-256 Encryption", "Auditoría Continua"].map((t) => (
              <div key={t} className="flex flex-col items-center justify-center p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                <CheckCircle2 className="text-[#10B981] mb-3" size={26} /><span className="text-sm font-bold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCARGAS ── */}
      <section id="descargas" className="relative w-full py-24 bg-gradient-to-br from-[#4F46E5] to-[#8B5CF6] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10B981] opacity-20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-mono text-indigo-200 tracking-widest uppercase block mb-4">Descargar la App</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">EpiMigrApp es gratuita para pacientes.</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">Disponible en iOS y Android. Solo necesitás crear tu perfil clínico y conectar tu wearable para empezar.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="#" className="w-full sm:w-auto px-8 py-5 bg-black text-white font-bold rounded-2xl hover:bg-slate-900 transition-all flex items-center gap-4 shadow-2xl hover:scale-105">
              <Apple size={32} className="fill-white shrink-0" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-medium opacity-70 uppercase tracking-widest mb-1">Disponible en</span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-5 bg-black text-white font-bold rounded-2xl hover:bg-slate-900 transition-all flex items-center gap-4 shadow-2xl hover:scale-105">
              <Play size={32} className="fill-white shrink-0" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-medium opacity-70 uppercase tracking-widest mb-1">Disponible en</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[["Gratis", "Para pacientes"], ["iOS & Android", "Multiplataforma"], ["Sin suscripción", "Funciones básicas"], ["+12 países", "Cobertura global"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-extrabold">{v}</div>
                <div className="text-indigo-200 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="relative w-full py-24 bg-[#0B1121] text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase block mb-4">Contacto</span>
            <h2 className="text-4xl font-bold mb-4">Hablemos de Prevención</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Contactanos para implementar EpiMigrApp en tu práctica clínica, participar en programas beta, o solicitar una demo institucional. <strong className="text-white">Respondemos en menos de 48hs.</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-8">
              {[
                { icon: Mail, color: "#10B981", label: "Email", val: "contacto@epimigrapp.com" },
                { icon: Phone, color: "#4F46E5", label: "Partners Clínicos", val: "+54 11 0000-0000" },
                { icon: MapPin, color: "#8B5CF6", label: "Sede Central", val: "Buenos Aires, Argentina\nHealth Tech Hub" },
              ].map(({ icon: Icon, color, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-1" style={{ color }}><Icon size={22} /></div>
                  <div><h4 className="font-semibold">{label}</h4><p className="text-slate-400 text-sm whitespace-pre-line">{val}</p></div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[["Nombre completo", "text", "Dr. Juan Pérez"], ["Email institucional", "email", "juan@hospital.com"]].map(([label, type, ph]) => (
                    <div key={label} className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-medium ml-1">{label}</label>
                      <input type={type} placeholder={ph} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F46E5] transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium ml-1">Tipo de consulta</label>
                    <select value={contactType} onChange={e => setContactType(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F46E5] transition-colors">
                      <option value="paciente">Soy Paciente</option>
                      <option value="medico">Soy Médico / Neurólogo</option>
                      <option value="institucion">Representante Institucional</option>
                      <option value="prensa">Prensa / Medios</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium ml-1">Institución u Hospital</label>
                    <input type="text" placeholder="Hospital Nacional / Clínica XYZ" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F46E5] transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium ml-1">Mensaje</label>
                  <textarea rows={4} placeholder="Describe tu caso de uso o consulta..." className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F46E5] transition-colors resize-none" />
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] hover:opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-opacity shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  Enviar Mensaje <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#050811] border-t border-slate-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="#hero" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#10B981] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all">
                <ShieldCheck size={18} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-widest uppercase text-white">EpiMigrApp</span>
            </Link>
            <p className="max-w-sm leading-relaxed mb-6 text-slate-500">Revolucionando el monitoreo neurológico mediante wearables comerciales y algoritmos predictivos de grado clínico.</p>
            <div className="flex gap-4">
              <a href="mailto:contacto@epimigrapp.com" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors"><Mail size={16} /></a>
              <a href="#contacto" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors"><MapPin size={16} /></a>
            </div>
          </div>
          {[
            { title: "Producto", links: [["La Plataforma", "#plataforma"], ["Motor Predictivo", "#motor"], ["Descargar App", "#descargas"], ["Portal Médico", "https://epimigrapp-web-portal.onrender.com"]] },
            { title: "Investigación", links: [["Algoritmo XAI", "#motor"], ["Índices Clínicos", "#evidencia"], ["Estudios de caso", "#evidencia"], ["API Docs", "#"]] },
            { title: "Legal", links: [["Términos Médicos", "#"], ["Privacidad Clínica", "#"], ["Regulaciones HIPAA", "#"], ["Consentimiento Informado", "#"]] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(([l, h]) => (
                  <li key={l}>
                    {h.startsWith("http") ? (
                      <a href={h} target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981] transition-colors">{l} ↗</a>
                    ) : (
                      <Link href={h} className="hover:text-[#10B981] transition-colors">{l}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} EpiMigrApp Technologies. Todos los derechos reservados.</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#10B981]" /><span>All Systems Operational</span></div>
        </div>
      </footer>
    </main>
  );
}
