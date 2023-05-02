export const fetchProjects = async () => {
    const res = await fetch(`${process.env.VERCEL_URL}api/getProjects`)
    const data = await res.json()
    const projects = data.projects
    // console.log("fetchProjects", projects)
    return projects
}
