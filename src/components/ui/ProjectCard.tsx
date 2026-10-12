"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
  isFlagship?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
  isFlagship = false,
}) => {
  if (isFlagship) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative rounded-2xl border border-surface-border bg-gradient-to-b from-surface/90 via-surface/50 to-background/95 overflow-hidden hover:border-accent/60 transition-all duration-300 shadow-2xl shadow-black/40 hover:shadow-accent/5 ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Showcase Panel (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-gradient-to-br from-background via-surface/40 to-background/90 border-b lg:border-b-0 lg:border-r border-surface-border/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            {/* Ambient Lighting & Grid */}
            <div
              className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #4D7CFE 1px, transparent 1px), linear-gradient(to right, #272C36 1px, transparent 1px), linear-gradient(to bottom, #272C36 1px, transparent 1px)`,
                backgroundSize: "28px 28px, 56px 56px, 56px 56px",
              }}
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all" />

            {/* Header Telemetry */}
            <div className="relative z-10 flex items-center justify-between font-mono text-xs">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold tracking-wider uppercase text-[11px]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>{project.badge || "FLAGSHIP PROJECT"}</span>
              </span>
              <span className="text-text-muted/70 tracking-widest text-[11px]">
                {project.year}
              </span>
            </div>

            {/* Central Graphic Composition */}
            <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-surface-border bg-surface/80 backdrop-blur-md flex items-center justify-center text-accent group-hover:border-accent group-hover:scale-105 transition-all shadow-xl shadow-accent/10 p-4">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt || project.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain filter drop-shadow"
                    />
                  ) : (
                    <Cpu className="w-10 h-10" />
                  )}
                </div>
                <Sparkles className="w-4 h-4 text-accent absolute -top-1.5 -right-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-1.5 max-w-sm">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                  REPOSITORY ARCHITECTURE
                </span>
                <span className="text-sm font-semibold text-text-primary block font-mono">
                  {project.repoName}
                </span>
              </div>
            </div>

            {/* Telemetry Footer */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-surface-border/50 font-mono text-[11px] text-text-muted/70">
              <span className="flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>34/34 TESTS VERIFIED</span>
              </span>
              <span>BRANCH // MAIN</span>
            </div>
          </div>

          {/* Details & Action Panel (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-text-muted">
                  PRODUCTION READY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-accent/90 font-medium leading-relaxed">
                {project.tagline}
              </p>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="pt-2 space-y-2.5">
                <span className="font-mono text-xs text-text-muted/90 uppercase tracking-wider block font-semibold">
                  ENGINEERING HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-xs text-text-muted/90 uppercase tracking-wider block font-semibold">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-surface-border bg-surface/80 text-[11px] font-mono text-text-primary group-hover:border-surface-border/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-surface-border/60 flex flex-wrap items-center gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/25 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="w-4 h-4" />
                <span>Explore Source Code</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg border border-surface-border bg-surface text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Standard Gallery Card
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-xl border border-surface-border bg-gradient-to-b from-surface/85 via-surface/40 to-background/95 overflow-hidden flex flex-col justify-between hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 ${className}`}
    >
      {/* Visual Media / Tasteful Blueprint Area */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-background via-surface/40 to-background/90 border-b border-surface-border/80 overflow-hidden flex flex-col justify-between p-5 select-none">
        {/* Architectural Grid Backdrop */}
        <div
          className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #272C36 1px, transparent 1px), linear-gradient(to bottom, #272C36 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-accent/10 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/20 transition-all" />

        {/* Header Telemetry */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[11px]">
          <span className="text-accent uppercase tracking-wider font-semibold">
            {project.badge || "ENGINEERED SYSTEM"}
          </span>
          <span className="text-text-muted/70">{project.year}</span>
        </div>

        {/* Center Visual Asset */}
        <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center space-y-2.5">
          {project.imageSrc ? (
            <div className="w-16 h-16 rounded-xl border border-surface-border bg-surface/80 flex items-center justify-center p-3 group-hover:border-accent group-hover:scale-105 transition-all shadow-md">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                width={48}
                height={48}
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl border border-surface-border bg-surface/80 flex items-center justify-center text-accent group-hover:border-accent group-hover:scale-105 transition-all shadow-md">
              <Layers className="w-7 h-7" />
            </div>
          )}

          <div className="font-mono text-xs text-text-primary/90 font-medium tracking-wide">
            {project.repoName}
          </div>
        </div>

        {/* Footer Coordinate */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-text-muted/60">
          <span>PUBLIC REPOSITORY</span>
          <span>GITHUB VERIFIED</span>
        </div>
      </div>

      {/* Card Content Information */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="uppercase text-accent font-semibold tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="font-mono text-xs text-accent/80 font-medium">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="pt-2 space-y-1.5">
            {project.highlights.slice(0, 2).map((h) => (
              <div key={h} className="flex items-start space-x-1.5 text-xs text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded border border-surface-border bg-surface/60 text-[10px] font-mono text-text-muted group-hover:text-text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button Footer */}
        <div className="pt-4 border-t border-surface-border/50 flex items-center justify-between">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-text-primary hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>View Source Code</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent hover:underline flex items-center space-x-1"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
