import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ProjectCard from "./ProjectCard"
import CarouselPrevBtn from "./CarouselPrevBtn"
import CarouselNextBtn from "./CarouselNextBtn"
import CarouselNavLines from "./CarouselNavLines"

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
        <div className="w-full mt-40 overflow-hidden relative">
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
            <CarouselPrevBtn
                scrollPrev={scrollPrev}
                prevBtnEnabled={prevBtnEnabled}
            />
            <CarouselNextBtn
                scrollNext={scrollNext}
                nextBtnEnabled={nextBtnEnabled}
            />
            <CarouselNavLines
                projects={projects}
                selectedIndex={selectedIndex}
                scrollTo={scrollTo}
            />
        </div>
    )
}

export default Carousel
