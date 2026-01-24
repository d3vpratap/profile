import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";

const GradientOrb = ({ delay = 0, size = 200, color = "indigo", position = {} }: { delay?: number; size?: number; color?: string; position?: { top?: string; left?: string; right?: string; bottom?: string } }) => {
  const colors = {
    indigo: "from-accent/30 via-accent/20 to-transparent",
    purple: "from-purple-500/30 via-purple-500/20 to-transparent",
    blue: "from-blue-500/30 via-blue-500/20 to-transparent",
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colors[color as keyof typeof colors]}`}
      style={{
        width: size,
        height: size,
        ...position,
      }}
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }: { icon: any; delay?: number; x?: number; y?: number }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.8, 1],
        scale: [0, 1, 0.9, 1],
        x: [x, x + 20, x - 10, x],
        y: [y, y - 20, y + 10, y],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="p-3 rounded-xl bg-dark-card/50 backdrop-blur-md border border-dark-border/50 shadow-dark-lg">
        <Icon className="w-6 h-6 text-accent-light" />
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-base via-dark-surface to-dark-base">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <GradientOrb delay={0} size={400} color="indigo" position={{ top: "10%", left: "10%" }} />
          <GradientOrb delay={5} size={300} color="purple" position={{ top: "60%", right: "15%" }} />
          <GradientOrb delay={10} size={350} color="blue" position={{ bottom: "20%", left: "20%" }} />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon icon={Code2} delay={0} x={-100} y={100} />
        <FloatingIcon icon={Sparkles} delay={2} x={100} y={-80} />
        <FloatingIcon icon={Code2} delay={4} x={-150} y={-100} />
        <FloatingIcon icon={Sparkles} delay={6} x={150} y={120} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card/80 backdrop-blur-md border border-dark-border mb-6"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-text-secondary text-sm font-medium">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-text-primary mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#E5E7EB] via-accent-light to-[#E5E7EB] bg-clip-text text-transparent animate-gradient-text">
            Dev Pratap Singh
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl text-accent-light font-semibold mb-4"
        >
          Software Engineer & Full Stack Developer
        </motion.h2>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I build <span className="text-text-primary font-semibold">scalable, user-focused</span> web applications using
          <span className="text-accent-light font-semibold"> React, MongoDB, Node.js, Express.js</span>, and modern
          system design principles. Experienced in shipping end-to-end features from UI to backend APIs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold transition-all shadow-accent-glow hover:shadow-accent-glow-lg hover:scale-105 focus-visible:outline-accent"
          >
            Get In Touch
            <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1kiWJg0elwpch63dc42L1iQqvAgas-Uai/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-dark-card hover:bg-dark-elevated border border-dark-border text-text-primary font-semibold transition-all hover:border-accent/50 hover:scale-105 focus-visible:outline-accent"
          >
            View Resume
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/d3vpratap"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-dark-card/50 backdrop-blur-md border border-dark-border hover:border-accent text-text-tertiary hover:text-accent transition-all hover:scale-110 focus-visible:outline-accent"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/d3vpratap/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-dark-card/50 backdrop-blur-md border border-dark-border hover:border-accent text-text-tertiary hover:text-accent transition-all hover:scale-110 focus-visible:outline-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:singhdevpratap1312@gmail.com"
            className="p-3 rounded-xl bg-dark-card/50 backdrop-blur-md border border-dark-border hover:border-accent text-text-tertiary hover:text-accent transition-all hover:scale-110 focus-visible:outline-accent"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-tertiary"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
