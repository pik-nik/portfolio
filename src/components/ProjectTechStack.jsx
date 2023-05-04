import Image from "next/image"
import { urlFor } from "../../sanity"

function ProjectTechStack({ project }) {
    return (
        <div className="flex space-x-2 my-3 items-center justify-center m-auto bg-text_dark/40 w-fit px-2 py-1 rounded-lg">
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
    )
}

export default ProjectTechStack
