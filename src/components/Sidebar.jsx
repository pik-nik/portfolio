import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import Link from "next/link"

const Sidebar = ({ socials }) => {
    const linkedIn = socials.filter(contact => contact.title === "LinkedIn")[0]
    const github = socials.filter(contact => contact.title === "Github")[0]
    const email = socials.filter(contact => contact.title === "Email")[0]

    return (
        <aside className="fixed right-0 px-10 hidden md:flex flex-col justify-center z-15 h-[80vh] items-start text-secondary dark:text-secondary_dark  space-y-2">
            <Link href={email?.url}>
                <IoIosMail
                    size={23}
                    className=" hover:text-primary hover:dark:text-primary_dark transition ease-in-out duration-300 hover:scale-110"
                />
            </Link>
            <Link href={github?.url} target="_blank" rel="noreferrer noopener">
                <IoLogoGithub
                    size={23}
                    className="hover:text-primary hover:dark:text-primary_dark transition ease-in-out duration-300 hover:scale-110"
                />
            </Link>
            <Link
                href={linkedIn?.url}
                target="_blank"
                rel="noreferrer noopener"
            >
                <IoLogoLinkedin
                    size={23}
                    className="hover:text-primary hover:dark:text-primary_dark transition ease-in-out duration-300 hover:scale-110"
                />
            </Link>
        </aside>
    )
}

export default Sidebar
