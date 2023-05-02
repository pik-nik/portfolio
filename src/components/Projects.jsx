import ProjectsFilter from "./ProjectsFilter"
import Carousel from "./Carousel"
import { useState } from "react"
import NavArrow from "./NavArrow"

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
        <div className="p-16 px-4 md:min-h-screen md:max-h-fit flex justify-center relative text-center mx-auto">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl">
                Projects
            </h1>
            <ProjectsFilter skills={skills} setSelectedTech={setSelectedTech} />

            <div className="flex overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly relative">
                <Carousel projects={filteredProjects} />
            </div>
            <NavArrow nextPage={"Skills"} />
        </div>
    )
}

export default Projects
