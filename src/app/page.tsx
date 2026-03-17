"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Activity, Brain, CloudLightning, Lock, LineChart, ChevronRight, Menu, X, Mail, Send, Database,
  CloudRain, Phone, MapPin, Apple, Play, Users, Stethoscope, Building2, Server, Globe2, ArrowRight,
  Fingerprint, CheckCircle2,
  BarChart3,
  Network
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "La Plataforma", href: "#plataforma" },
  { name: "Motor Predictivo", href: "#motor" },
  { name: "Ecosistema B2B", href: "#b2b" },
  { name: "Evidencia Clínica", href: "#evidencia" },
  { name: "Seguridad", href: "#seguridad" },
  { name: "Contacto", href: "#contacto" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'pacientes' | 'doctores' | 'clinicas'>('pacientes');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-brand-navy selection:bg-brand-indigo/30 overflow-x-hidden text-slate-50 font-sans">

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0B1121]/90 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
        }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] via-[#8B5CF6] to-[#10B981] flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold text-white tracking-widest uppercase leading-none">EpiMigrApp</span>
              <span className="text-[10px] text-[#10B981] font-mono tracking-widest">ENTERPRISE</span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-800 shrink-0" />
            <Link href="/login" className="text-sm font-semibold text-white hover:text-[#10B981] transition-colors">
              Portal Médico
            </Link>
            <Link href="#descargar" className="px-5 py-2.5 bg-white text-[#0B1121] text-sm font-bold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              Obtener App
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} className="md:hidden absolute top-full left-0 w-full bg-[#0B1121] border-t border-slate-800 overflow-y-auto">
              <div className="px-6 py-8 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors block pb-4 border-b border-slate-800/50">
                    {link.name}
                  </Link>
                ))}
                <Link href="/login" className="text-lg font-medium text-[#10B981] mt-4">Acceso Portal Médico</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* OVERSIZED HERO SECTION */}
      <section className="relative w-full pt-40 pb-20 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
        <div className="absolute inset-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4F46E5]/15 via-[#0B1121] to-[#0B1121] pointer-events-none" />
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMzl2MWg0MHYtMXoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz4KPHBhdGggZD0iTTAgMHY0MGgxVjB6bTM5IDB2NDBoMVYweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPgo8L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-4 py-2 border border-[#10B981]/30 bg-[#10B981]/10 rounded-full mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-bold text-[#10B981] tracking-widest uppercase">Motor Predictivo v2.2 - Activo Globalmente</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-white mb-8 leading-[1.05] mx-auto max-w-5xl">
            El Nuevo Estandar en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#10B981]">Neurología Predictiva.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            EpiMigrApp despliega algoritmos clínico-matemáticos (XAI) y biometría en tiempo real para anticipar crisis de Epilepsia y Migraña antes de que ocurran.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0B1121] font-bold rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
              <Apple size={24} className="fill-[#0B1121]" /> Pacientes: Obtener App
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0B1121] border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-3 hover:scale-105">
              <Stethoscope size={24} className="text-[#10B981]" /> Solicitar Demo Médica
            </button>
          </motion.div>
        </div>

        {/* TRUSTED BY BANNER (MOCK) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="relative z-10 max-w-5xl mx-auto mt-24 pt-12 border-t border-slate-800/50 text-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Arquitectura de confianza utilizada en entornos médicos e investigativos</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            <div className="flex items-center gap-2 text-xl font-bold font-serif"><div className="w-6 h-6 rounded-full bg-slate-300" /> NeuroClinic Center</div>
            <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><div className="w-6 h-6 rounded-sm bg-slate-300 rotate-45" /> Global Health Systems</div>
            <div className="flex items-center gap-2 text-xl font-black italic"><div className="w-6 h-6 rounded bg-slate-300" /> EPI-Research EU</div>
          </div>
        </motion.div>
      </section>

      {/* THREE AUDIENCES TABS */}
      <section id="b2b" className="relative w-full py-24 bg-white text-[#0B1121]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Un Ecosistema Integrado</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Soluciones específicas para cada eslabón de la cadena de cuidado neurológico, unificadas por un único núcleo de inteligencia artificial.</p>
          </div>

          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            <button onClick={() => setActiveTab('pacientes')} className={`px-6 md:px-10 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-3 transition-all ${activeTab === 'pacientes' ? 'bg-[#0B1121] text-white shadow-xl' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              <Users size={20} className={activeTab === 'pacientes' ? 'text-[#10B981]' : ''} /> Para Pacientes
            </button>
            <button onClick={() => setActiveTab('doctores')} className={`px-6 md:px-10 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-3 transition-all ${activeTab === 'doctores' ? 'bg-[#0B1121] text-white shadow-xl' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              <Stethoscope size={20} className={activeTab === 'doctores' ? 'text-[#4F46E5]' : ''} /> Para Profesionales
            </button>
            <button onClick={() => setActiveTab('clinicas')} className={`px-6 md:px-10 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-3 transition-all ${activeTab === 'clinicas' ? 'bg-[#0B1121] text-white shadow-xl' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              <Building2 size={20} className={activeTab === 'clinicas' ? 'text-[#8B5CF6]' : ''} /> Para Instituciones
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-16 min-h-[500px] shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 'pacientes' && (
                <motion.div key="pacientes" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-8 relative z-10">
                    <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full font-bold text-sm uppercase tracking-wider mb-2">Tu Escudo 24/7</div>
                    <h3 className="text-4xl font-extrabold text-[#0B1121] leading-tight">La tranquilidad de la previsibilidad.</h3>
                    <p className="text-lg text-slate-600 font-medium">Conecta tu smartwatch (Apple Health, Garmin, Fitbit) y deja que EpiMigrApp analice tu biometría silenciosamente. Recibe alertas tempranas de desviación para tomar tu medicación preventiva a tiempo.</p>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0"><Lock size={20} className="text-[#10B981]" /></div>
                        <div><h4 className="font-bold text-lg">Protección Index</h4><p className="text-slate-600 text-sm">Visualiza tu porcentaje de homeostasis neurológica en tiempo real.</p></div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0"><Activity size={20} className="text-[#10B981]" /></div>
                        <div><h4 className="font-bold text-lg">SOS Mode & Contactos</h4><p className="text-slate-600 text-sm">Si una crisis resulta inminente, un toque notifica de inmediato a tu red de emergencia con tu geolocalización.</p></div>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 w-full flex justify-center relative">
                    {/* Abstract Mobile UI Mockup */}
                    <div className="w-[300px] h-[600px] bg-[#0B1121] rounded-[2.5rem] border-[8px] border-slate-200 shadow-2xl relative overflow-hidden p-6 flex flex-col">
                      <div className="w-1/3 h-6 bg-slate-200 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />
                      <div className="mt-8 flex justify-between items-center text-white"><span className="text-sm">Hola, paciente</span><span className="text-[#10B981]"><Activity size={20} /></span></div>
                      <div className="mt-12 flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full border-4 border-[#10B981] flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                          <div className="text-center">
                            <span className="text-4xl font-light text-white">92</span><span className="text-sm text-slate-400 block mt-1">%</span>
                          </div>
                          <div className="absolute w-full h-full rounded-full border border-[#10B981]/50 animate-ping"></div>
                        </div>
                        <span className="text-white mt-6 font-bold tracking-widest uppercase">Escudo Activo</span>
                      </div>
                      <div className="mt-auto space-y-3">
                        <div className="w-full h-16 bg-slate-800 rounded-2xl p-4 flex items-center text-white justify-between"><div className="w-8 h-8 rounded-full bg-slate-700" /> <div className="w-24 h-2 bg-slate-600 rounded-full" /></div>
                        <div className="w-full h-16 bg-rose-500 rounded-2xl p-4 flex items-center justify-center text-white font-bold tracking-widest">S O S</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'doctores' && (
                <motion.div key="doctores" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-8 relative z-10">
                    <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full font-bold text-sm uppercase tracking-wider mb-2">Decisiones XAI</div>
                    <h3 className="text-4xl font-extrabold text-[#0B1121] leading-tight">Telemedicina Basada en Evidencia.</h3>
                    <p className="text-lg text-slate-600 font-medium">Basta de ensayos y errores basados en anotaciones subjetivas de los pacientes. Accede a un portal clínico que expone series temporales de VFC, saturación, sueño y desencadenantes climáticos usando la Probabilidad Lambda(λ).</p>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#4F46E5]/10 flex items-center justify-center shrink-0"><Brain size={20} className="text-[#4F46E5]" /></div>
                        <div><h4 className="font-bold text-lg">Pattern Matching (XAI)</h4><p className="text-slate-600 text-sm">Modelos "Explainable AI" que no solo escupen un número, sino que explican clínicamente QUÉ factores de riesgo predominan.</p></div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#4F46E5]/10 flex items-center justify-center shrink-0"><BarChart3 size={20} className="text-[#4F46E5]" /></div>
                        <div><h4 className="font-bold text-lg">Ajuste Farmacológico Preciso</h4><p className="text-slate-600 text-sm">Visualiza el impacto exacto de tu prescripción midiendo cómo altera el Clinical Index basal del paciente semana a semana.</p></div>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    {/* Abstract Desktop Dashboard Mockup */}
                    <div className="w-full h-[400px] bg-[#0B1121] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                      <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div><div className="w-3 h-3 rounded-full bg-amber-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-mono text-xs text-slate-500 ml-4">admin.epimigrapp.com/portal/patient/9482</span>
                      </div>
                      <div className="p-6 flex gap-6 h-full">
                        <div className="w-1/4 flex flex-col gap-3">
                          <div className="h-10 bg-slate-800 rounded-lg"></div>
                          <div className="h-32 bg-slate-800 rounded-lg border border-indigo-500/30"></div>
                          <div className="h-10 bg-slate-800 rounded-lg"></div>
                        </div>
                        <div className="w-3/4 flex flex-col gap-4">
                          <div className="h-40 bg-slate-900 border border-slate-800 rounded-lg p-4 relative overflow-hidden">
                            <div className="absolute top-2 left-4 text-xs font-mono text-slate-500">λ Probability Index</div>
                            {/* SVG Graph mocking */}
                            <svg className="absolute bottom-0 left-0 w-full h-24" preserveAspectRatio="none">
                              <path d="M0 80 Q 50 20, 100 60 T 200 40 T 300 70 T 400 30 T 500 50 L 500 100 L 0 100 Z" fill="rgba(79, 70, 229, 0.2)" stroke="#4F46E5" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex gap-4 h-full">
                            <div className="flex-1 bg-slate-800 rounded-lg p-3"><div className="w-1/2 h-3 bg-slate-700 rounded mb-2"></div><div className="w-full h-8 bg-slate-700 rounded"></div></div>
                            <div className="flex-1 bg-slate-800 rounded-lg p-3"><div className="w-1/2 h-3 bg-slate-700 rounded mb-2"></div><div className="w-full h-8 bg-slate-700 rounded"></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'clinicas' && (
                <motion.div key="clinicas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 space-y-8 relative z-10">
                    <div className="inline-block px-4 py-1 bg-violet-100 text-violet-800 rounded-full font-bold text-sm uppercase tracking-wider mb-2">Infraestructura Médica</div>
                    <h3 className="text-4xl font-extrabold text-[#0B1121] leading-tight">Implementación a Escala. Reducción de Crisis.</h3>
                    <p className="text-lg text-slate-600 font-medium">Integra nuestro motor de Risk Scoring directamente a la infraestructura (EHR) de tu hospital mediante webhooks seguros. Clasifica automágicamente a toda la cohorte de pacientes según su nivel de urgencia proyectado.</p>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center shrink-0"><Database size={20} className="text-[#8B5CF6]" /></div>
                        <div><h4 className="font-bold text-lg">Manejo Poblacional</h4><p className="text-slate-600 text-sm">Dashboards agregados para identificar demografías en riesgo, optimizando la asignación de médicos de guardia previendo eventos atmosféricos sistémicos.</p></div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center shrink-0"><Network size={20} className="text-[#8B5CF6]" /></div>
                        <div><h4 className="font-bold text-lg">Retorno de Inversión</h4><p className="text-slate-600 text-sm">Menos consultas no programadas de urgencia. Aumento sustancial en la retención del paciente mediante programas de tratamiento continuo monitoreado.</p></div>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                    <div className="bg-[#0B1121] text-white p-6 rounded-2xl flex flex-col gap-4 shadow-xl">
                      <Server className="text-[#8B5CF6]" size={32} />
                      <div className="text-2xl font-bold">API REST & Webhooks</div>
                      <p className="text-sm text-slate-400">Integración bidireccional en sistemas HL7 / FHIR para historias clínicas.</p>
                    </div>
                    <div className="bg-[#4F46E5] text-white p-6 rounded-2xl flex flex-col gap-4 shadow-xl transform translate-y-8">
                      <Globe2 className="text-white" size={32} />
                      <div className="text-2xl font-bold">Cohortes Globales</div>
                      <p className="text-sm text-indigo-100">Clustering automático mediante IA para descubrir macro-patrones.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MOTOR & EVIDENCIA CLÍNICA (DEEP DIVE) */}
      <section id="evidencia" className="relative w-full py-24 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Auditoría Transparente e Índices Clínicos</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">Epimigrapp no es una "caja negra". Transforma gigabytes de crasa biometría en 3 heurísticas interpretables por neurólogos.</p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-[#10B981] font-mono text-xl font-bold mt-1">IPC</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Índice de Protección Clínica</h4>
                    <p className="text-sm text-slate-400">Representa la fortaleza del escudo homeostático. Valores &gt; 80% revelan eficacia máxima del tratamiento o periodo libre de estrés.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-[#4F46E5] font-mono text-xl font-bold mt-1">ICC</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Índice de Condición Sistémica</h4>
                    <p className="text-sm text-slate-400">Evaluación global de biomarcadores (0-100). Deriva datos crudos como VFC (Variabilidad Frecuencia Cardíaca) o EDA.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-[#8B5CF6] font-mono text-xl font-bold mt-1">λ</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Probabilidad Lambda</h4>
                    <p className="text-sm text-slate-400">Algoritmo predictivo dinámico (Rango 0.0 - 1.0). Cuando λ &gt; 0.75, un evento crítico en las próximas 12 horas es inminente. Detona las notificaciones SOS.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-slate-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo blur-[80px] opacity-20"></div>
              <div className="text-xs text-slate-500 mb-4 border-b border-slate-800 pb-2 flex justify-between">
                <span>// SYSTEM.CORE_AI</span><span>NODE: EU-WEST-1</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-[#8B5CF6]">import</span> <span className="text-white">TimeSeriesTensor</span> <span className="text-[#8B5CF6]">from</span> <span className="text-[#10B981]">'fusion_engine'</span>;</div>
                <div><span className="text-[#8B5CF6]">const</span> calculateLambda = (patientData) =&gt; {'{'}</div>
                <div className="pl-4"><span className="text-slate-500">// Fusión multimodal: Wearables (HR, EDA) + Clima</span></div>
                <div className="pl-4"><span className="text-[#8B5CF6]">const</span> hrv_impact = getHRVScore(patientData.vfc);</div>
                <div className="pl-4"><span className="text-[#8B5CF6]">const</span> weather_impact = analyzeAtmosPressure();</div>
                <div className="pl-4"><span className="text-[#8B5CF6]">const</span> isolation = evaluateSleep(patientData.sleep);</div>
                <br />
                <div className="pl-4"><span className="text-[#8B5CF6]">let</span> probability = xaiModel.predict([hrv_impact, weather_impact, isolation]);</div>
                <div className="pl-4"><span className="text-[#8B5CF6]">if</span> (probability &gt; <span className="text-[#10B981]">0.75</span>) triggerClinicalAlert(patientData.id);</div>
                <div className="pl-4"><span className="text-[#8B5CF6]">return</span> probability;</div>
                <div>{'}'}</div>
                <div className="mt-6 text-[#10B981] animate-pulse">&gt; ML_SERVICE running. Accuracy benchmark: 94.2% (val_loss: 0.012)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY / TRUST SECTION */}
      <section id="seguridad" className="w-full relative py-20 bg-[#0B1121] text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <Fingerprint className="w-16 h-16 text-[#10B981] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Seguridad Medical-Grade</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">La plataforma opera separando estrictamente la PII (Personally Identifiable Information) de los datos biométricos. Cifrado AES-256 en reposo y TLS 1.3 en tránsito.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HIPAA Compliant', 'GDPR Ready', 'AES-256 Encryption', 'Auditoría Continua'].map((t, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <CheckCircle2 className="text-[#10B981] mb-2" size={24} />
                <span className="text-sm font-bold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA GIGANTE & PRECIOS/PLANES */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#4F46E5] to-[#8B5CF6] text-white overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10B981] opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Escala el cuidado Neurológico hoy.</h2>
            <p className="text-xl text-indigo-100 mb-8">Únete a la nueva era de medicina exponencial y reduce el riesgo de crisis imprevistas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl pb-12">
              <h3 className="text-2xl font-bold mb-2">Paciente Personal</h3>
              <div className="text-indigo-200 mb-6 h-12">Uso personal y conexión con wearables.</div>
              <div className="text-4xl font-extrabold mb-8">Gratis <span className="text-lg font-normal text-indigo-200 block mt-1">App Móvil Principal</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Conexión Apple/Google Health</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Dashboards de IPC</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Contactos SOS Limitados (3)</li>
              </ul>
              <button className="w-full p-4 bg-white text-[#4F46E5] rounded-full font-bold hover:bg-slate-100 transition-colors">Descargar Store</button>
            </div>
            {/* Plan 2 */}
            <div className="bg-white p-8 rounded-3xl text-[#0B1121] transform md:scale-105 shadow-2xl border border-indigo-200 pb-12 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#10B981] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Recomendado - Médicos</div>
              <h3 className="text-2xl font-bold mb-2">Licencia Profesional</h3>
              <div className="text-slate-500 mb-6 h-12">Neurólogos independientes que desean monitoreo.</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold">$89</span><span className="text-slate-500 font-medium">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-[#4F46E5]" size={18} /> Pacientes Ilimitados</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-[#4F46E5]" size={18} /> Alertas Lambda (XAI) en Portal</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-[#4F46E5]" size={18} /> Exportación de Reportes PDF/CSV</li>
              </ul>
              <button className="w-full p-4 bg-[#0B1121] text-white rounded-full font-bold hover:bg-slate-800 transition-colors">Iniciar Trial de 14 días</button>
            </div>
            {/* Plan 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl pb-12">
              <h3 className="text-2xl font-bold mb-2">Clínica Enterprise</h3>
              <div className="text-indigo-200 mb-6 h-12">Sistemas de salud y corporaciones médicas.</div>
              <div className="text-4xl font-extrabold mb-8 flex items-end">Variable</div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Integración EHR/HL7 Completa</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Clústeres Predictivos Propios</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} /> Roles y Permisos Avanzados</li>
              </ul>
              <button className="w-full p-4 border border-white text-white rounded-full font-bold hover:bg-white hover:text-[#4F46E5] transition-colors">Contactar Ventas</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAT FOOTER */}
      <footer className="w-full bg-[#050811] border-t border-slate-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={32} className="text-[#4F46E5]" />
              <span className="text-2xl font-black tracking-widest uppercase text-white">EpiMigrApp</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6 text-slate-500">
              Revolucionando el estudio neurológico continuo mediante la amalgama de wearables comerciales y algoritmos Predictivos Escalables.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"><MapPin size={18} /></div>
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"><Mail size={18} /></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Producto</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Para Pacientes</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Para Profesionales</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Precios y Planes</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Changelog v2.2</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Investigación</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Publicaciones Clínicas</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Explicabilidad XAI</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Modelos Lambda</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Términos de Servicio</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Privacidad Clínica</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Regulaciones FDA / HIPPA</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Consentimiento Informado</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} EpiMigrApp Technologies Inc. Todos los derechos comerciales reservados.</div>
          <div className="flex gap-4">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#10B981]"></div> All Systems Operational</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
