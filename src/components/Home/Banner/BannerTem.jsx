import SvgBg from "@/assets/svgs/grbluor-1.svg";
import Image from "next/image";
import Socialicons from "./Socialicons";
import Link from "next/link";
import DynamicString from "./DynamicString";

export default function BannerTem() {
  return (
    <>
      <div className="relative overflow-hidden bg-slate-950 bg-opacity-75 h-screen">
        {/* svg bg element */}
        <div className="absolute bottom-0-0 bg-slate-950 left-0 w-full h-full -z-10">
          <Image src={SvgBg} alt="svg bg" priority className="blur-2xl" />
        </div>
        <div className="relative container mx-auto border-0 border-red-500 flex items-center gap-20 h-full">
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

                <DynamicString />

                <p className="flex items-center gap-8">
                  Developer
                  <div className="border border-gray-500 w-96"></div>
                </p>
              </div>
              <div className="my-10">
                <Link
                  href={"/"}
                  className="p-5 rounded-xl border bg-gray-900 border-gray-500 text-sky-500 font-semibold text-base"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Neon icons */}
          {/* <NeonIcons /> */}
        </div>
      </div>
    </>
  );
}
