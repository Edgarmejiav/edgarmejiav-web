'use client'

const highlights = [
  {
    icon: "🎤",
    title: "AforShow 2023",
    subtitle: "Conferencista en Twitch",
    desc: "+500 espectadores en charla sobre desarrollo en LATAM",
  },
  {
    icon: "🎭",
    title: "Barrio Teatro",
    subtitle: "Gestión de Proyecto 2023",
    desc: "Lideré equipos multidisciplinarios para reducir violencia con soluciones culturales.",
  },
  {
    icon: "🎓",
    title: "Educación",
    subtitle: "Ing. de Sistemas / Inglés",
    desc: "Univ. Nacional de Cajamarca (2016-2021) / ICPNA Inglés Avanzado.",
  },
  {
    icon: "🗣️",
    title: "Idiomas",
    subtitle: "Nativo y Avanzado",
    desc: "Español (Nativo), Inglés (Avanzado)",
  },
];

const experienceYears = Math.floor((new Date() - new Date('2021-09-01')) / (1000 * 60 * 60 * 24 * 365.25));

const stats = [
  { value: `${experienceYears}+`, label: "Años de experiencia" },
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
                Desarrollador Fullstack
              </span>{" "}
              con más de{" "}
              <span className="text-cyan-400 font-semibold">
                {experienceYears} años de experiencia
              </span>{" "}
              en desarrollo de software (Node.js, Python, Java, Linux), utilizando frameworks y tecnologías como React, Vue, Angular, NestJS, Spring Boot y PostgreSQL.
            </p>
            <p>
              Especializado en la creación de soluciones escalables y eficientes tanto en el{" "}
              <span className="text-lime-400">
                frontend como en el backend
              </span>
              , impulsando la calidad del código, metodologías ágiles e integraciones sólidas.
            </p>
            <p>
              He {" "}
              <span className="text-white font-medium">liderado equipos multidisciplinarios</span>{" "}
              fomentando la colaboración y la innovación, asegurando el éxito y la escalabilidad de los proyectos en diversas industrias.
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

        {/* Certifications */}
        <div className="mt-12 glass-card rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-violet-400">📜</span> Certificaciones Destacadas
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Scrum Foundation Professional Certificate",
              "Remote Work Professional Certification",
              "Next.js: Framework De React Para Producción",
              "TypeScript Y Práctica Canvas 2021",
              "Vue.js: De Cero A Experto",
              "Docker Avanzado",
              "PostgreSQL & Java Spring"
            ].map(cert => (
              <span key={cert} className="text-xs font-medium text-slate-300 border border-neutral-700/60 bg-neutral-800/80 px-3 py-1.5 rounded-lg hover:border-violet-500/40 hover:text-white transition-all cursor-default">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
