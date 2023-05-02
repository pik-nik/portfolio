export const fetchInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getInfo`)
    const data = await res.json()
    const info = data.info
    console.log(data)
    console.log("fetchInfo", info)
    return info
}
