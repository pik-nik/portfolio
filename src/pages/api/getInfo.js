import { client } from "../../../sanity"
const query = `
*[_type == "info"][0] {
    ..., 
    socials[]->, 
    skillsOrder[]->
  }
  `

export default async function handler(req, res) {
    const info = await client.fetch(query)
    res.status(200).json({ info })
}

// check this when projects are added
