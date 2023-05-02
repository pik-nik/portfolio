function ProjectsFilter({ skills, setSelectedTech }) {
    return (
        <div className="absolute top-[11.25rem] right-[12%] z-20 font-sans text-xs">
            <select
                onChange={e => setSelectedTech(e.target.value)}
                className="border border-tertiary dark:border-tertiary_dark rounded-lg focus:ring-secondary focus:border-secondary p-0.5 focus:outline bg-background dark:bg-background_dark"
            >
                <option value="All">Filter by tech</option>
                <option value="All">All</option>
                {skills?.map(skill => (
                    <option key={skill._id} value={skill.title}>
                        {skill.title}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ProjectsFilter
