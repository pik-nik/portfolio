import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

function NavArrow({ nextPage }) {
    return (
        <div className="absolute bottom-5 text-secondary dark:text-secondary_dark invisible md:visible">
            <Link
                href={`/#${nextPage.toLowerCase()}`}
                className="items-center flex flex-col"
                onClick={handleScroll}
            >
                <p className="uppercase font-mono text-xs tracking-[3px]">
                    {nextPage}
                </p>
                <IoIosArrowDown size={30} />
            </Link>
        </div>
    )
}

export default NavArrow
