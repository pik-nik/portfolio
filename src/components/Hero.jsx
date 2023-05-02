import BackgroundOvals from "./BackgroundOvals"
import Image from "next/image"
import { urlFor } from "../../sanity"
import NavArrow from "./NavArrow"

function Hero({ pageInfo }) {
    return (
        <div className="relative align-middle flex flex-col md:flex-row  justify-evenly items-center text-center md:text-left h-screen">
            <div className="">
                <h2 className="text-4xl pb-2">Hello, my name is</h2>
                <h1 className="md:text-7xl sm:text-6xl text-5xl text-primary dark:text-primary_dark font-bold pb-2">
                    {pageInfo?.name}
                </h1>

                <h2 className="md:text-2xl sm:text-xl text-lg uppercase font-mono tracking-[4px] pb-2">
                    {pageInfo?.role}
                </h2>
                <h2 className="md:text-2xl sm:text-xl text-lg uppercase font-mono tracking-[4px] pb-2">
                    based in {pageInfo?.location}
                </h2>
                <h3 className="font-sans text-l pb-2">
                    {pageInfo?.introDescription}
                </h3>
                <button className="button text-lg">
                    Check out my resume here
                </button>
            </div>
            <div className="ml-10">
                <BackgroundOvals />
                <div className="rounded-full h-96 w-96 mx-auto object-cover">
                    <Image
                        src={urlFor(pageInfo?.heroImage).url()}
                        alt={`profile pic of ${pageInfo?.name}`}
                        width="390"
                        height="390"
                        className="rounded-full object-contain h-[390px] w-[390px] z-100"
                        priority
                    />
                </div>
            </div>
            <NavArrow nextPage={"About"} />
        </div>
    )
}

export default Hero
