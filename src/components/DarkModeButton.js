import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsMoonStars, BsSun } from "react-icons/bs"
function DarkModeButton() {
    const { systemeTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemeTheme : theme
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            {currentTheme === "dark" ? (
                <div
                    className="ml-10 cursor-pointer text-secondary dark:text-secondary_dark opacity-60 hover:opacity-100 border border-background dark:border-background_dark hover:border-tertiary dark:hover:border-tertiary_dark p-1 rounded-lg"
                    onClick={() => setTheme("light")}
                >
                    <BsSun size={23} />
                </div>
            ) : (
                <div
                    className="ml-10 cursor-pointer text-secondary dark:text-secondary_dark opacity-60 hover:opacity-100 border border-background dark:border-background_dark hover:border-tertiary dark:hover:border-tertiary_dark p-1 rounded-lg"
                    onClick={() => setTheme("dark")}
                >
                    <BsMoonStars size={23} />
                </div>
            )}
        </>
    )
}

export default DarkModeButton
