import { projectsData } from "@/components/shared/Projects/projectsInfo";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-950">
      <div className="container mx-auto p-4">
        {projectsData.map((project, indx) => (
          <div
            key={project?.id}
            className="w-full min-h-screen grid grid-cols-2 gap-20 items-center"
          >
            <div className="rounded-2xl w-full border-4 border-orange-400 overflow-hidden">
              <Image
                src={project?.image}
                alt={`${project?.name} screen shot`}
              />
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-24 border border-sky-600"></div>
                <p className="text-3xl font-semibold">0{project?.id}</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-4">{project?.name}</p>
                <p className="text-base text-gray-400 font-medium">
                  {project?.description}
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Tech Stack: </p>
                  <div className="ps-2 flex gap-2 items-center">
                    {project?.techStack.map((tech, indx) => (
                      <p key={indx} className="capitalize">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                {project?.liveLink && (
                  <Link
                    href={project?.liveLink}
                    className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-1 items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
                  >
                    Visit
                    <IoIosArrowRoundForward />
                  </Link>
                )}
                {project?.frontendCode && (
                  <Link
                    href={project?.frontendCode}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    {"<Frontend code />"}
                  </Link>
                )}
                {project?.backendCode && (
                  <Link
                    href={project?.backendCode}
                    className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800"
                  >
                    {"{Backend Code}"}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
