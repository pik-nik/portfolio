import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsMoonStars, BsSun } from "react-icons/bs"
function DarkModeButton() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            {theme === "dark" ? (
                <div
                    className="ml-10 cursor-pointer text-secondary dark:text-secondary_dark hover:text-primary hover:dark:text-primary_dark border border-background dark:border-background_dark hover:border-tertiary dark:hover:border-tertiary_dark rounded-lg transition-all duration-500 p-1"
                    onClick={() => setTheme("light")}
                >
                    <BsSun size={23} />
                </div>
            ) : (
                <div
                    className="ml-10 cursor-pointer text-secondary dark:text-secondary_dark hover:text-primary hover:dark:text-primary_dark border border-background dark:border-background_dark hover:border-tertiary dark:hover:border-tertiary_dark rounded-lg transition-all duration-500 p-1"
                    onClick={() => setTheme("dark")}
                >
                    <BsMoonStars size={23} />
                </div>
            )}
        </>
    )
}

export default DarkModeButton
