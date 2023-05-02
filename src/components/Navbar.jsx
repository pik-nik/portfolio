import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import handleScroll from "@components/utils/handleScroll"
import DarkModeButton from "./DarkModeButton"
const Navbar = () => {
    const navigations = [
        { label: "Intro", path: "/#intro" },
        { label: "About", path: "/#about" },
        { label: "Projects", path: "/#projects" },
        { label: "Skills", path: "/#skills" },
        { label: "Contact", path: "/#contact" },
    ]
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="sticky top-0 py-5 px-10 my-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-background dark:bg-background_dark h-18 transition-colors duration-500">
            <motion.div
                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* logo */}
                <h1 className="font-serif text-3xl">
                    <Link href="/#intro" onClick={handleScroll}>
                        N/P
                    </Link>
                </h1>
            </motion.div>
            <motion.div
                className="hidden md:flex flex-row items-center font-mono"
                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                {navigations.map((nav, index) => (
                    <div key={index}>
                        <Link
                            href={nav.path}
                            className="ml-5 border-b-0 hover:border-b-2 hover:border-b-secondary dark:hover:border-b-secondary_dark py-1"
                            onClick={handleScroll}
                        >
                            {nav.label}
                        </Link>
                    </div>
                ))}

                <div>
                    <Link
                        href="/Resume_Nikki Pham_Junior Software_Engineer_May_2023.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-5 border-b-0 hover:border-b-2 hover:border-b-secondary dark:hover:border-b-secondary_dark py-1"
                    >
                        Resume
                    </Link>
                </div>
                <DarkModeButton />
            </motion.div>
            <div className="flex md:hidden space-x-4">
                <DarkModeButton />
                {nav ? (
                    <AiOutlineClose
                        size={25}
                        className="text-secondary dark:text-secondary_dark cursor-pointer"
                        onClick={handleNav}
                    />
                ) : (
                    <AiOutlineMenu
                        size={25}
                        className="text-secondary dark:text-secondary_dark cursor-pointer"
                        onClick={handleNav}
                    />
                )}
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full bg-tertiary dark:bg-tertiary_dark ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="font-serif text-3xl p-6">
                    <Link href="/">N/P</Link>
                </h1>
                <ul className="p-4 font-mono space-y-2">
                    {navigations.map((nav, index) => (
                        <li key={index}>
                            <Link
                                href={nav.path}
                                className="ml-5 border-b border-fourth dark:border-fourth_dark"
                            >
                                {nav.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/Resume_Nikki Pham_Junior Software_Engineer_May_2023.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="ml-5 border-b border-fourth dark:border-fourth_dark"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
