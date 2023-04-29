import React from "react"

function Skill() {
    return (
        <div className="group relative flex cursor-pointer">
            <p className="text-primary filter group-hover:grayscale transition duration-300 ease-in-out">
                Skill
            </p>
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover bg-white rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="opacity-100">name</p>
                </div>
            </div>
        </div>
    )
}

export default Skill
