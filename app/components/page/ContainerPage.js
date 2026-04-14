'use client'
import Link from "next/link";
import Image from "next/image";
import lega from "../../edgar.png";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "Microservices Architect",
  "Tech Lead",
];

export const ContainerPage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-6 text-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Avatar with glowing ring */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-lime-400 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          width={120}
          height={120}
          className="relative rounded-full border-2 border-neutral-800 shadow-2xl"
          src={lega?.src}
          alt="Edgar Mejía Vásquez"
          priority
        />
      </div>

      {/* Name + Badge */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-400 text-transparent bg-clip-text leading-tight">
          Edgar Mejía<br />
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-lime-400 text-transparent bg-clip-text">
            Vásquez
          </span>
        </h1>

        {/* Typing Role */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium min-h-[2rem]">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white font-mono">{displayed}</span>
          <span className="animate-blink text-cyan-400 font-mono">|</span>
          <span className="text-cyan-400"> /&gt;</span>
        </p>

        <p className="text-slate-400 text-sm flex items-center gap-2">
          <span>📍 Perú</span>
          <span className="text-slate-600">·</span>
          <a
            href="mailto:legamejiav@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            legamejiav@gmail.com
          </a>
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="mailto:legamejiav@gmail.com"
          id="cta-contact"
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-900/40 hover:shadow-cyan-900/60 hover:scale-105 transition-all duration-300"
        >
          <span>✉️</span> Contáctame
        </a>
        <a
          href="https://www.linkedin.com/in/legamejiav/"
          target="_blank"
          rel="noopener noreferrer"
          id="cta-linkedin"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-neutral-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:scale-105 transition-all duration-300 bg-neutral-900/50 backdrop-blur"
        >
          <span>💼</span> LinkedIn
        </a>
        <a
          href="https://github.com/edgarmejiav"
          target="_blank"
          rel="noopener noreferrer"
          id="cta-github"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-neutral-700 text-slate-300 hover:border-lime-500 hover:text-lime-400 hover:scale-105 transition-all duration-300 bg-neutral-900/50 backdrop-blur"
        >
          <span>⚡</span> GitHub
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-slate-600 text-xs animate-bounce">
        <span>scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M8 13l-3-3M8 13l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};
