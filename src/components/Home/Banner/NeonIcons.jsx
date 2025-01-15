import { FaNodeJs, FaReact } from "react-icons/fa"; // React Icon
import {
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function NeonIcons() {
  return (
    <>
      {/* Neon icons */}
      <div className="absolute inset-0 z-0 opacity-80 hidden md:block">
        {/* Tailwind CSS Icon */}
        <div
          className="absolute top-10 left-10 text-4xl md:text-6xl text-blue-400 
                neon-icon animate-pulse"
        >
          <SiTailwindcss />
        </div>

        {/* React Icon */}
        <div
          className="absolute top-1/4 left-1/4 text-4xl md:text-6xl text-blue-500 
                neon-icon animate-pulse"
        >
          <FaReact />
        </div>

        {/* Next.js Icon */}
        <div
          className="absolute bottom-10 left-10 text-4xl md:text-6xl text-black
                neon-icon animate-pulse"
        >
          <SiNextdotjs />
        </div>

        {/* JavaScript Icon */}
        <div
          className="absolute bottom-1/4 left-2/4 text-4xl md:text-6xl text-yellow-400 
                neon-icon animate-pulse"
        >
          <SiJavascript />
        </div>

        {/* MongoDB Icon */}
        <div
          className="absolute top-10 right-10 text-4xl md:text-6xl text-green-500 
                neon-icon animate-pulse"
        >
          <SiMongodb />
        </div>

        {/* Node.js Icon */}
        <div
          className="absolute bottom-10 right-10 text-4xl md:text-6xl text-green-600 
                neon-icon animate-pulse"
        >
          <FaNodeJs />
        </div>

        {/* MUI Icon */}
        <div
          className="absolute top-1/3 right-1/3 text-4xl md:text-6xl text-blue-500 
                neon-icon animate-pulse"
        >
          <SiMui />
        </div>
      </div>
    </>
  );
}
