import { Code, User, Briefcase, Star } from "lucide-react";

const AnimatedCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <Code className="w-16 h-16 text-accent" />
          <p className="mt-2 text-text-primary">Full Stack Developer</p>
        </div>
        <div className="cube__face cube__face--back">
          <User className="w-16 h-16 text-green-400" />
          <p className="mt-2 text-text-primary">Passionate Creator</p>
        </div>
        <div className="cube__face cube__face--right">
          <Briefcase className="w-16 h-16 text-yellow-400" />
          <p className="mt-2 text-text-primary">Creative and Dynamic</p>
        </div>
        <div className="cube__face cube__face--top">
          <Star className="w-16 h-16 text-accent-light" />
          <p className="mt-2 text-text-primary">Technologies</p>
        </div>
        <div className="cube__face cube__face--left">
          <Code className="w-16 h-16 text-accent-light" />
          <p className="mt-2 text-text-primary">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCube;
