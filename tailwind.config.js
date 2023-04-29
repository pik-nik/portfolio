/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        // "./app/**/*.{js,ts,jsx,tsx,mdx}",
        // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-dm-sans)"],
                serif: ["var(--font-dm-serif-text)"],
                mono: ["var(--font-dm-mono)"],
            },
        },
        colors: {
            primary: "#63123F",
            secondary: "#FB099A",
            tertiary: "#D6C0D1",
            fourth: "#41209A",
            text: "#343234",
            background: "#ffffff",
            primary_dark: "#C4FF9E",
            secondary_dark: "#5BB780",
            tertiary_dark: "#B75B92",
            fourth_dark: "#154145",
            text_dark: "#ffffff",
            background_dark: "#343234",
        },
    },
    darkMode: "class",
    plugins: [require("tailwind-scrollbar")],
}
