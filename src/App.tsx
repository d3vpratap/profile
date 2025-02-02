import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CvDownload from "./components/CvDownload";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navigation />
      <Hero />

      {/* About Section */}
      <div>
        <section
          className="py-20 bg-transparent relative z-20 min-h-screen"
          id="about"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Heading */}
            <h2 className="text-5xl font-extrabold text-white text-center mb-16 tracking-wide sm:text-4xl">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* About Content */}
              <div
                className="relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-2xl text-gray-300 border border-gray-700"
                style={{
                  transform: "perspective(1000px) rotateY(5deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <p className="text-lg leading-relaxed sm:text-base">
                  🚀 Hey, I’m Dev Pratap Singh! A passionate Full-Stack
                  Developer specializing in MERN Stack with experience in
                  backend development, real-time applications, and cloud
                  deployment. I like building scalable applications, optimizing
                  performance, and solving complex problems.
                </p>
                <br />
                <p className="text-lg leading-relaxed mt-6 sm:text-base">
                  🧠 I thrive on problem-solving and continuous learning,
                  exploring Cloud technologies, DevOps, and Open Source
                  Contributions.
                </p>

                <p className="text-lg font-semibold text-blue-400 mt-6 sm:text-base">
                  Let's collaborate and innovate! 🚀
                </p>
              </div>
              {/* Profile Image with 3D effect */}
              <div className="relative group flex justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://i.ibb.co/yFXv5FQD/6-FC516-CD-B34-C-4-F92-866-B-C3310-A105-B44-2.jpg"
                  alt="Profile"
                  className="relative w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500 sm:w-48 sm:h-48 md:w-56 md:h-56"
                />
              </div>
            </div>
          </div>
        </section>
        <CvDownload />
        <Skills />
      </div>

      <Projects />
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
