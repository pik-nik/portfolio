import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import Link from "next/link"

function ContactInfo({ socials, pageInfo }) {
    const email = socials.filter(contact => contact.title === "Email")[0]
    const linkedIn = socials.filter(contact => contact.title === "LinkedIn")[0]
    const github = socials.filter(contact => contact.title === "Github")[0]

    return (
        <div className="space-y-6 font-sans">
            <h2 className="justify-start text-lg md:text-xl md:text-left p-0 md:pr-10 px-4 md:px-0">
                If you would like to work together or just want to say hi, my
                inbox is always open.
            </h2>
            <div className="pl-5 md:pl-0">
                <div className="flex items-center justify-left space-x-5 my-1 w-max">
                    <IoLocationSharp className="text-xl md:text-2xl text-primary dark:text-primary_dark" />
                    <p className="text-base md:text-lg">{pageInfo?.location}</p>
                </div>
                <Link href={email?.url}>
                    <div className="flex items-center justify-left space-x-5 my-1 w-fit">
                        <IoIosMail className="text-xl md:text-2xl text-primary dark:text-primary_dark " />
                        <p className="text-base md:text-lg">
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
                        <p className="text-base md:text-lg">
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
                        <p className="text-base md:text-lg">
                            {linkedIn?.url.replace("https://www.", "")}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ContactInfo
