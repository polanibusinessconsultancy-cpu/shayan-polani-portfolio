"use client";

import React from "react";
import { Gauge, Eye, ShieldCheck, Search, Info, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    title: "Performance",
    metricId: "CORE_WEB_VITALS",
    icon: Gauge,
    target: "LCP < 1.2s · FID < 50ms · CLS 0",
    desc: "Optimized bundle budgets, server-side streaming, image layout stabilization, and aggressive static prerendering.",
  },
  {
    title: "Accessibility",
    metricId: "WCAG_2.1_AA",
    icon: Eye,
    target: "100% Keyboard & Screen Reader",
    desc: "Semantic HTML5 landmarks, visible focus rings, ARIA roles, skip navigation links, and high-contrast color validation.",
  },
  {
    title: "Best Practices",
    metricId: "SECURITY_AND_STANDARDS",
    icon: ShieldCheck,
    target: "Strict TypeScript · Zero Runtime Errors",
    desc: "Zero-error TypeScript compilation, strict ESLint enforcement, modern HTTP headers, and defensive error boundaries.",
  },
  {
    title: "SEO",
    metricId: "SEARCH_OPTIMIZATION",
    icon: Search,
    target: "Semantic Indexing · OpenGraph",
    desc: "Structured metadata, OpenGraph protocol cards, semantic document hierarchy, and canonical URL structure.",
  },
];

export const PerformanceSection: React.FC = () => {
  return (
    <section
      aria-label="Performance Foundation"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-surface-border/50"
    >
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
                03 / QUALITY BENCHMARKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
              PROOF, NOT PROMISES.
            </h2>
          </div>
          <div className="font-mono text-xs text-text-muted border border-surface-border px-3 py-1.5 rounded bg-surface/50">
            [STANDARDS ARCHITECTURE]
          </div>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-surface-border bg-gradient-to-b from-surface/70 to-surface/30 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg border border-surface-border bg-background flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent/50 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-text-muted/70 tracking-widest uppercase">
                      {item.metricId}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="inline-flex items-center space-x-1.5 mb-3 text-[11px] font-mono text-accent">
                    <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                    <span>{item.target}</span>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between font-mono text-[10px] text-text-muted">
                  <span>AUDIT STATUS</span>
                  <span className="text-accent font-semibold">STANDARDS_ALIGNED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Evidence Notice */}
        <div className="p-5 rounded-xl border border-surface-border bg-surface/40 backdrop-blur-sm flex items-start space-x-3.5 text-text-muted">
          <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs leading-relaxed">
              <strong className="text-text-primary font-semibold">Verification Notice:</strong> Verified performance benchmarks, live Lighthouse audit scores, and production Core Web Vitals reports will be published directly upon final production deployment and client project case study releases.
            </p>
            <p className="text-[11px] font-mono text-text-muted/70">
              Zero fake scores or synthetic benchmarks are generated during development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
