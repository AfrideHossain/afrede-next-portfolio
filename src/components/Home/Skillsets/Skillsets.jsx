import { skillSetIcons } from "@/components/shared/Icons/SkillIcons";
import Image from "next/image";

export default function Skillsets() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-center leading-normal">
          My Tech Arsenal
        </h1>
        <p className="text-gray-400 font-medium text-center">
          The powerful technologies I wield to create digital wonders.
        </p>
        <div className="max-w-xl mx-auto grid md:grid-cols-5 gap-10 grid-cols-2">
          {skillSetIcons.map((icon, indx) => (
            <div className="w-24 p-4 bg-slate-600 rounded-xl flex justify-center items-center" key={indx}>
              <Image src={icon} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
