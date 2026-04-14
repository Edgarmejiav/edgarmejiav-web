'use client'

const highlights = [
  {
    icon: "🎤",
    title: "AforShow",
    subtitle: "Conferencista Twitch España",
    desc: "+300 espectadores en charla de programación",
  },
  {
    icon: "📣",
    title: "Dpex Project",
    subtitle: "Webinar de Gestión de Proyectos",
    desc: "50K personas alcanzadas en redes sociales",
  },
  {
    icon: "⛏️",
    title: "Perumin",
    subtitle: "Cumbre Minera Internacional",
    desc: "Presentación oficial del sistema DTS Mine",
  },
  {
    icon: "🌐",
    title: "Open Source",
    subtitle: "Comunidad Afordin",
    desc: "Colaborador activo en repositorios GitHub",
  },
];

const stats = [
  { value: "4+", label: "Años de experiencia" },
  { value: "50K+", label: "Visitas mensuales" },
  { value: "300+", label: "Audiencia en eventos" },
  { value: "30%", label: "Mejora en rendimiento DB" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/40" />
          <h2 className="section-title">
            <span className="text-violet-400">01.</span> Sobre Mí
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <div className="flex flex-col gap-5 text-slate-400 leading-relaxed">
            <p>
              Soy un{" "}
              <span className="text-white font-semibold">
                Ingeniero de Software
              </span>{" "}
              con más de{" "}
              <span className="text-cyan-400 font-semibold">
                4 años de experiencia
              </span>{" "}
              especializado en arquitectura de sistemas, microservicios y
              liderazgo técnico.
            </p>
            <p>
              Domino tecnologías como{" "}
              <span className="text-lime-400">
                JavaScript, Python, Java y Linux
              </span>
              , trabajando con frameworks modernos para crear soluciones
              escalables y de alto impacto.
            </p>
            <p>
              He presentado software en eventos internacionales como{" "}
              <span className="text-white font-medium">Perumin</span> y dictado
              charlas sobre programación para audiencias globales.
            </p>
            <p>
              Desarrollo soluciones que superan las{" "}
              <span className="text-cyan-400 font-semibold">50K visitas mensuales</span>,
              enfocado en{" "}
              <span className="text-white">
                Clean Code, CI/CD e integraciones seguras
              </span>
              .
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card group rounded-2xl p-6 text-center hover:border-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="glass-card rounded-2xl p-5 hover:border-violet-500/50 hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <div className="text-white font-bold text-lg group-hover:text-violet-300 transition-colors">
                {h.title}
              </div>
              <div className="text-cyan-400 text-xs font-medium mt-0.5 mb-2">
                {h.subtitle}
              </div>
              <div className="text-slate-400 text-sm">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
