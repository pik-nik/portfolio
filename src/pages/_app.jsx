import "@components/styles/globals.css"
import Layout from "@components/components/Layout"
import { ThemeProvider } from "next-themes"
export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Layout>
                {/* <AnimatePresence mode="wait" initial={false}> */}
                <Component {...pageProps} />
                {/* </AnimatePresence> */}
            </Layout>
        </ThemeProvider>
    )
}
