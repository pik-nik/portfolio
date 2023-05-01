import Image from "next/image"
import { urlFor } from "../../sanity"
import { GoLinkExternal } from "react-icons/go"
import { IoLogoGithub } from "react-icons/io"
import Link from "next/link"

function ProjectCard({ project, selected }) {
    return (
        <article
            className={`relative flex flex-col md:flex-row rounded-lg items-center space-y-7 space-x-7 flex-shrink-0 w-[85%] snap-center py-10 px-14 bg-tertiary dark:bg-tertiary_dark transition-opacity duration-200 overflow-hidden ${
                selected ? "opacity-100" : "opacity-40"
            }`}
        >
            <Link href={project?.linkToGithub}>
                <IoLogoGithub
                    className="absolute top-5 right-5 cursor-pointer text-primary dark:text-primary_dark hover:text-secondary hover:dark:text-secondary_dark"
                    size={30}
                />
            </Link>
            {project.linkToBuild ? (
                <Link href={project.linkToBuild}>
                    <GoLinkExternal
                        className="absolute top-5 right-14 cursor-pointer text-primary dark:text-primary_dark hover:text-secondary hover:dark:text-secondary_dark"
                        size={30}
                    />
                </Link>
            ) : (
                ""
            )}
            <Image
                src={urlFor(project?.image).url()}
                alt={project?.title}
                width="500"
                height="500"
                className="w-[60%] rounded-lg object-cover object-center grow shadow-lg"
            />
            <div className="px-0 font-sans">
                <h4 className="py-1 mb-4 uppercase font-mono tracking-[3px] text-2xl border-b-4 border-b-secondary dark:border-b-secondary_dark">
                    {project?.title}
                </h4>
                <div className="flex space-x-2 my-3 items-center justify-center">
                    {project?.technologies.map(tech => (
                        <div key={tech._id}>
                            <Image
                                src={urlFor(tech.image).url()}
                                alt={tech.title}
                                width="50"
                                height="50"
                                className="w-[40px]"
                            />
                        </div>
                    ))}
                </div>
                <p className="w-full text-sm">{project?.summary}</p>
                <button className="mt-2 py-2 px-4 font-sans text-sm rounded bg-transparent hover:bg-secondary dark:hover:bg-secondary_dark text-primary dark:text-primary_dark hover:text-background dark:hover:text-text_dark border border-primary dark:border-primary_dark hover:border-tertiary hover:dark:border-tertiary_dark">
                    Read more
                </button>
            </div>
        </article>
    )
}

export default ProjectCard
