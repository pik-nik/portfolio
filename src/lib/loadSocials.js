import { client } from "../../sanity"

export async function loadSocials() {
    const data = await client.fetch(`
        *[_type == "social"]   
    `)

    return data
}
