import { Code, Database, Server, Layers, Wrench } from "lucide-react";

type SkillCategory = {
  title: string;
  items: string[];
  icon: React.ElementType;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C++"],
    icon: Code,
  },
  {
    title: "Frontend Development",
    items: ["React.js", "Next.js", "Tailwind CSS", "Vite"],
    icon: Layers,
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication & Authorization",
    ],
    icon: Server,
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQL", "Prisma ORM"],
    icon: Database,
  },
  {
    title: "System Design & Architecture",
    items: ["Microservices", "Event-driven Architecture", "Background Jobs"],
    icon: Layers,
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "AWS (EC2)", "Postman"],
    icon: Wrench,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-dark-base via-dark-surface to-dark-base"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
            Technologies and tools I use to design, build, and scale
            production-ready applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-dark-card/80 backdrop-blur-md border border-dark-border
                hover:border-accent transition-all duration-300 shadow-dark-md hover:shadow-dark-lg hover:shadow-accent-glow"
              >
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-glow border border-accent/20">
                    <Icon size={22} className="text-accent-light" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="text-text-secondary text-sm space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
