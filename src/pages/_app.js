import "@components/styles/globals.css"
import Layout from "@components/components/Layout"
export default function App({ Component, pageProps }) {
    return (
        <Layout>
            {/* <AnimatePresence mode="wait" initial={false}> */}
            <Component {...pageProps} />
            {/* </AnimatePresence> */}
        </Layout>
    )
}
