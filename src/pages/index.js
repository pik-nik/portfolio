import Head from "next/head"
import styles from "@components/styles/Home.module.css"
import Link from "next/link"
import Navbar from "@components/components/Navbar"
import Hero from "@components/components/Hero"
import About from "@components/components/About"
import Skills from "@components/components/Skills"
import Projects from "@components/components/Projects"
import Contact from "@components/components/Contact"
import { useEffect } from "react"

export default function Home() {
    return (
        <div className="h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-tertiary/80 dark:scrollbar-track-tertiary_dark/80 scrollbar-thumb-primary/80 dark:scrollbar-thumb-primary_dark/80 scrollbar-thin">
            <Head>
                <title>Nikki Pham&apos;s Portfolio</title>
            </Head>

            <Navbar />
            <section
                id="intro"
                className="snap-start w-4/5 max-w-[1250px] mx-auto"
            >
                <Hero />
            </section>
            <section
                id="about"
                className="snap-center w-4/5 max-w-[1250px] mx-auto"
            >
                <About />
            </section>
            <section
                id="skills"
                className="snap-center w-4/5 max-w-[1250px] mx-auto"
            >
                <Skills />
            </section>
            <section
                id="projects"
                className="snap-start w-4/5 max-w-[1250px] mx-auto"
            >
                <Projects />
            </section>
            <section
                id="contact"
                className="snap-start w-4/5 max-w-[1250px] mx-auto"
            >
                <Contact />
            </section>

            {/* contact me */}
        </div>
    )
}
