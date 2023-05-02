import Image from "next/image"
import { urlFor } from "../../sanity"
import { GoLinkExternal } from "react-icons/go"
import { IoLogoGithub } from "react-icons/io"
import Link from "next/link"

function ProjectCard({ project, selected }) {
    return (
        <article
            className={`relative flex flex-col md:flex-row rounded-lg items-center flex-shrink-0 w-full md:w-[85%] px-14 bg-tertiary dark:bg-tertiary_dark transition-opacity duration-200 m-0 pb-10 justify-center space-y-3 md:space-y-0 ${
                selected ? "opacity-100" : "opacity-40"
            }`}
        >
            <Link
                href={project?.linkToGithub}
                target="_blank"
                rel="noreferrer noopener"
            >
                <IoLogoGithub
                    className="absolute top-5 right-5 cursor-pointer text-primary dark:text-primary_dark hover:text-secondary hover:dark:text-secondary_dark"
                    size={30}
                />
            </Link>
            {project.linkToBuild ? (
                <Link
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GoLinkExternal
                        className="absolute top-5 right-14 cursor-pointer text-primary dark:text-primary_dark hover:text-secondary hover:dark:text-secondary_dark"
                        size={30}
                    />
                </Link>
            ) : (
                ""
            )}
            <div className="flex justify-center mx:0 md:pr-5 pt-14">
                <Image
                    src={urlFor(project?.image).url()}
                    alt={project?.title}
                    width="500"
                    height="500"
                    className="w-[60%] max-h-[100%] rounded-lg object-cover object-center grow shadow-lg"
                />
            </div>
            <div className="px-0 font-sans w-[100%] md:w-[60%]">
                <h4 className="py-1 mb-4 uppercase font-mono tracking-[3px] text-2xl border-b-4 border-b-secondary dark:border-b-secondary_dark">
                    {project?.title}
                </h4>
                <div className="flex space-x-2 my-3 items-center justify-center m-auto">
                    {project?.technologies.map(tech => (
                        <div key={tech._id}>
                            <Image
                                src={urlFor(tech.image).url()}
                                alt={tech.title}
                                width="50"
                                height="50"
                                className="w-[40px] mx-0"
                            />
                        </div>
                    ))}
                </div>
                <p className="w-full text-sm">{project?.summary}</p>
                <button className="button  hover:border-tertiary hover:dark:border-tertiary_dark mt-2">
                    Read more
                </button>
            </div>
        </article>
    )
}

export default ProjectCard
