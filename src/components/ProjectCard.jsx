import Image from "next/image"
import { urlFor } from "../../sanity"
import Link from "next/link"
import ProjectLinks from "./ProjectLinks"
import ProjectTechStack from "./ProjectTechStack"

function ProjectCard({ project, selected }) {
    return (
        <article
            className={`relative flex flex-col md:flex-row rounded-lg items-center flex-shrink-0 w-full md:w-[85%] px-8 md:px-14 bg-tertiary dark:bg-tertiary_dark transition-opacity duration-200 m-0 pb-10 justify-center space-y-3 md:space-y-0 ${
                selected ? "opacity-100" : "opacity-40"
            }`}
        >
            <ProjectLinks project={project} />
            <Link
                href={
                    project?.linkToBuild
                        ? project.linkToBuild
                        : project.linkToGithub
                }
                target="_blank"
                rel="noreferrer noopener"
            >
                <div className="flex justify-center mx:0 md:mr-5 mt-14 md:mt-0">
                    <Image
                        src={urlFor(project?.image).url()}
                        alt={project?.title}
                        width="500"
                        height="500"
                        className="w-[60%] max-h-[100%] rounded-lg object-cover object-center grow shadow-lg"
                    />
                </div>
            </Link>
            <div className="px-0 font-sans w-[100%] md:w-[60%]">
                <h4 className="py-1 mb-4 uppercase font-mono tracking-[3px] text-2xl border-b-4 border-b-secondary dark:border-b-secondary_dark">
                    {project?.title}
                </h4>
                <ProjectTechStack project={project} />
                <p className="w-full text-sm">{project?.summary}</p>
                {
                    /* <button className="button hover:border-tertiary hover:dark:border-tertiary_dark mt-2">
                    Read more
                </button> */
                    // add this when  projects details page is added.
                }
            </div>
        </article>
    )
}

export default ProjectCard
