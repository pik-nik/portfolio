import { GoLinkExternal } from "react-icons/go"
import { IoLogoGithub } from "react-icons/io"
import Link from "next/link"

function ProjectLinks({ project }) {
    return (
        <div>
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
        </div>
    )
}

export default ProjectLinks
