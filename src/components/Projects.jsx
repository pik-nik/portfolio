import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

import Carousel from "./Carousel"

function Projects({ projects }) {
    return (
        <div className="py-16 px-4 h-screen flex justify-center relative text-center">
            <div className="flex overflow-hidden relative flex-col text-lft md:flex-row max-w-full max-h-[80vh] px-10 justify-evenly mx-auto">
                <h1 className="text-primary dark:text-primary_dark absolute top-16 uppercase tracking-[10px] text-2xl">
                    Projects
                </h1>
                <Carousel projects={projects} />
            </div>
            <div className="absolute bottom-5 text-secondary dark:text-secondary_dark invisible md:visible">
                <Link
                    href="/#contact"
                    className="items-center flex flex-col"
                    onClick={handleScroll}
                >
                    <p className="uppercase font-mono text-xs tracking-[3px]">
                        contact
                    </p>
                    <IoIosArrowDown size={30} />
                </Link>
            </div>
        </div>
    )
}

export default Projects
