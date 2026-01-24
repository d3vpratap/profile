import { Github } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard3D from "./ProjectCard3D";

const projects = [
  {
    title: "SkillSync",
    description:
      "An AI-powered career guidance platform that personalizes learning paths using real-time industry insights, skill gap analysis, and intelligent resume generation.",
    image:
      "https://i.ibb.co/b5ycPSkJ/Screenshot-2025-02-07-at-12-20-21-PM-Photoroom.png",
    tags: ["Next.js", "Prisma", "Inngest", "Gemini API", "PostgreSQL"],
    githubUrl: "https://github.com/d3vpratap/skillsync/tree/main",
    highlights: [
      "Designed an end-to-end AI workflow for skill assessment and career recommendations",
      "Integrated Gemini API to generate personalized resumes and cover letters",
      "Used Inngest for background jobs and event-driven workflows",
      "Implemented scalable data modeling with Prisma ORM",
    ],
  },
  {
    title: "ShopKart",
    description:
      "A production-ready e-commerce platform supporting multi-vendor workflows, secure authentication, and online payments.",
    image: "https://i.ibb.co/VwHPn0W/shopkart-Home.jpg",
    tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Razorpay"],
    githubUrl: "https://github.com/d3vpratap/shopkart",
    highlights: [
      "Implemented secure authentication and role-based authorization using Passport.js",
      "Integrated Razorpay for real-world payment processing",
      "Designed REST APIs for products, orders, reviews, and users",
      "Ensured data isolation so sellers can manage only their own products",
    ],
  },
  {
    title: "NodeTalk",
    description:
      "A real-time chat application supporting individual and group messaging using WebSockets.",
    image:
      "https://plus.unsplash.com/premium_photo-1677252438450-b779a923b0f6?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/d3vpratap/NodeTalk2.0",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-driven chatbot built using NLP techniques to assist users with mental health-related conversations.",
    image: "https://media.istockphoto.com/id/1465545513/photo/chatbot.webp",
    tags: ["Python", "TensorFlow", "NLP", "MongoDB"],
    githubUrl: "https://github.com/d3vpratap/AI-CHATBOT-FOR-MENTAL-HEALTH",
  },
  {
    title: "Documber",
    description:
      "A collaborative document editor with real-time synchronization across multiple users.",
    image:
      "https://plus.unsplash.com/premium_photo-1669658981976-4b72e927a902?w=800&auto=format&fit=crop&q=60",
    tags: ["Node.js", "Socket.io", "Express", "TypeScript"],
    githubUrl: "https://github.com/d3vpratap/Documber",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-dark-surface" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary text-center mb-12">
          Featured Projects
        </h2>

        {/* DESKTOP: 3D CARDS */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard3D key={index} project={project} />
          ))}
        </div>

        {/* MOBILE: SIMPLE SWIPE CARDS */}
        <div className="md:hidden overflow-x-visible relative mt-6">
          <motion.div
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            dragElastic={0.2}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 bg-dark-card rounded-xl overflow-hidden border border-dark-border shadow-dark-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-tertiary text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-elevated text-text-secondary text-xs rounded-full border border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-tertiary hover:text-accent transition focus-visible:outline-accent"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
