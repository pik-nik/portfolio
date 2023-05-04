import { client } from "../../sanity"

export async function loadInfo() {
    const data = await client.fetch(`
    *[_type == "info"][0] {
        ..., 
        socials[]->, 
        skillsOrder[]->,
        "resumeURL": resume.asset->url
      }
      `)

    return data
}
