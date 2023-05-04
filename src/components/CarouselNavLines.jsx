import { FaMinus } from "react-icons/fa"

function CarouselNavLines({ projects, selectedIndex, scrollTo }) {
    return (
        <div
            id="embla_lines"
            className="flex space-x-2 z-100 absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 "
        >
            {projects?.map((_, index) => (
                <div
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`cursor-pointer text-secondary dark:text-secondary_dark ${
                        index === selectedIndex ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <FaMinus size={22} />
                </div>
            ))}
        </div>
    )
}

export default CarouselNavLines
