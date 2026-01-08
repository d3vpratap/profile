import { Github, Linkedin, Mail, FileText } from "lucide-react";
import AnimatedCube from "./AnimatedCube";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800"></div>

      {/* 3D Cube */}
      <div className="absolute top-20 sm:top-32 md:top-40 lg:top-48 xl:top-52">
        <AnimatedCube />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          About Me : 
        </h1>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl text-indigo-200 font-medium mb-6">
          Software Engineer · Full Stack Developer
        </h2>

        {/* Value Proposition */}
        <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          I build scalable, user-focused web applications using
          <span className="font-semibold text-white">
            {" "}
            React, MongoDB, Node.js, Express.js
          </span>
          , and modern system design principles. Experienced in shipping
          end-to-end features from UI to backend APIs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-100 transition"
          >
            View Projects
          </a>

          <a
            href="/Dev_Pratap_Singh_Resume.pdf"
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition flex items-center gap-2"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
