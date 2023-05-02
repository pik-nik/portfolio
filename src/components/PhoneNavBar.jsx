import { motion } from "framer-motion"
import DarkModeButton from "./DarkModeButton"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import Link from "next/link"

function PhoneNavBar({ nav, handleNav, socials }) {
    const linkedIn = socials.filter(contact => contact.title === "LinkedIn")[0]
    const github = socials.filter(contact => contact.title === "Github")[0]
    const email = socials.filter(contact => contact.title === "Email")[0]
    return (
        <motion.div
            className="flex md:hidden space-x-4 justify-center items-center"
            initial={{ x: 0, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
        >
            <Link href={email?.url}>
                <IoIosMail
                    size={26}
                    className=" text-secondary dark:text-secondary_dark"
                />
            </Link>
            <Link href={github?.url} target="_blank" rel="noreferrer noopener">
                <IoLogoGithub
                    size={26}
                    className="text-secondary dark:text-secondary_dark"
                />
            </Link>
            <Link
                href={linkedIn?.url}
                target="_blank"
                rel="noreferrer noopener"
            >
                <IoLogoLinkedin
                    size={26}
                    className="text-secondary dark:text-secondary_dark"
                />
            </Link>
            <DarkModeButton />
            {nav ? (
                <AiOutlineClose
                    size={30}
                    className="text-secondary dark:text-secondary_dark cursor-pointer"
                    onClick={handleNav}
                />
            ) : (
                <AiOutlineMenu
                    size={30}
                    className="text-secondary dark:text-secondary_dark cursor-pointer"
                    onClick={handleNav}
                />
            )}
        </motion.div>
    )
}

export default PhoneNavBar
