import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import Link from "next/link"
import ContactForm from "./ContactForm"

function Contact({ pageInfo, socials }) {
    const email = socials.filter(contact => contact.title === "Email")[0]
    const linkedIn = socials.filter(contact => contact.title === "LinkedIn")[0]
    const github = socials.filter(contact => contact.title === "Github")[0]
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left px-10 mx-auto items-center">
            <h1 className="text-primary dark:text-primary_dark absolute top-36 uppercase tracking-[10px] text-2xl">
                contact
            </h1>
            <div className="mt-60 flex flex-col md:flex-row space-x-4">
                <div className="space-y-6 font-sans">
                    <h2 className="justify-start text-xl">
                        If you want to work together or just want to say hi, my
                        inbox is always open
                    </h2>
                    <div>
                        <div className="flex items-center justify-left space-x-5 my-1">
                            <IoLocationSharp className="text-2xl text-primary dark:text-primary_dark" />
                            <p className="text-lg">{pageInfo?.location}</p>
                        </div>
                        <Link href={email?.url}>
                            <div className="flex items-center justify-left space-x-5 my-1">
                                <IoIosMail className="text-2xl text-primary dark:text-primary_dark " />
                                <p className="text-lg">{pageInfo?.email}</p>
                            </div>
                        </Link>
                        <Link href={github?.url}>
                            <div className="flex items-center justify-left space-x-5 my-1">
                                <IoLogoGithub className="text-2xl text-primary dark:text-primary_dark " />
                                <p className="text-lg">{github?.url}</p>
                            </div>
                        </Link>
                        <Link href={linkedIn?.url}>
                            <div className="flex items-center justify-left space-x-5 my-1">
                                <IoLogoLinkedin className="text-2xl text-primary dark:text-primary_dark " />
                                <p className="text-lg">{linkedIn?.url}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <ContactForm email={pageInfo?.email} />
            </div>

            <footer className="absolute bottom-10 w-full border-t-secondary dark:border-t-secondary_dark border-t-2 flex">
                Made with Next.js and Tailwind
            </footer>
        </div>
    )
}

export default Contact
