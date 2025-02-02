import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";

interface Skill {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  proficiency?: number;
}

const skills: Skill[] = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
    icon: Code,
    color: "bg-blue-600",
    proficiency: 95,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, REST APIs",
    icon: Server,
    color: "bg-emerald-600",
    proficiency: 90,
  },
  {
    title: "Database Management",
    description: "MongoDB, SQL",
    icon: Database,
    color: "bg-purple-600",
    proficiency: 85,
  },
  {
    title: "System Architecture",
    description: "Microservices, Docker, AWS",
    icon: Layers,
    color: "bg-orange-600",
    proficiency: 92,
  },
];

const Skills: React.FC = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different
            areas of software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl cursor-pointer ${skill.color} flex flex-col 
                transform transition-all duration-300 hover:brightness-125 hover:scale-105 shadow-lg 
                bg-opacity-80 backdrop-blur-md border border-gray-700`}
            >
              {/* Title + Icon */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg shadow-md">
                  <skill.icon className="text-white" size={28} />
                </div>
              </div>

              {/* Proficiency Bar */}
              {skill.proficiency && (
                <div className="mt-6">
                  <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.proficiency}%`,
                        boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
