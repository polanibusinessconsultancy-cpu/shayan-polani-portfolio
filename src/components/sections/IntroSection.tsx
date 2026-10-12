"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Terminal, Bot, ShoppingBag, Compass } from "lucide-react";

const capabilities = [
  {
    index: "01",
    title: "Web Development",
    icon: Code2,
    desc: "Modern Next.js, React, and TypeScript applications engineered for speed, SEO, modularity, and long-term reliability.",
  },
  {
    index: "02",
    title: "UI/UX Design",
    icon: Layout,
    desc: "Refined digital interfaces focused on simplicity, accessibility, design systems, and user conversion efficiency.",
  },
  {
    index: "03",
    title: "Software Development",
    icon: Terminal,
    desc: "Scalable backend services, RESTful APIs, robust schema modeling, and modular software architecture solutions.",
  },
  {
    index: "04",
    title: "AI & Automation",
    icon: Bot,
    desc: "Smart workflow automations, AI integrations, LLM prompts orchestration, and task optimization scripts.",
  },
  {
    index: "05",
    title: "E-commerce",
    icon: ShoppingBag,
    desc: "Custom storefronts, headless commerce infrastructure, high-converting checkout flows, and catalog management.",
  },
  {
    index: "06",
    title: "Digital Strategy",
    icon: Compass,
    desc: "Product roadmap design, technical architecture auditing, scalable tech stack evaluation, and digital growth leadership.",
  },
];

export const IntroSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Professional Introduction & Capabilities"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-surface-border/50"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex items-center space-x-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
            01 / PERSPECTIVE & EXPERTISE
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight">
              I create digital experiences where design, technology, and business thinking work together.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-text-muted text-base leading-relaxed">
            <p>
              Digital products must bridge artistic elegance with uncompromising engineering precision. Every line of code, pixel placement, and interaction detail should serve a clear strategic purpose.
            </p>
            <p>
              By unifying technical strategy with clean UI design and scalable front-end systems, I deliver platforms built for long-term growth and flawless user experience.
            </p>
          </div>
        </div>

        {/* 6 Capability Areas Grid */}
        <div id="expertise" className="pt-4 space-y-8">
          <div className="flex items-center justify-between border-b border-surface-border/60 pb-4">
            <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase font-semibold">
              CORE CAPABILITY AREAS
            </h3>
            <span className="font-mono text-xs text-accent">06 DISCIPLINES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="p-6 rounded-xl border border-surface-border bg-gradient-to-b from-surface/60 to-surface/20 hover:border-accent/50 hover:from-surface/80 hover:to-surface/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-surface border border-surface-border flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent/40 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-text-muted/60 group-hover:text-accent font-semibold transition-colors">
                        {item.index}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
