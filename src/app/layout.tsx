import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EpiMigrApp — Medicina Predictiva Neurológica",
  description: "El primer ecosistema de medicina predictiva enfocado en Epilepsia y Migraña. EpiMigrApp anticipa crisis neurológicas usando IA, wearables y algoritmos clínicos avanzados (XAI).",
  icons: {
    icon: [
      { url: "/epimigrapp-website/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/epimigrapp-website/favicon.svg",
  },
  openGraph: {
    title: "EpiMigrApp — Medicina Predictiva Neurológica",
    description: "Anticipa crisis de Epilepsia y Migraña con IA clínica de grado médico.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased bg-brand-navy text-slate-50 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
