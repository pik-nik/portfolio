import FakeTerminal from "./FakeTerminal"
import NavArrow from "./NavArrow"

function About({ pageInfo }) {
    return (
        <div className="relative py-16 px-4 min-h-screen max-h-fit flex justify-center items-center text-center md:text-left">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl z-10">
                About
            </h1>
            <div className="text-left relative mt-36 md:mt-24 lg:mt-10">
                <FakeTerminal pageInfo={pageInfo} />
            </div>
            <NavArrow nextPage={"Projects"} />
        </div>
    )
}

export default About
