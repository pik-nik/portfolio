import { client } from "../../../sanity"
const query = `*[_type == "skill"]`

export default async function handler(req, res) {
    const skills = await client.fetch(query)
    res.status(200).json({ skills })
}
