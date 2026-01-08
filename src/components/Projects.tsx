import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>

        {/* For large screens: Grid View */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.highlights && (
                  <ul className="text-gray-400 text-sm space-y-1 mb-4 list-disc list-inside">
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* For smaller screens: Swipeable View */}
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
                className="w-80 flex-shrink-0 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div>
        <h1 className="mt-9 font-bold text-2xl text-center">
          ...Thank you for the visit...
        </h1>
      </div>
    </section>
  );
};

export default Projects;
