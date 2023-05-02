import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import handleScroll from "@components/utils/handleScroll"

function NavArrow({ nextPage }) {
    return (
        <div className="absolute bottom-5 text-secondary dark:text-secondary_dark hover:text-primary hover:dark:text-primary_dark invisible md:visible transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
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
