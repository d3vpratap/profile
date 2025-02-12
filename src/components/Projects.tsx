import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillSync",
    description:
      "Personalizes AI Path-Pilot providing up to date Industry Insights, Skill Assessments, Resume Builder and Cover Letter ",
    image:
      "https://i.ibb.co/b5ycPSkJ/Screenshot-2025-02-07-at-12-20-21-PM-Photoroom.png",
    tags: ["Next.js", "Prisma", "Inngest", "GeminiAPI"],
    githubUrl: "https://github.com/d3vpratap/skillsync/tree/main",
  },
  {
    title: "Shopkart",
    description:
      "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    image: "https://i.ibb.co/VwHPn0W/shopkart-Home.jpg",
    tags: ["Node.js", "Express.js", "Passport", "MongoDB"],
    githubUrl: "https://github.com/d3vpratap/shopkart",
  },
  {
    title: "NodeTalk",
    description:
      "A chat application with individual & group chat functionality.",
    image:
      "https://plus.unsplash.com/premium_photo-1677252438450-b779a923b0f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/d3vpratap/NodeTalk2.0",
  },
  {
    title: "AI Chatbot",
    description: "An AI-driven chatbot built with TensorFlow and NLP.",
    image:
      "https://media.istockphoto.com/id/1465545513/photo/chatbot.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ffIHW4R87I81mtBWwFj57casqjDSTcHXFHDD1Xqi2A=",
    tags: ["Python", "TensorFlow", "NLP", "MongoDB"],
    githubUrl: "https://github.com/d3vpratap/AI-CHATBOT-FOR-MENTAL-HEALTH",
  },
  {
    title: "Blog Posting",
    description:
      "A blog posting application built using SQL database and Sequelize ORM for efficient data management.",
    image:
      "https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2clMjBwb3N0aW5nJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Node.js", "SQL", "Sequelize", "Express", "JavaScript"],
    githubUrl: "https://github.com/d3vpratap/Blog-Posting",
  },
  {
    title: "Documber",
    description:
      "Documber is a real-time-sync document editor that allows multiple users to collaborate on documents simultaneously.",
    image:
      "https://plus.unsplash.com/premium_photo-1669658981976-4b72e927a902?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Node.js", "Sockets", "Express", "TypeScript"],
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
        <div className="md:hidden overflow-hidden relative mt-6">
          <motion.div
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
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
        <h1 className="mt-9 font-bold text-2xl text-center">Made by d3v</h1>
      </div>
    </section>
  );
};

export default Projects;
