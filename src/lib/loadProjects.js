import { client } from "../../sanity"

export async function loadProjects() {
    const data = await client.fetch(`
        *[_type == "project"] | order(_createdAt desc) {
            ..., 
            technologies[]->
        } 
      `)

    return data
}
