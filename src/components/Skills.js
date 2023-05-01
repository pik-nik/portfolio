import React from "react"
import Skill from "./Skill"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

function Skills({ skills }) {
    return (
        <div className="py-16 px-4 h-screen flex relative flex-col text-center md:text-left xl:px-10 justify-center min-h-screen max-h-fit xl:space-y-0 mx-auto items-center">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl z-10">
                Tech Skills
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-5 mt-10">
                {skills?.map(skill => (
                    <Skill key={skill._id} skill={skill} />
                ))}
            </div>
            <div className="absolute bottom-5 text-secondary dark:text-secondary_dark invisible md:visible">
                <Link
                    href="/#projects"
                    className="items-center flex flex-col"
                    onClick={handleScroll}
                >
                    <p className="uppercase font-mono text-xs tracking-[3px]">
                        projects
                    </p>
                    <IoIosArrowDown size={30} />
                </Link>
            </div>
        </div>
    )
}

export default Skills
