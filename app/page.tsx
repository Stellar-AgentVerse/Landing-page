"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [revenue, setRevenue] = useState(1248590);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const underConstructionRef = useRef<HTMLDivElement>(null);

  const handleUnderConstruction = () => setShowUnderConstruction(true);
  const handleCloseUnderConstruction = () => setShowUnderConstruction(false);

  // Revenue ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.random() * 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Glass card mouse tracking
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".glass-card");
    const handler = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => handler(e, card));
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (e) =>
          handler(e as MouseEvent, card),
        );
      });
    };
  }, []);

  // Close modal on Escape or click outside
  useEffect(() => {
    if (!showUnderConstruction) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseUnderConstruction();
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        underConstructionRef.current &&
        !underConstructionRef.current.contains(e.target as Node)
      ) {
        handleCloseUnderConstruction();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    // delay outside-click to avoid the same click that opened it
    setTimeout(() => document.addEventListener("click", onClickOutside), 100);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
    };
  }, [showUnderConstruction]);

  const formattedRevenue = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.floor(revenue));

  return (
    <>
      {/* ========== TOP APP BAR ========== */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="AgentVerse Logo"
              className="h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCp43Z0Y8feFts84-zMuB_BPxLzJ4Hvh9MC3FsuIrSl6hgDxnF2dHA5K-4NuLwHwDFWb5RDXozjJWrZ7zcznpYMWSHpITSXhnTzeUSTIRcMWeftcWwKzz74auDxW_uXlpFvgqgQoTSwwAYblVSVpp7_ekk93fTlGXFVyEcMaNL0nOCXiqRrl276PCdOpx_zDT2BlydodLzQaNKOX4ZVj0iVh567HXtWHlwPer32oYn7OHu5Sjwslob6rt2g2J0blYNS9uW8r_p2wX"
            />
            <span className="font-heading text-3xl font-bold tracking-tighter text-primary hidden sm:block">
              AgentVerse
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleUnderConstruction}
              className="font-label text-label-sm px-4 py-2 rounded-full border border-outline text-on-surface hover:text-primary transition-colors duration-300 active:scale-95"
            >
              Launch App
            </button>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* ========== BACKGROUND ATMOSPHERE ========== */}
        <div className="fixed inset-0 pointer-events-none stellar-gradient z-0" />

        {/* ========== HERO ========== */}
        <section className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-label text-label-sm text-accent uppercase tracking-widest">
              V1.0 Live on Stellar
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-headline-md md:text-display-xl text-primary mb-6 leading-tight font-heading font-bold">
            The Economy of <span className="text-accent italic">AI Agents</span>
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Discover, deploy, and monetize AI assets on the first decentralized
            marketplace powered by Stellar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={handleUnderConstruction}
              className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 flex items-center justify-center gap-2 group"
            >
              Explore Marketplace
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={handleUnderConstruction}
              className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95"
            >
              Become a Creator
            </button>
          </div>

          {/* Social Proof */}
          {/*   <div className="mt-20 pt-10 border-t border-outline-variant/10 w-full"> */}
          {/*     <p className="font-label text-label-sm text-on-surface-variant/60 mb-8 uppercase tracking-widest"> */}
          {/*       Trusted by 500+ AI Developers */}
          {/*     </p> */}
          {/*     <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"> */}
          {/*       <div className="flex items-center gap-2"> */}
          {/*         <span */}
          {/*           className="material-symbols-outlined" */}
          {/*           style={{ fontVariationSettings: "'FILL' 1" }} */}
          {/*         > */}
          {/*           deployed_code */}
          {/*         </span> */}
          {/*         <span className="font-bold">CYPHER</span> */}
          {/*       </div> */}
          {/*       <div className="flex items-center gap-2"> */}
          {/*         <span */}
          {/*           className="material-symbols-outlined" */}
          {/*           style={{ fontVariationSettings: "'FILL' 1" }} */}
          {/*         > */}
          {/*           memory */}
          {/*         </span> */}
          {/*         <span className="font-bold">NEURA</span> */}
          {/*       </div> */}
          {/*       <div className="flex items-center gap-2"> */}
          {/*         <span */}
          {/*           className="material-symbols-outlined" */}
          {/*           style={{ fontVariationSettings: "'FILL' 1" }} */}
          {/*         > */}
          {/*           terminal */}
          {/*         </span> */}
          {/*         <span className="font-bold">SYNTH</span> */}
          {/*       </div> */}
          {/*       <div className="flex items-center gap-2"> */}
          {/*         <span */}
          {/*           className="material-symbols-outlined" */}
          {/*           style={{ fontVariationSettings: "'FILL' 1" }} */}
          {/*         > */}
          {/*           hub */}
          {/*         </span> */}
          {/*         <span className="font-bold">ORBIT</span> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*   </div> */}
        </section>

        {/* ========== BENTO FEATURE GRID ========== */}
        <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature — Autonomous Agents */}
            <div className="md:col-span-8 glass-card rounded-xl p-12 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent text-2xl">
                    smart_toy
                  </span>
                </div>
                <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
                  Autonomous Agents
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  Deploy specialized AI agents that execute complex tasks,
                  handle customer support, or manage trading strategies 24/7.
                </p>
              </div>
              <div className="mt-12 -mb-12 -mr-12 opacity-20 group-hover:opacity-40 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="rounded-tl-xl w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZM5hOvUOCdXDfOJM4fayKxIzzKB_FRJc-2xSQI1MEuHSniT1iw_T-Zwhx-4sIf7qeY0T7j2tR00R0RsAJcSdGahYAJR_XS0oIpxcWeOvGcUjfSqo5_WnaSonn_A0vUnQkJ87lAeyZ0LNJ2Da7UBhIVH8hrMB-qobe9nA3fZflMtkL-cdHJ_ZzFSxqFJwRBsnIagJH3yJuOT19gM0WiypD8qkaQewwi74k3IDLuYJUPqL66nUlnk2h96T7T5TqcnUw4mNfArXOF7wU"
                />
              </div>
            </div>

            {/* Small Feature — Prompt Library */}
            <div className="md:col-span-4 glass-card rounded-xl p-12 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  terminal
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
                Prompt Library
              </h3>
              <p className="text-on-surface-variant">
                Access a curated marketplace of high-performance prompt
                engineering templates for LLMs.
              </p>
            </div>

            {/* Small Feature — Secure Datasets */}
            <div className="md:col-span-4 glass-card rounded-xl p-12 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  database
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
                Secure Datasets
              </h3>
              <p className="text-on-surface-variant">
                Trade proprietary training data through encrypted decentralized
                storage layers.
              </p>
            </div>

            {/* Large Feature — Complex Workflows */}
            <div className="md:col-span-8 glass-card rounded-xl p-12 flex flex-col md:flex-row gap-6 group items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent text-2xl">
                    account_tree
                  </span>
                </div>
                <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
                  Complex Workflows
                </h3>
                <p className="text-on-surface-variant">
                  Chain multiple agents and datasets into seamless automated
                  pipelines with visual drag-and-drop logic.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video glass-card rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                  <span className="material-symbols-outlined text-accent text-6xl opacity-50">
                    schema
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== REVENUE SECTION ========== */}
        <section className="relative z-10 bg-surface-container-low/50 py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-8 leading-tight">
                Build Once. <br />
                <span className="text-accent">Earn Forever.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent text-sm">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Pay-Per-Use Economy
                    </h4>
                    <p className="text-on-surface-variant">
                      Set your own rates. Get paid every time your AI agent or
                      workflow is invoked by an API.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent text-sm">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Micro-Payments via Stellar
                    </h4>
                    <p className="text-on-surface-variant">
                      Settlements happen in seconds with near-zero fees,
                      enabling profitable sub-cent transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Revenue Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
              <div className="relative glass-card p-8 rounded-2xl border-accent/20">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-label text-label-sm text-accent uppercase tracking-widest">
                    Live Revenue Stream
                  </span>
                  <span className="text-on-surface-variant font-label text-label-sm">
                    TRANS ID: 8829...0x11
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-on-surface-variant">
                      Market Analyst Agent
                    </span>
                    <span className="font-bold text-accent">+0.005 XLM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-on-surface-variant">
                      GPT-4 Turbo Prompt
                    </span>
                    <span className="font-bold text-accent">+0.002 XLM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10 scale-105 shadow-2xl">
                    <span className="text-on-surface-variant">
                      Legal Document Parser
                    </span>
                    <span className="font-bold text-accent">+0.015 XLM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-on-surface-variant">
                      Sentiment Dataset #12
                    </span>
                    <span className="font-bold text-accent">+0.008 XLM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STELLAR SECTION ========== */}
        <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Stellar"
              className="w-16 h-16 object-contain grayscale brightness-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFHp5xKegSr1SwR8uQgQd60tTJJ7JKHQp8E1L8vWmyyaX2WXEHBXOxnjC33Ws64QTj6zqdSKaohvLzW8wiRA3JXXl6YhUh0eO87zSioZ87yO0TVNY1EjjoOgJg-YD-6ldPMv4pwhz2wQM5QcVyOPmq1RK7XoepurWF5qpnLjG7otkvRpLTnnibwiqpy6WSG8TkyJ84SczZNmRHs9APoNO-RY0llpSz4qPWGM6-8IFDa1UVccK60qL7VaQNoYroPIqvIYeRU98ZB-ZE"
            />
          </div>
          <h2 className="font-heading text-headline-lg font-bold text-primary mb-6">
            Powered by the Stellar Network
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
            AgentVerse leverages Stellar&apos;s low-cost, high-speed
            infrastructure to provide instant liquidity and ownership
            transparency for digital intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
                bolt
              </span>
              <h4 className="font-bold text-xl text-primary mb-2">
                3s Settlement
              </h4>
              <p className="text-on-surface-variant text-sm">
                Instant payouts for every API call your agent completes.
              </p>
            </div>
            <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
                lock
              </span>
              <h4 className="font-bold text-xl text-primary mb-2">
                Decentralized Trust
              </h4>
              <p className="text-on-surface-variant text-sm">
                Verify the integrity of every agent via on-chain history.
              </p>
            </div>
            <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
                public
              </span>
              <h4 className="font-bold text-xl text-primary mb-2">
                Global Scale
              </h4>
              <p className="text-on-surface-variant text-sm">
                Deploy to a global audience without currency friction.
              </p>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-headline-md font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                <span className="font-bold text-primary">
                  How do I start earning?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant">
                Simply upload your AI agent&apos;s endpoint or prompt template.
                Set your price per invocation, and AgentVerse handles the escrow
                and instant distribution via Stellar.
              </div>
            </details>
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                <span className="font-bold text-primary">
                  Do I need crypto to use it?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant">
                While the backend runs on Stellar, our built-in ramp allows you
                to pay with standard payment methods or XLM directly.
              </div>
            </details>
            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                <span className="font-bold text-primary">
                  How are the agents hosted?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant">
                AgentVerse supports both external endpoints (self-hosted) and
                our integrated serverless deployment for creators who want a
                hands-off experience.
              </div>
            </details>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="relative z-10 px-6 py-20 md:py-32">
          <div className="max-w-7xl mx-auto glass-card rounded-2xl p-12 md:p-32 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-8 relative z-10">
              Start Your <br />
              <span className="text-accent">AI Business Today.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button
                onClick={handleUnderConstruction}
                className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 text-lg"
              >
                Launch Dashboard
              </button>
              <button
                onClick={handleUnderConstruction}
                className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95 text-lg"
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="relative z-10 w-full py-12 border-t border-outline-variant/10 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="AgentVerse Logo"
                className="h-8 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCp43Z0Y8feFts84-zMuB_BPxLzJ4Hvh9MC3FsuIrSl6hgDxnF2dHA5K-4NuLwHwDFWb5RDXozjJWrZ7zcznpYMWSHpITSXhnTzeUSTIRcMWeftcWwKzz74auDxW_uXlpFvgqgQoTSwwAYblVSVpp7_ekk93fTlGXFVyEcMaNL0nOCXiqRrl276PCdOpx_zDT2BlydodLzQaNKOX4ZVj0iVh567HXtWHlwPer32oYn7OHu5Sjwslob6rt2g2J0blYNS9uW8r_p2wX"
              />
              <span className="font-heading text-headline-md font-bold text-primary">
                AgentVerse
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              The decentralized future of artificial intelligence commerce.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Platform
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Marketplace
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Creators
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Stellar
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Resources
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                API Reference
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Legal
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-outline-variant/5">
          <p className="font-label text-label-sm text-on-surface-variant/40">
            &copy; 2024 AgentVerse. Powered by Stellar.
          </p>
        </div>
      </footer>

      {/* ========== UNDER CONSTRUCTION MODAL ========== */}
      {showUnderConstruction && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            ref={underConstructionRef}
            className="relative glass-card rounded-2xl p-12 md:p-16 max-w-lg mx-6 text-center"
          >
            {/* Close button */}
            <button
              onClick={handleCloseUnderConstruction}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-accent text-4xl">
                construction
              </span>
            </div>

            <h3 className="font-heading text-headline-md font-bold text-primary mb-4">
              🚧 En construcción
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              Estamos preparando esta sección. Muy pronto vas a poder explorar
              todo lo que AgentVerse tiene para ofrecer.
            </p>
            <div className="w-16 h-1 bg-accent/30 rounded-full mx-auto mb-6" />
            <p className="text-label-sm text-on-surface-variant/60 font-label">
              Mientras tanto,
              <br />
              <span className="text-accent">agendá una demo</span> o seguinos en
              nuestras redes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
