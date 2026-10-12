"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Copy, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "shayanyaqoob1324@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      aria-label="Footer & Contact"
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-surface-border/60"
    >
      <div className="space-y-12">
        {/* Main CTA Banner */}
        <div className="p-8 sm:p-12 rounded-xl border border-surface-border bg-gradient-to-b from-surface/80 to-surface/40 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden group">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-surface-border bg-background/60 text-accent font-mono text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for New Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
              LET’S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Available for full-stack engineering, creative front-end projects, UI design systems, and product consulting. Let’s talk about your next milestone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label="Copy email address to clipboard"
              className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 rounded-lg border border-surface-border bg-surface/60 text-text-muted hover:text-text-primary hover:border-accent/40 transition-all font-mono text-xs focus-visible:ring-2 focus-visible:ring-accent"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Navigation & Monogram */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
          <div className="flex items-center space-x-4">
            <Link
              href="#home"
              aria-label="Shayan Polani Home"
              className="w-10 h-10 flex items-center justify-center border border-surface-border rounded-lg bg-background hover:border-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="font-mono text-xs font-bold tracking-widest text-accent">
                SP
              </span>
            </Link>
            <div>
              <p className="text-sm font-bold text-text-primary">SHAYAN POLANI</p>
              <p className="text-xs text-text-muted font-mono">
                CREATIVE DEVELOPER · DIGITAL PRODUCT BUILDER
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-xs font-mono text-text-muted">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#expertise" className="hover:text-accent transition-colors">
              Expertise
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom Metadata & Social Dock */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-border/40 text-xs font-mono text-text-muted">
          <p>© {new Date().getFullYear()} Shayan Polani. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/polanibusinessconsultancy-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shayan-polani-21288a204/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
