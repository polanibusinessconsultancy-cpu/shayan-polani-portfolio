"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Briefcase, Cpu, User, Mail, Github, Linkedin } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Expertise", href: "#expertise", icon: Cpu },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-surface/90 backdrop-blur-md border-b border-surface-border z-50 flex items-center justify-between px-4 sm:px-6">
      {/* SP Monogram Logo */}
      <Link
        href="#home"
        aria-label="Shayan Polani Home"
        className="w-10 h-10 flex items-center justify-center border border-surface-border rounded bg-background"
      >
        <span className="font-mono text-xs font-bold tracking-widest text-accent">
          SP
        </span>
      </Link>

      <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
        Shayan Polani
      </span>

      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 rounded border border-surface-border text-text-primary hover:text-accent hover:border-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40 flex flex-col justify-between p-6 overflow-y-auto border-t border-surface-border animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-4 p-3 rounded-lg border border-surface-border/50 bg-surface/50 text-text-primary hover:text-accent hover:border-accent/40 transition-all text-lg font-medium"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-surface-border/60 text-center space-y-4">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/polanibusinessconsultancy-cpu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (polanibusinessconsultancy-cpu)"
                className="p-2 rounded border border-surface-border bg-surface text-text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shayan-polani-21288a204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (Shayan Polani)"
                className="p-2 rounded border border-surface-border bg-surface text-text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1 font-mono uppercase tracking-wider">
                CREATIVE DEVELOPER · DIGITAL PRODUCT BUILDER
              </p>
              <p className="text-xs text-text-muted font-mono">
                © {new Date().getFullYear()} Shayan Polani
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
