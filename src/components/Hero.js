import React from "react"
import Link from "next/link"
import BackgroundOvals from "./BackgroundOvals"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

function Hero() {
    return (
        <div className="relative align-middle flex flex-col md:flex-row  justify-evenly items-center text-center md:text-left h-screen">
            <div className="">
                <h2 className="text-4xl pb-2">Hello, my name is</h2>
                <h1 className="md:text-7xl sm:text-6xl text-5xl text-primary dark:text-primary_dark font-bold pb-2">
                    Nikki Pham
                </h1>

                <h2 className="md:text-2xl sm:text-xl text-lg uppercase font-mono tracking-[4px] pb-2">
                    Junior Software Engineer
                </h2>
                <h2 className="md:text-2xl sm:text-xl text-lg uppercase font-mono tracking-[4px] pb-2">
                    based in sydney
                </h2>

                <h3 className="font-serif text-xl">
                    <Link href="/">Check out my resume here</Link>
                </h3>
            </div>
            <div className="ml-10">
                <BackgroundOvals />
                <div className="rounded-full h-96 w-96 mx-auto object-cover">
                    <Image
                        src="/profile-pic-transparent.png"
                        alt="profile pic of Nikki Pham"
                        width="390"
                        height="390"
                        className="rounded-full object-none z-100"
                    />
                </div>
            </div>
            <div className="absolute bottom-5 text-secondary dark:text-secondary_dark invisible md:visible">
                <Link
                    href="/#about"
                    className="items-center flex flex-col"
                    onClick={handleScroll}
                >
                    <p className="uppercase font-mono text-xs tracking-[3px]">
                        about
                    </p>
                    <IoIosArrowDown size={30} />
                </Link>
            </div>
        </div>
    )
}

export default Hero
