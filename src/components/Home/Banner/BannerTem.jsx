import SvgBg from "@/assets/svgs/grbluor-1.svg";
import Image from "next/image";
import Socialicons from "./Socialicons";
import Link from "next/link";
import VariousWorkingFields from "./VariousWorkingFields";

// icons
import { IoIosArrowRoundDown } from "react-icons/io";

export default function BannerTem() {
  return (
    <section>
      <div className="relative overflow-hidden bg-slate-950 bg-opacity-75 h-screen">
        {/* svg bg element */}
        <div className="absolute bottom-0-0 bg-slate-950 left-0 w-full h-full -z-10">
          <Image src={SvgBg} alt="svg bg" priority className="blur-2xl" />
        </div>
        <div className="relative container mx-auto flex items-center gap-20 h-full">
          {/* Social handles */}
          <div>
            <Socialicons />
          </div>

          <div className="flex-grow flex flex-col gap-20 justify-center px-20">
            <div className="mx-auto">
              <h3 className="text-2xl font-semibold tracking-[.3em] mb-8 uppercase text-sky-500">
                Afrede Hossain
              </h3>
              <div className="text-8xl font-semibold leading-tight">
                {/* <span className="block">Full Stack </span>
                <span className="block">Web Developer</span> */}

                {/* <DynamicString /> */}
                <VariousWorkingFields />

                <div className="flex items-center gap-8">
                  <p>Developer</p>
                  <div className="border border-gray-500 w-96"></div>
                </div>
              </div>
              <div className="my-10">
                <Link
                  href={"/"}
                  className="text-base px-4 py-3 bg-gray-800 text-blue-400 font-medium rounded-lg border border-gray-600 shadow-lg"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Neon icons */}
          {/* <NeonIcons /> */}
          <div className="absolute bottom-0 right-1/2 -translate-x-1/2 text-white py-4 flex flex-col-reverse justify-center items-center gap-2 animate-bounce">
            <IoIosArrowRoundDown className="text-3xl font-light" />
            <p className="text-base text-white font-light">Scroll Down</p>
          </div>
        </div>
      </div>
    </section>
  );
}
