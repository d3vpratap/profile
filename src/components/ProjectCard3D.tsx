import { motion } from "framer-motion";
import { Github } from "lucide-react";
import * as Si from "react-icons/si";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  highlights?: string[];
};

const tagIconMap: Record<string, any> = {
  React: Si.SiReact,
  "Next.js": Si.SiNextdotjs,
  TypeScript: Si.SiTypescript,
  JavaScript: Si.SiJavascript,
  "Node.js": Si.SiNodedotjs,
  Express: Si.SiExpress,
  "Express.js": Si.SiExpress,
  MongoDB: Si.SiMongodb,
  PostgreSQL: Si.SiPostgresql,
  Prisma: Si.SiPrisma,
  Python: Si.SiPython,
  TensorFlow: Si.SiTensorflow,
  "Socket.io": Si.SiSocketdotio,
  Razorpay: Si.SiRazorpay,
};

const ProjectCard3D = ({ project }: { project: Project }) => {
  return (
    <div className="perspective-[1200px]">
      <motion.div
        whileHover={{ rotateX: -8, rotateY: 10 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative bg-dark-card/90 border border-dark-border rounded-xl
        overflow-hidden shadow-dark-lg hover:shadow-dark-xl hover:shadow-accent-glow transform-style-preserve-3d transition-shadow"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>

          <p className="text-text-tertiary mb-3 text-sm">{project.description}</p>

          {project.highlights && (
            <ul className="text-text-tertiary text-sm space-y-1 mb-3 list-disc list-inside">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-accent transition focus-visible:outline-accent"
          >
            <Github size={16} />
            Source
          </a>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          initial="hidden"
          whileHover="visible"
          className="absolute inset-0 pointer-events-none"
        >
          {project.tags.map((tag, index) => {
            const Icon = tagIconMap[tag];
            if (!Icon) return null;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, x: 0, y: 0, z: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    x:
                      Math.cos((index / project.tags.length) * Math.PI * 2) *
                      70,
                    y:
                      Math.sin((index / project.tags.length) * Math.PI * 2) *
                      50,
                    z: 60,
                  },
                }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                transform-style-preserve-3d"
              >
                <Icon size={26} className="text-accent-light drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard3D;
