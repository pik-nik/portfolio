import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import { urlFor } from "../../sanity"
import NavArrow from "./NavArrow"
import Link from "next/link"

function Hero({ pageInfo }) {
    return (
        <div className="relative align-middle flex flex-col md:flex-row justify-center space-y-5 items-center text-center md:text-left min-h-screen max-h-fit">
            <div className="">
                <h2 className="text-2xl md:text-4xl pb-2">Hello, my name is</h2>
                <h1 className="md:text-7xl sm:text-6xl text-5xl text-primary dark:text-primary_dark font-bold pb-2">
                    {pageInfo?.name}
                </h1>

                <h2 className="md:text-2xl sm:text-xl text-md uppercase font-mono tracking-[4px] pb-2">
                    {pageInfo?.role}
                </h2>
                <h2 className="md:text-2xl sm:text-xl text-md uppercase font-mono tracking-[4px] pb-2">
                    based in {pageInfo?.location}
                </h2>
                <h3 className="font-sans text-sm md:text-lg pb-2">
                    {pageInfo?.introDescription}
                </h3>
                <Link
                    href="/Resume_Nikki Pham_Junior Software_Engineer_May_2023.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <button className="button text-md md:text-lg">
                        Check out my resume here
                    </button>
                </Link>
            </div>
            <div className="m-0 md:ml-10">
                <BackgroundCircles />
                <div className="rounded-full h-48 w-48 md:h-96 md:w-96 mx-auto object-cover block">
                    <Image
                        src={urlFor(pageInfo?.heroImage).url()}
                        alt={`profile pic of ${pageInfo?.name}`}
                        width="390"
                        height="390"
                        className="rounded-full object-contain h-[250px] w-[250px] md:h-[390px] md:w-[390px] z-100"
                        priority
                    />
                </div>
            </div>
            <NavArrow nextPage={"About"} />
        </div>
    )
}

export default Hero
