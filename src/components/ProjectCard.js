import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

function ProjectCard() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] m:w-[600px] xl:w-[900px] snap-center p-10 bg-tertiary dark:bg-tertiary_dark hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                src="/project-images/burger-mobile-version.jpg"
                alt=""
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />

            <div className="px-0 md:px-10">
                <h4 className="py-5">Project name</h4>
                <div className="flex space-x-2 my-2">Tech Stack</div>
                <p>add description here</p>
                <button>See More Here</button>
            </div>
        </article>
    )
}

export default ProjectCard
