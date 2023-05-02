import Head from "next/head"
import Navbar from "@components/components/Navbar"
import Sidebar from "@components/components/Sidebar"
import Hero from "@components/components/Hero"
import About from "@components/components/About"
import Skills from "@components/components/Skills"
import Projects from "@components/components/Projects"
import Contact from "@components/components/Contact"
import { client } from "../../sanity"

export default function Home({ pageInfo, projects, socials }) {
    return (
        <div className="h-screen snap-none md:snap-y md:snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-tertiary/80 dark:scrollbar-track-tertiary_dark/80 scrollbar-thumb-primary/80 dark:scrollbar-thumb-primary_dark/80 scrollbar-thin">
            <Head>
                <title>Nikki Pham | Portfolio | Software Engineer</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Navbar />
            <Sidebar socials={socials} />
            <section
                id="intro"
                className="snap-start w-11/12 md:w-4/5 max-w-[1250px] mx-auto"
            >
                <Hero pageInfo={pageInfo} />
            </section>
            <section
                id="about"
                className="snap-start w-full md:w-4/5 max-w-[1250px] mx-auto"
            >
                <About pageInfo={pageInfo} />
            </section>
            <section
                id="projects"
                className="snap-start w-full md:w-4/5 max-w-[1250px] mx-auto"
            >
                <Projects projects={projects} skills={pageInfo?.skillsOrder} />
            </section>
            <section
                id="skills"
                className="snap-start w-full md:w-4/5 max-w-[1250px] mx-auto"
            >
                <Skills skills={pageInfo?.skillsOrder} />
            </section>
            <section
                id="contact"
                className="snap-start w-full md:w-4/5 max-w-[1250px] mx-auto"
            >
                <Contact pageInfo={pageInfo} socials={socials} />
            </section>
        </div>
    )
}

export const getStaticProps = async () => {
    // const pageInfo = await fetchInfo()
    const pageInfo = await client.fetch(`
    *[_type == "info"][0] {
        ..., 
        socials[]->, 
        skillsOrder[]->
      }
      `)
    // const projects = await fetchProjects()
    const projects =
        await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
        ..., 
        technologies[]->
      } `)
    // const skills = await fetchSkills()
    // const socials = await fetchSocials()
    const socials = await client.fetch(`*[_type == "social"]`)

    return {
        props: {
            pageInfo,
            projects,
            // skills,
            socials,
        },
        revalidate: 60,
    }
}
