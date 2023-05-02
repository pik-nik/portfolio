import React from "react"
import Image from "next/image"
import { urlFor } from "../../sanity"

function Skill({ skill }) {
    return (
        <div className="group relative flex flex-col cursor-pointer justify-center rounded-2xl border-2 border-tertiary dark:border-primary_dark hover:border-secondary dark:hover:border-secondary_dark dark:bg-text_dark/20 object-contain items-center">
            {/* <p className="lg:hidden font-sans font text-sm">{skill?.title}</p> */}
            <Image
                src={urlFor(skill?.image).url()}
                alt={skill?.title}
                width="200"
                height="200"
                className="p-3 object-over w-20 h-20 md:w-28 md:h-28 2xl:h-40 2xl:w-40 filter group-hover:opacity-[20%] transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out items-center h-full font-sans font-bold text-center flex">
                <p className="opacity-100">{skill?.title}</p>
            </div>
        </div>
    )
}

export default Skill
