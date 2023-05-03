import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import handleScroll from "@components/utils/handleScroll"
import DarkModeButton from "./DarkModeButton"
import PhoneNavBar from "./PhoneNavBar"
import ContentMenu from "./ContentMenu"

const Navbar = ({ socials }) => {
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
        <nav className="sticky top-0 py-5 px-10 my-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center bg-background dark:bg-background_dark h-18 transition-colors duration-500">
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
            <PhoneNavBar nav={nav} handleNav={handleNav} socials={socials} />
            <ContentMenu nav={nav} navigations={navigations} />
        </nav>
    )
}

export default Navbar
