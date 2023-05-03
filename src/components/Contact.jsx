import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import Link from "next/link"
import ContactForm from "./ContactForm"

function Contact({ pageInfo, socials }) {
    const email = socials.filter(contact => contact.title === "Email")[0]
    const linkedIn = socials.filter(contact => contact.title === "LinkedIn")[0]
    const github = socials.filter(contact => contact.title === "Github")[0]
    return (
        <div className="md:min-h-screen md:max-h-fit flex relative text-center md:text-left px-5 md:px-10 mx-auto items-center justify-center w-[80%] md:w-[95%]">
            <h1 className="text-primary dark:text-primary_dark absolute top-36 uppercase tracking-[10px] text-2xl">
                contact
            </h1>
            <div className="mt-48 mb-48 flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0">
                <div className="space-y-6 font-sans">
                    <h2 className="justify-start text-lg md:text-xl p-0 md:pr-10">
                        If you want to work together or just want to say hi, my
                        inbox is always open.
                    </h2>
                    <div className="pl-5 md:pl-0">
                        <div className="flex items-center justify-left space-x-5 my-1 w-max">
                            <IoLocationSharp className="text-xl md:text-2xl text-primary dark:text-primary_dark" />
                            <p className="text-md md:text-lg">
                                {pageInfo?.location}
                            </p>
                        </div>
                        <Link href={email?.url}>
                            <div className="flex items-center justify-left space-x-5 my-1 w-fit">
                                <IoIosMail className="text-xl md:text-2xl text-primary dark:text-primary_dark " />
                                <p className="text-md md:text-lg">
                                    {pageInfo?.email}
                                </p>
                            </div>
                        </Link>
                        <Link
                            href={github?.url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <div className="flex items-center justify-left space-x-5 my-1 w-fit">
                                <IoLogoGithub className="text-xl md:text-2xl text-primary dark:text-primary_dark" />
                                <p className="text-md md:text-lg">
                                    {github?.url.replace("https://", "")}
                                </p>
                            </div>
                        </Link>
                        <Link
                            href={linkedIn?.url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <div className="flex items-center justify-left space-x-5 my-1 w-fit">
                                <IoLogoLinkedin className="text-xl md:text-2xl text-primary dark:text-primary_dark" />
                                <p className="text-md md:text-lg">
                                    {linkedIn?.url.replace("https://www.", "")}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <ContactForm email={pageInfo?.email} />
            </div>

            <footer className="font-mono absolute bottom-10 w-full border-t-secondary dark:border-t-secondary_dark border-t-2 text-center text-sm pt-3">
                <p>
                    Site created by me with Next.js | React | Tailwind |
                    Sanity.io | Vercel
                </p>
                <p className="py-1">&#169; pik-nik 2023</p>
            </footer>
        </div>
    )
}

export default Contact
