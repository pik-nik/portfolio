import { BsChevronDoubleRight } from "react-icons/bs"

function CarouselNextBtn({ scrollNext, nextBtnEnabled }) {
    return (
        <button
            className="absolute z-100 top-[45%] right-[1%] md:right-[8.5%] text-secondary dark:text-secondary_dark disabled:opacity-0 animate-bounce"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
        >
            <BsChevronDoubleRight size={36} />
        </button>
    )
}

export default CarouselNextBtn
