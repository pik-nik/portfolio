import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useRouter } from "next/router"
import handleScroll from "@components/utils/handleScroll"
import { BsMoonStars, BsSun } from "react-icons/bs"
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const router = useRouter()
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    // const [routeHash, setRouteHash] = useState()

    // useEffect(() => {
    //     setRouteHash(window.location.hash)
    //     console.log(window.location.hash)
    // }, [])
    // console.log(router.asPath)

    return (
        <nav className="sticky top-0 py-5 px-10 my-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-background h-18">
            <motion.div
                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* logo */}
                <h1 className="font-serif text-3xl">
                    <Link href="/">N/P</Link>
                </h1>
            </motion.div>
            <motion.div
                className="hidden md:flex flex-row items-center font-mono"
                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* Links */}
                <div>
                    <Link
                        href="/#intro"
                        className={`ml-5 ${
                            router.asPath === "/#intro" ? "text-primary" : ""
                        }`}
                        onClick={handleScroll}
                    >
                        Intro
                    </Link>
                </div>
                <div>
                    <Link
                        href="/#about"
                        className="ml-5"
                        onClick={handleScroll}
                    >
                        About
                    </Link>
                </div>
                <div>
                    <Link
                        href="/#skills"
                        className="ml-5"
                        onClick={handleScroll}
                    >
                        Skills
                    </Link>
                </div>
                <div>
                    <Link
                        href="/#projects"
                        className="ml-5"
                        onClick={handleScroll}
                    >
                        Projects
                    </Link>
                </div>
                <div>
                    <Link
                        href="/#contact"
                        className="ml-5"
                        onClick={handleScroll}
                    >
                        Contact
                    </Link>
                </div>
                <div>
                    <Link href="/#resume" className="ml-5">
                        Resume
                    </Link>
                </div>
                <div
                    className="ml-10 cursor-pointer text-secondary"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? <BsSun size={23} /> : <BsMoonStars size={23} />}
                </div>
            </motion.div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose
                        size={20}
                        className="text-secondary animate-pulse"
                    />
                ) : (
                    <AiOutlineMenu size={25} className="text-secondary" />
                )}
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-tertiary ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="font-serif text-3xl p-6">
                    <Link href="/">N/P</Link>
                </h1>
                <ul className="p-4">
                    <li>
                        <Link
                            href="/#intro"
                            className="ml-5  border-b border-fourth"
                        >
                            Intro
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className="ml-5  border-b border-fourth"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#skills"
                            className="ml-5 border-b border-fourth"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="ml-5 border-b border-fourth"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="ml-5 border-b border-fourth"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#resume"
                            className="ml-5 border-b border-fourth"
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
