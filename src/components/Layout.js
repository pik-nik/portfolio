import { DM_Sans, DM_Mono, DM_Serif_Text } from "@next/font/google"

const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    variable: "--font-dm-sans",
    display: "swap",
})

const dm_mono = DM_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    variable: "--font-dm-mono",
    display: "swap",
})

const dm_serif_text = DM_Serif_Text({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
    variable: "--font-dm-serif-text",
    display: "swap",
})

const Layout = ({ children }) => {
    return (
        <div
            className={`${dm_sans.variable} ${dm_mono.variable} ${dm_serif_text.variable}`}
        >
            <div>{children}</div>
        </div>
    )
}
export default Layout
