import "./App.css"; // Import external CSS
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CvDownload from "./components/CvDownload";

function App() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navigation />
      <Hero />

      {/* About Section */}
      <section className="about-section">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* About Content */}
            <div className="about-content">
              <p>
                🚀 Hey, I’m <b>Dev Pratap Singh</b>! A passionate Full-Stack
                Developer specializing in MERN Stack with experience in
                backend development, real-time applications, and cloud
                deployment.
              </p>
              <p className="mt-4">
                🧠 I thrive on problem-solving and continuous learning,
                exploring Cloud technologies, DevOps, and Open Source
                Contributions.
              </p>
              <p className="cta-text">Let's collaborate and innovate! 🚀</p>
            </div>

            {/* Profile Image with 3D effect */}
            <div className="profile-wrapper">
              <div className="profile-glow"></div>
              <img
                src="https://i.ibb.co/yFXv5FQD/6-FC516-CD-B34-C-4-F92-866-B-C3310-A105-B44-2.jpg"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      <CvDownload />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
