import { projectsData } from "@/components/shared/Projects/projectsInfo";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-950">
      <div className="container mx-auto p-4">
        {projectsData.map((project, indx) => (
          <>
            <div className="w-full min-h-screen grid grid-cols-2 gap-20 items-center">
              <div className="rounded-2xl w-full border-2 border-gray-600 overflow-hidden">
                <Image src={project?.image} />
              </div>
              <div className="">
                <div className="mb-10 flex items-center gap-4">
                  <div className="w-24 border border-sky-600"></div>
                  <p className="text-3xl font-semibold">0{project?.id}</p>
                </div>
                <p className="text-4xl font-bold mb-4">{project?.name}</p>
                <p className="text-base text-gray-400 font-medium">
                  {project?.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
