import Link from "next/link"
function ContentMenu({ nav, navigations }) {
    return (
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
                {navigations.map((section, index) => (
                    <li key={index}>
                        <Link
                            href={section.path}
                            className="ml-5 border-b border-fourth dark:border-primary_dark"
                        >
                            {section.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        href="/Resume_Nikki Pham_Junior Software_Engineer_May_2023.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-5 border-b border-fourth dark:border-primary_dark"
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ContentMenu
