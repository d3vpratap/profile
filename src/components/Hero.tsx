import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedCube from "./AnimatedCube";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 animate-gradient-background"></div>

      {/* 3D Cube Animation */}
      <div className="absolute top-20 sm:top-32 md:top-40 lg:top-48 xl:top-52">
        <AnimatedCube />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Title Animation */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 transition-transform duration-500 hover:scale-105">
          Welcome to My Portfolio
        </h1>

        {/* Subtitle with Typing Effect */}
        <h2 className="text-2xl sm:text-3xl text-indigo-200 mb-8 transition-transform duration-500 hover:scale-105">
          <TypingEffect
            text={[
              "I'm Dev Pratap Singh",
              "Full Stack Developer",
              "Always Learning & Innovating...",
            ]}
            speed={90}
            eraseSpeed={50}
            eraseDelay={1200}
            typingDelay={800}
          />
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-black-300 max-w-3xl mx-auto mb-10">
          Passionate about crafting elegant solutions to complex problems with
          modern technologies. Dedicated to building scalable applications and
          providing exceptional user experiences.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.github.com/d3vpratap"
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-7 h-7 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/d3vpratap/"
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7 text-white" />
          </a>
          <span
            className="p-3 bg-white/10 rounded-full hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
          >
            <p className="text-white  sm:inline">
              singhdevpratap1312@gmail.com
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
