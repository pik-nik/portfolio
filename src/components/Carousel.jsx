import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs"
import { FaMinus } from "react-icons/fa"
import ProjectCard from "./ProjectCard"

function Carousel({ projects }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback(
        index => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])
    return (
        <div className="w-full mt-32 overflow-hidden relative">
            <div id="embla" ref={emblaRef}>
                <div
                    id="embla_container"
                    className="flex space-x-5 min-h-[60vh] max-h-fit"
                >
                    {projects?.map((project, index) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            selected={index === selectedIndex}
                        />
                    ))}
                </div>
            </div>
            <button
                id="embla__prev"
                className="absolute z-100 top-[45%] left-[8.5%] text-secondary dark:text-secondary_dark disabled:opacity-0 animate-bounce"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <BsChevronDoubleLeft size={36} />
            </button>
            <button
                id="embla__next"
                className="absolute z-100 top-[45%] right-[8.5%] text-secondary dark:text-secondary_dark disabled:opacity-0 animate-bounce"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <BsChevronDoubleRight size={36} />
            </button>
            <div
                id="embla_lines"
                className="flex space-x-2 z-100 absolute bottom-3 left-1/2 -translate-x-1/2 "
            >
                {projects?.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`cursor-pointer text-secondary dark:text-secondary_dark ${
                            index === selectedIndex
                                ? "opacity-100"
                                : "opacity-50"
                        }`}
                    >
                        <FaMinus size={22} />
                    </div>
                ))}
            </div>
            {/* old code using no dependencies */}
            {/* <div className="w-full flex-shrink-0 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20  scrollbar-track-tertiary/80 dark:scrollbar-track-tertiary_dark/80 scrollbar-thumb-primary/80 dark:scrollbar-thumb-primary_dark/80 scrollbar-thin">
                    {projects?.map(project => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div> */}
        </div>
    )
}

export default Carousel
