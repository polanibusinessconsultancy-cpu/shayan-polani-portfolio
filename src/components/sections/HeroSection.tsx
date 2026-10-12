"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Mail, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[75vh] lg:min-h-[72vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Restrained Architectural Grid & Ambient Accent Backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #272C36 1px, transparent 1px), linear-gradient(to bottom, #272C36 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/4 left-1/3 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8 max-w-5xl"
      >
        {/* Category Badge / Sub-label */}
        <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface/70 backdrop-blur-sm text-accent font-mono text-xs tracking-wider uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold">CREATIVE DEVELOPER · DIGITAL PRODUCT BUILDER</span>
          <Sparkles className="w-3.5 h-3.5 opacity-60 ml-1 text-accent hidden sm:inline" />
        </div>

        {/* Large Typography Name & Dynamic Statement */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-text-primary leading-[0.98]">
            SHAYAN POLANI
          </h1>
          <p className="font-mono text-base sm:text-xl lg:text-2xl text-accent font-bold tracking-wide uppercase pt-1 sm:pt-2">
            I THINK. I DESIGN. I BUILD. I OPTIMIZE. I DELIVER.
          </p>
        </div>

        {/* Value Proposition Statement */}
        <p className="max-w-2xl text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed">
          Bridging design aesthetics, robust software architecture, and performance engineering. Creating digital experiences engineered for longevity, accessibility, and high conversion.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            href="#work"
            className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Explore My Work</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-lg border border-surface-border bg-surface/60 backdrop-blur-sm text-text-primary font-semibold text-sm hover:border-accent/60 hover:text-accent transition-all focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Mail className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
            <span>Let’s Work Together</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
