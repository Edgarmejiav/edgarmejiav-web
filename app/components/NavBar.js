'use client'
import { useState, useEffect } from "react";
import { SocialIcons } from "@/app/components/SocialIcons";
import lega from "../edgar.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "Sobre Mí" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/60 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 group" id="nav-logo">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-80 blur transition-opacity duration-300" />
            <Image
              width={34}
              height={34}
              className="relative rounded-full border border-neutral-700"
              src={lega?.src}
              alt="Edgar"
            />
          </div>
          <span className="text-white font-bold text-sm hidden sm:block">
            Edgar<span className="text-cyan-400">MejiaV</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + Available badge */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center">
            <SocialIcons />
          </div>
          <Link
            href="https://www.linkedin.com/in/legamejiav/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-500/20 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            Open to work
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/60 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/60 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-neutral-800/60 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
