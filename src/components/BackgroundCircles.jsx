import React from "react"
import { motion } from "framer-motion"

function BackgroundCircles() {
    return (
        <div className="relative flex justify-center item-center">
            <div className="border-primary dark:border-primary_dark border-8 rounded-full h-[255px] w-[255px] md:h-[390px] md:w-[390px] absolute z-20" />
            <div className="bg-tertiary dark:bg-tertiary_dark rounded-full h-[250px] w-[250px] md:h-[390px] md:w-[390px] absolute -z-10" />
            <motion.div
                initial={{ x: 0, opacity: 0, scale: 1.5 }}
                animate={{ x: 0, opacity: 0.8, scale: 1 }}
                transition={{ duration: 2.5 }}
                className="absolute -z-20"
            >
                <div className="bg-fourth dark:bg-fourth_dark rounded-full h-[250px] w-[250px] md:h-[390px] md:w-[390px]" />
            </motion.div>
        </div>
    )
}

export default BackgroundCircles
