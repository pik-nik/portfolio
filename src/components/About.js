import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

function About() {
    return (
        <div className="relative py-16 px-4 h-screen flex justify-center items-center">
            <div className="grid md: grid-cols-2">
                <div>
                    <h1>About</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corrupti atque officiis nulla corporis dolor optio
                        nihil possimus, beatae perferendis id magni cum facilis
                        quam saepe enim ipsam ducimus voluptate consequuntur!
                    </p>
                </div>
            </div>
            <div className="absolute bottom-5 text-secondary invisible md:visible">
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
