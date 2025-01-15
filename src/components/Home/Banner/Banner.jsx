import Image from "next/image";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai"; // Importing the download icon
import { FaReact } from "react-icons/fa"; // React Icon
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS Icon
import { SiNextdotjs } from "react-icons/si"; // Next.js Icon
import { SiMongodb } from "react-icons/si"; // MongoDB Icon
import { SiJavascript } from "react-icons/si"; // JavaScript Icon
import { FaNodeJs } from "react-icons/fa"; // Node.js Icon

export default function Banner() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-black to-violet-950 overflow-hidden">
      {/* Circuit Line Overlay */}
      <div className="absolute inset-0 z-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full opacity-20"
        >
          <g stroke="#6b46c1" strokeWidth="1" fill="none">
            <path d="M0,500 H1000" />
            <path d="M200,0 V1000" />
            <path d="M0,200 H1000" />
            <path d="M800,0 V1000" />
            <circle cx="200" cy="500" r="50" />
            <circle cx="800" cy="200" r="50" />
            <circle cx="400" cy="800" r="50" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto mt-10 min-h-screen flex flex-col md:flex-row items-center justify-center z-10 p-4 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
            Hi 👋, I am
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Afrede Hossain
          </h1>
          <h2 className="text-3xl md:text-5xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            I craft exceptional web experiences that empower users.
          </h2>
          {/* Animated Download Button */}
          <Link
            href="#"
            className="mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#13B0F5] normal-case to-[#E70FAA] transition-all"
          >
            <AiOutlineDownload
              className="mr-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
              size={24}
            />
            Download Resume
          </Link>
        </div>

        {/* Image */}
        <div className="w-56 md:w-96 flex-shrink-0">
          <Image
            src="/images/afrede_svg_shape.png"
            width={500}
            height={200}
            priority
            alt="Afrede Hossain"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Icons Section with fixed positions (Hidden on small devices) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* Tailwind CSS Icon */}
        <div className="absolute top-40 left-5 text-4xl md:text-6xl text-teal-500 neon-icon">
          <SiTailwindcss />
        </div>

        {/* React Icon */}
        <div className="absolute top-1/4 left-1/4 text-4xl md:text-6xl text-cyan-500 neon-icon">
          <FaReact />
        </div>

        {/* JavaScript Icon */}
        <div className="absolute bottom-10 right-5 text-4xl md:text-6xl text-yellow-500 neon-icon">
          <SiJavascript />
        </div>

        {/* Next.js Icon */}
        <div className="absolute bottom-1/4 left-2/4 text-4xl md:text-6xl text-black neon-icon">
          <SiNextdotjs />
        </div>

        {/* MongoDB Icon */}
        <div className="absolute bottom-10 left-5 text-4xl md:text-6xl text-green-500 neon-icon">
          <SiMongodb />
        </div>

        {/* Node.js Icon */}
        <div className="absolute top-1/4 right-5 text-4xl md:text-6xl text-green-600 neon-icon">
          <FaNodeJs />
        </div>
      </div>
    </div>
  );
}
