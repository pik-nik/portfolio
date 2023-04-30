import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"
import FakeTerminal from "./FakeTerminal"

function About({ pageInfo }) {
    return (
        <div className="relative py-16 px-4 min-h-screen max-h-fit flex justify-center items-center text-center md:text-left">
            <h1 className="text-primary dark:text-primary_dark absolute top-32 uppercase tracking-[10px] text-2xl">
                About
            </h1>
            <div className="text-left relative mt-36 md:mt-24 lg:mt-10">
                <FakeTerminal pageInfo={pageInfo} />
            </div>
            <div className="absolute bottom-5 text-secondary dark:text-secondary_dark invisible md:visible">
                <Link
                    href="/#skills"
                    className="items-center flex flex-col"
                    onClick={handleScroll}
                >
                    <p className="uppercase font-mono text-xs tracking-[3px]">
                        skills
                    </p>
                    <IoIosArrowDown size={30} />
                </Link>
            </div>
        </div>
    )
}

export default About
