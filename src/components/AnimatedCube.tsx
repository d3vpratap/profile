import { Code, User, Briefcase, Star } from "lucide-react";

const AnimatedCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <Code className="w-16 h-16 text-indigo-500" />
          <p className="mt-2 text-white">Full Stack Developer</p>
        </div>
        <div className="cube__face cube__face--back">
          <User className="w-16 h-16 text-green-500" />
          <p className="mt-2 text-white">Passionate Creator</p>
        </div>
        <div className="cube__face cube__face--right">
          <Briefcase className="w-16 h-16 text-yellow-500" />
          <p className="mt-2 text-white">Creative and Dynamic</p>
        </div>
        <div className="cube__face cube__face--top">
          <Star className="w-16 h-16 text-yellow-300" />
          <p className="mt-2 text-white">Technologies</p>
        </div>
        <div className="cube__face cube__face--left">
          <Code className="w-16 h-16 text-yellow-300" />
          <p src="" className="mt-2 text-white">
            Hello{" "}
          </p>
        </div>
        {/* <div className="cube__face ">
          <Code className="w-16 h-16 text-yellow-300" />
          <p src="" className="mt-2 text-white">
            Hello{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AnimatedCube;
