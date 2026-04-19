'use client'

const featured = {
  title: "Software Engineer",
  company: "Inetum",
  period: "Jun. 2024 – Actualidad",
  type: "Jornada completa · En remoto · LATAM",
  clients: ["Inetum", "Belcorp"],
  achievements: [
    "Implementé y optimicé microservicios en .NET y Node.js para sincronización de datos.",
    "Diseñé y mantuve procesos ETL con PostgreSQL, optimizando consultas en más de 30%.",
    "Integré servicios en AWS S3 y plataformas internas, asegurando escalabilidad.",
    "Implementé validaciones de seguridad y auditoría en endpoints críticos.",
    "Reduje 26% de duplicación de código aplicando interfaces y patrones de herencia.",
  ],
  stack: [".NET", "Node.js", "PostgreSQL", "AWS (S3)", "Docker", "Linux", "GitHub Actions", "Microservicios", "ETL", "Seguridad y Auditoría", "Arquitectura de Software", "CI/CD"],
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
    type: "Remoto · Perú",
    period: "Octubre 2024 – Abril 2025",
    current: false,
    color: "from-blue-500 to-violet-500",
    dotColor: "bg-blue-500",
    achievements: [
      "Lideré el modelado de bases de datos en PostgreSQL, diseñando estructuras eficientes que mejoraron el manejo de datos en sistemas complejos y facilitaron la integración con Docker.",
      "Desarrollé arquitecturas robustas con Angular (TypeScript), optimizando la experiencia del usuario y reduciendo los tiempos de carga de la aplicación.",
      "Diseñé interfaces modernas y responsivas con Angular, Tailwind CSS y Bootstrap, mejorando la usabilidad y la experiencia de usuario.",
      "Apliqué estrategias de SEO, aumentando el tráfico orgánico en un 60%.",
    ],
    stack: ["Spring Boot", "Angular", "Java", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Bootstrap", "AWS", "Figma"],
  },
  {
    title: "Desarrollador de Software",
    company: "GRUPO ALVICOM TRADING SRL",
    type: "Cajamarca, Perú",
    period: "Septiembre 2021 – Marzo 2024",
    current: false,
    color: "from-lime-500 to-emerald-500",
    dotColor: "bg-lime-500",
    achievements: [
      "Implementé e integré APIs RESTful en Node.js, mejorando el rendimiento del sistema en un 15% mediante optimización de endpoints y consultas.",
      "Mejoré el rendimiento de consultas en MongoDB, reduciendo significativamente los tiempos de respuesta.",
      "Establecí políticas de commits en Git, aumentando la eficiencia de integración de código.",
      "Implementé componentes reutilizables en React.js y Vue.js, y construí interfaces atractivas con TypeScript, Material UI, Styled-components y Tailwind CSS.",
      "Alcancé una cobertura de pruebas superior al 85% mediante Jest y React Testing Library, asegurando la calidad de la UI."
    ],
    stack: ["JavaScript", "React.js", "Vue.js", "TypeScript", "Node.js", "Tailwind CSS", "Python", "Linux", "Redux.js", "CSS", "Webpack", "Material-UI", "styled-components", "HTML", "Storybook", "JIRA", "Figma"],
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
