function FakeTerminal({ pageInfo }) {
    const sentences = pageInfo.aboutInformation.split(".").slice(0, -1)
    return (
        <div className="block -z-20 shadow-2xl">
            <div
                id="menu"
                className="w-[100%] h-[25px] rounded-t-md bg-[#bbbbbb]"
            >
                <div
                    id="close"
                    className="h-[11px] w-[11px] bg-[#FF605C] absolute inline-block rounded-full top-[7px] left-[7px]"
                />
                <div
                    id="minimise"
                    className="h-[11px] w-[11px] bg-[#FFBD44] absolute inline-block rounded-full top-[7px] left-[24px]"
                />
                <div
                    id="zoom"
                    className="h-[11px] w-[11px] bg-[#00CA4E] absolute inline-block rounded-full top-[7px] left-[41px]"
                />
            </div>
            <div
                id="screen"
                className="w-full h-fit bg-tertiary/30 dark:bg-[#000000] rounded-b-md"
            >
                <div className="font-mono tracking-[2px] relative w-11/12 m-auto p-4 md:p-6 text-sm md:text-base space-y-3">
                    {sentences?.map((sentence, index) => (
                        <div key={index}>
                            <p className="text-primary dark:text-primary_dark">
                                ~/hello-world
                            </p>
                            <p> {sentence}. </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FakeTerminal
