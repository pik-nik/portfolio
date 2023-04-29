import React from "react"

function Contact() {
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h1 className="text-primary absolute top-36 uppercase tracking-[10px] text-2xl ">
                contact
            </h1>
            <footer className="absolute bottom-10 w-full border-t-secondary border-t-2 flex">
                Made with Next.js and Tailwind
            </footer>
        </div>
    )
}

export default Contact
