import React from 'react';
import { 
  Code, 
  Braces,
  Database, 
  Layout, 
  Server, 
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS ",
      icon: Code,
      color: "bg-blue-600",
      size: "col-span-2 row-span-2",
      proficiency: 95
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, REST APIs",
      icon: Server,
      color: "bg-emerald-600",
      size: "col-span-1 row-span-1",
      proficiency: 90
    },
    {
      title: "Database",
      description: "MongoDB, SQL",
      icon: Database,
      color: "bg-purple-600",
      size: "col-span-1 row-span-1",
    },
    {
      title: "System Architecture",
      description: "Microservices, Docker, AWS",
      icon: Layers,
      color: "bg-orange-600",
      size: "col-span-2 row-span-1",
      proficiency: 92
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills  across different areas of software development.
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-4 p-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`metro-tile ${skill.size} ${skill.color} p-6 rounded-xl cursor-pointer 
                transform transition-all duration-300 hover:brightness-110 hover:shadow-2xl
                flex flex-col justify-between backdrop-blur-sm bg-opacity-90`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <skill.icon className="text-white" size={24} />
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;