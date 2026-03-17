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
  title: "EpiMigrApp - Medicina Predictiva Neural",
  description: "El primer ecosistema de medicina predictiva enfocado en el cerebro. EpiMigrApp actúa como una barrera preventiva interconectada para migrañas y epilepsia.",
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
