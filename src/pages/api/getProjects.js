import { client } from "../../../sanity"
const query = `
*[_type == "project"] {
    ..., 
    technologies[]->
  } 
  `

export default async function handler(req, res) {
    const projects = await client.fetch(query)
    res.status(200).json({ projects })
}

// check this when projects are added
