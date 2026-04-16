'use client'

const techGroups = [
  {
    category: "Backend",
    color: "from-emerald-500 to-teal-600",
    icon: "⚙️",
    items: ["Java", "Python", "Node.js", ".NET", "Spring Boot", "FastAPI", "NestJS", "OAuth"],
  },
  {
    category: "Bases de Datos",
    color: "from-orange-500 to-amber-600",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    category: "Frontend",
    color: "from-cyan-500 to-blue-600",
    icon: "🎨",
    items: ["JavaScript", "TypeScript", "React.js", "Vue.js", "Angular", "Redux.js", "Tailwind CSS", "Bootstrap", "Material-UI", "Styled-components", "HTML", "CSS", "Webpack", "Storybook", "HTTPS"],
  },
  {
    category: "CI/CD & Cloud",
    color: "from-pink-500 to-rose-600",
    icon: "☁️",
    items: ["GitHub Actions", "Vercel", "AWS Amplify", "Azure Static Web Apps", "Docker", "Linux", "AWS S3", "AWS CloudFront"],
  },
  {
    category: "Pruebas y Calidad",
    color: "from-violet-500 to-purple-600",
    icon: "🧪",
    items: ["Jest", "Storybook", "Selenium", "Mocha", "Chai", "Testing Library", "Postman", "ESLint", "Prettier"],
  },
  {
    category: "Gestión y Metodologías",
    color: "from-lime-500 to-green-600",
    icon: "📊",
    items: ["Scrum", "Kanban", "Agile", "Jira", "Notion", "Git"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-neutral-950/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
          <h2 className="section-title">
            <span className="text-cyan-400">02.</span> Stack Tecnológico
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] hover:border-neutral-600/60 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${group.color} shadow-lg`}>
                  <span className="text-lg">{group.icon}</span>
                </div>
                <h3 className="text-white font-bold text-base">{group.category}</h3>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-slate-300 bg-neutral-800/80 border border-neutral-700/60 rounded-lg px-2.5 py-1 hover:border-neutral-500 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
