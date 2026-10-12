"use client";

import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { flagshipProject, secondaryProjects } from "@/data/projects";
import { Github, ExternalLink, Code2 } from "lucide-react";

export const FeaturedWorkSection: React.FC = () => {
  return (
    <section
      id="work"
      aria-label="Featured Work & Projects"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-surface-border/50"
    >
      <div className="space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-border/60 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
                02 / FEATURED WORK & SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              VERIFIED GITHUB PROJECTS
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Production-ready platforms, conversational AI systems, mathematical game architectures, and creative interface laboratories sourced directly from verified public repositories.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="font-mono text-xs text-text-muted border border-surface-border px-3.5 py-1.5 rounded-lg bg-surface/60 backdrop-blur-sm flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-accent" />
              <span>04 PUBLIC REPOSITORIES</span>
            </div>
          </div>
        </div>

        {/* Flagship Project Showcase */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-text-muted px-1">
            <span className="text-accent uppercase tracking-wider font-semibold">
              FLAGSHIP ARCHITECTURE
            </span>
            <span>SYSTEM 01 OF 04</span>
          </div>

          <ProjectCard
            project={flagshipProject}
            isFlagship={true}
            className="w-full"
          />
        </div>

        {/* Additional Project Gallery Grid (3 Columns on Desktop) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between font-mono text-xs text-text-muted border-t border-surface-border/60 pt-6 px-1">
            <span className="text-accent uppercase tracking-wider font-semibold">
              ENGINEERED REPOSITORY GALLERY
            </span>
            <span>SYSTEMS 02–04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFlagship={false}
              />
            ))}
          </div>
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="p-6 sm:p-8 rounded-xl border border-surface-border bg-gradient-to-r from-surface/70 via-surface/40 to-surface/70 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-text-primary">
              Looking for more repositories and commits?
            </h4>
            <p className="text-xs text-text-muted">
              Inspect full commit histories, issues, pull requests, and automated workflows on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/polanibusinessconsultancy-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-surface-border bg-surface text-text-primary font-mono text-xs font-semibold hover:border-accent hover:text-accent transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>Visit @polanibusinessconsultancy-cpu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
