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
        <div className="section_div">
            <h1 className="section_heads">Projects</h1>
            <ProjectsFilter skills={skills} setSelectedTech={setSelectedTech} />

            <div className="flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly relative">
                <Carousel projects={filteredProjects} />
            </div>
            <NavArrow nextPage={"Skills"} />
        </div>
    )
}

export default Projects
