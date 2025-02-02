import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedCube from "./AnimatedCube";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 animate-gradient-background"></div>

      {/* 3D Cube Animation */}
      <div>
        <AnimatedCube />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title Animation */}
        <div className="slide-up animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-6xl font-extrabold text-white mb-6 transform transition-all duration-500 hover:scale-110 hover:text-indigo-300"></h1>
        </div>

        {/* Subtitle Animation with Typing Effect */}
        <div className="slide-up-delay-1 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl text-indigo-200 mb-8 transform transition-all duration-500 hover:scale-110">
            <TypingEffect
              text={[
                "I am Dev Pratap Singh",
                "Full Stack Developer",
                "Learner.....",
              ]}
              speed={100}
              eraseDelay={1000}
              typingDelay={800}
              eraseSpeed={50}
            />
          </h2>
        </div>

        {/* Description Animation */}
        <div className="slide-up-delay-2 animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Crafting elegant solutions to complex problems with modern
            technologies. Passionate about creating exceptional user experiences
            and scalable applications.
          </p>
        </div>

        {/* Social Links Animation */}
        <div className="slide-up-delay-3 flex gap-6 justify-center animate__animated animate__fadeIn animate__delay-4s">
          <a
            href="https://www.github.com/d3vpratap"
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/d3vpratap/"
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:singhdevpratap1312@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <span className="text-center">singhdevpratap1312@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
