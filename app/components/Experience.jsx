'use client'

const featured = {
  title: "Ingeniero de Software",
  company: "Inetum",
  period: "Jun. 2025 – Actualidad · 11 meses",
  type: "Jornada completa · En remoto · Perú",
  clients: ["Inetum", "Belcorp"],
  achievements: [
    "Implementación y optimización de microservicios en .NET y Node.js para sincronización de datos de alto volumen.",
    "Diseño y mantenimiento de procesos ETL en PostgreSQL, optimizando el rendimiento de consultas complejas en más del 30%.",
    "Integración de servicios en AWS S3 y plataformas internas garantizando escalabilidad del sistema.",
    "Implementación de validaciones de seguridad y auditoría en endpoints críticos.",
    "Reducción del 26% en duplicación de código aplicando interfaces y patrones de herencia.",
  ],
  stack: [".NET", "Node.js", "PostgreSQL", "AWS S3", "ETL", "Microservicios"],
};

const experiences = [
  {
    title: "Ingeniero de Software Autónomo",
    company: "Freelance",
    type: "Remoto",
    period: "Abril 2024 – Actualidad",
    current: true,
    color: "from-cyan-500 to-lime-500",
    dotColor: "bg-cyan-500",
    achievements: [
      "Ejecución de soluciones tecnológicas personalizadas con Node.js, Python y JavaScript para aumentar la eficiencia operativa en múltiples sectores.",
      "Optimización de flujos de desarrollo garantizando entregas ágiles, puntuales y flexibles ante cambios de requerimientos.",
    ],
    stack: ["Node.js", "Python", "JavaScript"],
  },
  {
    title: "Full-stack Developer",
    company: "DATECSOFT S.R.L",
    type: "Remoto",
    period: "Octubre 2024 – Abril 2025",
    current: false,
    color: "from-blue-500 to-violet-500",
    dotColor: "bg-blue-500",
    achievements: [
      "Liderazgo en modelado avanzado de bases de datos relacionales (PostgreSQL) para sistemas de gestión complejos.",
      "Implementación de arquitecturas sólidas con Spring Boot y desarrollo de interfaces con Angular para administración de pagos en residenciales.",
      "Optimización del rendimiento de bases de datos mediante procedimientos almacenados y revisión de consultas.",
    ],
    stack: ["Spring Boot", "Angular", "PostgreSQL"],
  },
  {
    title: "Desarrollador de Software",
    company: "GRUPO ALVICOM TRADING SRL",
    type: "Perú",
    period: "Septiembre 2021 – Marzo 2024",
    current: false,
    color: "from-lime-500 to-emerald-500",
    dotColor: "bg-lime-500",
    achievements: [
      "Desarrollo e implementación de soluciones escalables para gestión de flotas mineras.",
      "Presentación oficial del sistema DTS Mine en la Cumbre Minera Internacional (Perumin).",
      "Liderazgo de proyectos ágiles con Scrum y Jira, logrando un aumento del 20% en productividad del equipo.",
      "Creación de política estandarizada para gestión de commits en Git, reduciendo errores en integración de código.",
    ],
    stack: ["Scrum", "Jira", "Git"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-lime-500/40" />
          <h2 className="section-title">
            <span className="text-lime-400">03.</span> Experiencia
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lime-500/40" />
        </div>

        {/* ── FEATURED: Inetum ── */}
        <div className="relative mb-14 rounded-2xl overflow-hidden group">
          {/* Glow border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-60 group-hover:opacity-90 transition-opacity duration-500 blur-sm" />
          <div className="relative rounded-2xl bg-neutral-900 p-7">
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                {/* Company + Clients */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-violet-400 bg-violet-500/10 border border-violet-500/30 px-2.5 py-1 rounded-full">
                    Posición Actual
                  </span>
                  {featured.clients.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-semibold text-slate-300 bg-neutral-800 border border-neutral-700 px-2.5 py-1 rounded-full"
                    >
                      🏢 {c}
                    </span>
                  ))}
                </div>

                <h3 className="text-white text-2xl font-extrabold leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1 flex flex-wrap items-center gap-2">
                  <span className="font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text text-base">
                    {featured.company}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span>{featured.type}</span>
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Actual
                </span>
                <span className="text-slate-500 text-xs font-mono bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700/50">
                  {featured.period}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-violet-500/30 via-cyan-500/20 to-transparent mb-5" />

            {/* Achievements */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {featured.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                  <span className="text-cyan-400 mt-0.5 shrink-0 font-bold">▹</span>
                  {a}
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Timeline: resto de experiencias ── */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700/30 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20">
                {/* Dot */}
                <div className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-neutral-950 ${exp.dotColor} shadow-md`} />
                {exp.current && (
                  <div className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full ${exp.dotColor} opacity-30 animate-ping`} />
                )}

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 hover:border-neutral-600/60 hover:scale-[1.01] transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                          {exp.company}
                        </span>
                        <span className="text-slate-600 text-xs">·</span>
                        <span className="text-slate-500 text-xs">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                          Actual
                        </span>
                      )}
                      <span className="text-slate-500 text-xs font-mono bg-neutral-800/60 px-3 py-1 rounded-lg border border-neutral-700/50">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-1.5 mb-3">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-0.5 shrink-0">▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span key={t} className="text-xs text-slate-400 border border-neutral-700/60 bg-neutral-800/50 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
