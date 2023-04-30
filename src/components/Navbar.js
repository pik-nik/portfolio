import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useRouter } from "next/router"
import handleScroll from "@components/utils/handleScroll"
import DarkModeButton from "./DarkModeButton"
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const navigations = [
        { label: "Intro", path: "/#intro" },
        { label: "About", path: "/#about" },
        { label: "Skills", path: "/#skills" },
        { label: "Projects", path: "/#projects" },
        { label: "Contact", path: "/#contact" },
    ]
    const handleNav = () => {
        setNav(!nav)
    }

    const router = useRouter()

    // const [routeHash, setRouteHash] = useState()

    // useEffect(() => {
    //     setRouteHash(window.location.hash)
    //     console.log(window.location.hash)
    // }, [])
    // console.log(router.asPath)

    return (
        <nav className="sticky top-0 py-5 px-10 my-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-background dark:bg-background_dark h-18 transition-colors duration-500">
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
                {navigations.map((nav, index) => (
                    <div key={index}>
                        <Link
                            href={nav.path}
                            className="ml-5 border-b-0 hover:border-b-2 hover:border-b-secondary dark:hover:border-b-secondary_dark py-1"
                            // className={`ml-5 ${
                            //     router.asPath === nav.path ? "text-primary" : ""
                            // }`}
                            onClick={handleScroll}
                        >
                            {nav.label}
                        </Link>
                    </div>
                ))}

                <div>
                    <Link href="/#resume" className="ml-5">
                        Resume
                    </Link>
                </div>
                <DarkModeButton />
            </motion.div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose
                        size={20}
                        className="text-secondary dark:text-secondary_dark animate-pulse"
                    />
                ) : (
                    <AiOutlineMenu
                        size={25}
                        className="text-secondary dark:text-secondary_dark"
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
                <ul className="p-4">
                    {navigations.map((nav, index) => (
                        <li key={index}>
                            <Link
                                href={nav.path}
                                className="ml-5  border-b border-fourth dark:border-fourth_dark"
                            >
                                {nav.label}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link
                            href="/#resume"
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
