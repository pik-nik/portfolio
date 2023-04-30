import React from "react"
import { motion } from "framer-motion"

function BackgroundOvals() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={({ scale: [1, 1.1] }, { opacity: [1, 1] })}
            transition={{ duration: 2.5 }}
            className="relative flex justify-center item-center"
        >
            <div className="border-primary dark:border-primary_dark border-8 rounded-full h-[390px] w-[390px] animate-pulse absolute" />
            <div className="bg-tertiary dark:bg-tertiary_dark rounded-full h-[390px] w-[390px] absolute -z-10" />
            {/* <div className="border-[#63123F] border-8 rounded-full h-[400px] w-[400px]  animate-pulse absolute z-10" />
            <div /> */}
        </motion.div>
    )
}

export default BackgroundOvals
