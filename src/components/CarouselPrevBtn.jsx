import { BsChevronDoubleLeft } from "react-icons/bs"
function CarouselPrevBtn({ scrollPrev, prevBtnEnabled }) {
    return (
        <button
            className="absolute z-100 top-[45%] md:top-[40%]  left-[1%] md:left-[8.5%] text-secondary dark:text-secondary_dark disabled:opacity-0 animate-bounce"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
        >
            <BsChevronDoubleLeft size={36} />
        </button>
    )
}

export default CarouselPrevBtn
