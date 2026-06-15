"use client";

import FeatureCard from "./FeatureCard";

export default function BentoGrid() {
  return (
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
              Deploy specialized AI agents that execute complex tasks, handle
              customer support, or manage trading strategies 24/7.
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

        <FeatureCard
          className="md:col-span-4"
          icon="terminal"
          title="Prompt Library"
          description="Access a curated marketplace of high-performance prompt engineering templates for LLMs."
        />

        <FeatureCard
          className="md:col-span-4"
          icon="database"
          title="Secure Datasets"
          description="Trade proprietary training data through encrypted decentralized storage layers."
        />

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
  );
}
