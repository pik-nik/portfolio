import { motion } from "framer-motion"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"
import Carousel from "./Carousel"
import { useState } from "react"

function Projects({ projects, skills }) {
    const [selectedTech, setSelectedTech] = useState("All")
    let filteredProjects = projects?.filter(project => {
        if (selectedTech === "All") {
            return project
        } else {
            return project.technologies
                .map(tech => tech.title)
                .includes(selectedTech)
        }
    })

    return (
        <div className="py-16 px-4 min-h-screen max-h-fit flex justify-center relative text-center mx-auto">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl">
                Projects
            </h1>
            <div className="absolute top-40 right-[12%] z-20 font-sans text-xs">
                <select
                    onChange={e => setSelectedTech(e.target.value)}
                    className="border border-tertiary dark:border-tertiary_dark rounded-lg focus:ring-secondary focus:border-secondary p-0.5 focus:outline-none"
                >
                    <option value="All">Filter by tech</option>
                    <option value="All">All</option>
                    {skills?.map(skill => (
                        <option key={skill._id} value={skill.title}>
                            {skill.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly relative">
                <Carousel projects={filteredProjects} />
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
