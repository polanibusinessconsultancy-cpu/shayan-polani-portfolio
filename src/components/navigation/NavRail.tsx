"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, Cpu, User, Mail, Github, Linkedin, Twitter } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Expertise", href: "#expertise", icon: Cpu },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const NavRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (scrollPosition >= el.offsetTop) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 flex-col justify-between items-center py-6 bg-surface/80 backdrop-blur-md border-r border-surface-border z-40"
      aria-label="Desktop Navigation Rail"
    >
      {/* SP Monogram */}
      <Link
        href="#home"
        aria-label="Shayan Polani Home"
        className="w-12 h-12 flex items-center justify-center border border-surface-border rounded bg-background hover:border-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="font-mono text-sm font-bold tracking-widest text-accent">
          SP
        </span>
      </Link>

      {/* Main Navigation Icons */}
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`group relative flex items-center justify-center p-3 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-accent/10 text-accent border border-accent/30"
                  : "text-text-muted hover:text-text-primary hover:bg-surface-border/50"
              }`}
              aria-label={item.name}
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip on Hover */}
              <span className="absolute left-16 px-2.5 py-1 rounded bg-surface border border-surface-border text-xs text-text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Secondary Social Dock (Small & Subtle) */}
      <div className="flex flex-col space-y-3 pt-4 border-t border-surface-border/60">
        <a
          href="https://github.com/polanibusinessconsultancy-cpu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile (polanibusinessconsultancy-cpu)"
          className="p-2.5 rounded text-text-muted hover:text-accent hover:bg-surface-border/40 transition-all focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/shayan-polani-21288a204/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile (Shayan Polani)"
          className="p-2.5 rounded text-text-muted hover:text-accent hover:bg-surface-border/40 transition-all focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
