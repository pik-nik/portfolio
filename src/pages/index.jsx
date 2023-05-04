import Head from "next/head"
import Navbar from "@components/components/Navbar"
import Sidebar from "@components/components/Sidebar"
import Hero from "@components/components/Hero"
import About from "@components/components/About"
import Projects from "@components/components/Projects"
import Skills from "@components/components/Skills"
import Contact from "@components/components/Contact"
import { loadInfo } from "@components/lib/loadInfo"
import { loadProjects } from "@components/lib/loadProjects"
import { loadSocials } from "@components/lib/loadSocials"
import { urlFor } from "../../sanity"

export default function Home({ pageInfo, projects, socials }) {
    const portfolio = projects.filter(
        project => project.title === "Personal Portfolio"
    )[0]
    return (
        <div className="h-screen snap-none md:snap-y md:snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-tertiary/80 dark:scrollbar-track-tertiary_dark/80 scrollbar-thumb-primary/80 dark:scrollbar-thumb-primary_dark/80 scrollbar-thin">
            <Head>
                <title>
                    {pageInfo?.name} | Portfolio | {pageInfo?.role} |
                    {pageInfo?.location}
                </title>
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
                <meta
                    name="title"
                    property="og:title"
                    content={pageInfo?.name}
                ></meta>
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content={urlFor(portfolio?.image).url()}
                />
                <meta
                    name="description"
                    property="og:description"
                    content={`Portfolio website for ${pageInfo?.name}, ${pageInfo?.role} based in ${pageInfo?.location}`}
                ></meta>
            </Head>
            <Navbar socials={socials} pageInfo={pageInfo} />
            <Sidebar socials={socials} />
            <section id="intro" className="section_index">
                <Hero pageInfo={pageInfo} />
            </section>
            <section id="about" className="section_index">
                <About pageInfo={pageInfo} />
            </section>
            <section id="projects" className="section_index">
                <Projects projects={projects} skills={pageInfo?.skillsOrder} />
            </section>
            <section id="skills" className="section_index">
                <Skills skills={pageInfo?.skillsOrder} />
            </section>
            <section id="contact" className="section_index">
                <Contact pageInfo={pageInfo} socials={socials} />
            </section>
        </div>
    )
}

export const getStaticProps = async () => {
    const pageInfo = await loadInfo()
    const projects = await loadProjects()
    const socials = await loadSocials()

    return {
        props: {
            pageInfo,
            projects,
            socials,
        },
        revalidate: 60,
    }
}
