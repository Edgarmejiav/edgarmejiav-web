import { SocialIcons } from "@/app/components/SocialIcons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/60 mt-8 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-white font-bold text-sm">
            Edgar<span className="text-cyan-400">MejiaV</span>
          </span>
          <p className="text-slate-500 text-xs italic">
            &ldquo;Cambiar el mundo a través del código&rdquo;
          </p>
        </div>

        {/* Center – links */}
        <div className="flex gap-6 text-slate-500 text-xs">
          <a href="#about" className="hover:text-white transition-colors">Sobre Mí</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
        </div>

        {/* Right – social */}
        <div className="flex items-center gap-3">
          <SocialIcons />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-neutral-800/40 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Edgar Mejía Vásquez ·  Perú 🇵🇪
      </div>
    </footer>
  );
};
