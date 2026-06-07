import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Wild West: work & travel - Aventura Ta Americană",
  description:
    "Agenție de Work & Travel premium din România. Programe Work and Travel USA 2027 cu 30% mai ieftin, de 2x mai rapid, fără costuri ascunse. Înscrie-te acum!",
  keywords: [
    "work and travel",
    "work and travel usa",
    "work and travel 2027",
    "agenție work and travel",
    "wild west travel",
    "work and travel România",
  ],
  openGraph: {
    title: "Wild West: work & travel - Aventura Ta Americană",
    description:
      "Aventura ta americană începe aici. Programe Work & Travel mai ieftin, mai rapid, mai simplu.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Rye&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
