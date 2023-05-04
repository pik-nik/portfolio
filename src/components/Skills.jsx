import Skill from "./Skill"
import NavArrow from "./NavArrow"

function Skills({ skills }) {
    return (
        <div className="section_div flex-col xl:px-10 xl:space-y-0">
            <h1 className="section_heads">Tech Skills</h1>
            {/* <h2 className="font-sans text-primary dark:text-primary_dark py-5 opacity-80 invisible lg:visible">
                Hover over icon for name
            </h2> */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-5 mt-36 md:mt-0">
                {skills?.map(skill => (
                    <Skill key={skill._id} skill={skill} />
                ))}
            </div>
            <NavArrow nextPage={"Contact"} />
        </div>
    )
}

export default Skills
