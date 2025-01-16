import { skillSetIcons } from "@/components/shared/Icons/SkillIcons";
import Image from "next/image";

export default function Skillsets() {
  return (
    <section className="bg-slate-950 min-h-screen flex justify-center items-center">
      <div className="mx-auto p-4 flex flex-col gap-10">
        <div>
          <h1 className="text-5xl font-bold text-center leading-normal">
            My Tech Arsenal
          </h1>
          <p className="text-gray-400 font-medium text-center">
            The powerful technologies I wield to create digital wonders.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-5 gap-10 grid-cols-2">
            {skillSetIcons.map((icon, indx) => (
              <div
                className="group/iconBx w-28 h-28 p-6 border border-gray-600 bg-gray-800 rounded-xl flex justify-center items-center cursor-pointer hover:bg-slate-700 duration-500"
                key={indx}
              >
                <Image
                  src={icon}
                  className="drop-shadow-lg  group-hover/iconBx:scale-125 duration-500"
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
