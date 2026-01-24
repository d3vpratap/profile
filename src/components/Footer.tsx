import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-base border-t border-dark-border shadow-dark-md">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Dev Pratap Singh
          </p>
          <p className="text-text-muted text-sm">
            Software Engineer · Full Stack Developer
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/d3vpratap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent transition focus-visible:outline-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/d3vpratap/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent transition focus-visible:outline-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
