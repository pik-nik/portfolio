import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import Link from "next/link"
const Sidebar = () => {
    return (
        <aside className="fixed right-0 px-10 hidden md:flex flex-col justify-center z-15 h-[80vh] items-start text-secondary dark:text-secondary_dark">
            <Link href={"https://www.linkedin.com/in/nikkipham/"}>
                <IoLogoLinkedin
                    size={23}
                    className="opacity-60 hover:opacity-100"
                />
            </Link>
            <Link href={"https://github.com/pik-nik"}>
                <IoLogoGithub
                    size={23}
                    className="opacity-60 hover:opacity-100 my-3"
                />
            </Link>
            <Link href={"mailto:nikki.piknik@gmail.com"}>
                <IoIosMail size={23} className="opacity-60 hover:opacity-100" />
            </Link>
        </aside>
    )
}

export default Sidebar
