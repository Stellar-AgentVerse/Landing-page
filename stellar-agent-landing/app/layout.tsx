import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentVerse | The Economy of AI Agents",
  description:
    "The world's first decentralized marketplace for high-performance AI agents, workflows, and prompts. Monetize your intelligence assets with instant Stellar settlement.",
  openGraph: {
    title: "AgentVerse | The Economy of AI Agents",
    description:
      "Discover, deploy, and monetize AI assets on the first decentralized marketplace powered by Stellar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} ${geist.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-background font-body text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
