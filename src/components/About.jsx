import FakeTerminal from "./FakeTerminal"
import NavArrow from "./NavArrow"

function About({ pageInfo }) {
    return (
        <div className="section_div mx-2 md:mx-0">
            <h1 className="section_heads">About</h1>
            <div className="text-left relative mt-36 md:mt-0">
                <FakeTerminal pageInfo={pageInfo} />
            </div>
            <NavArrow nextPage={"Projects"} />
        </div>
    )
}

export default About
