export const fetchSkills = async () => {
    const res = await fetch(`${process.env.VERCEL_URL}api/getSkills`)
    const data = await res.json()
    const skills = data.skills
    // console.log("fetchSkills", skills)
    return skills
}
