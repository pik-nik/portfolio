import { client } from "../../../sanity"
const query = `*[_type == "social"]`

export default async function handler(req, res) {
    const socials = await client.fetch(query)
    res.status(200).json({ socials })
}
