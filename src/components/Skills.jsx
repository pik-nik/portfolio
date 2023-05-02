import Skill from "./Skill"
import NavArrow from "./NavArrow"

function Skills({ skills }) {
    return (
        <div className="py-16 px-4 flex relative flex-col text-center md:text-left xl:px-10 justify-center min-h-screen max-h-fit xl:space-y-0 mx-auto items-center">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl z-10">
                Tech Skills
            </h1>
            {/* <h2 className="font-sans text-primary dark:text-primary_dark absolute top-36 py-5 opacity-80 invisible lg:visible">
                Hover over icon for name
            </h2> */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-5">
                {skills?.map(skill => (
                    <Skill key={skill._id} skill={skill} />
                ))}
            </div>
            <NavArrow nextPage={"Contact"} />
        </div>
    )
}

export default Skills
