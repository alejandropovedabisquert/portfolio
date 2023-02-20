
const ApSkills = (passData) =>{
    const skills = passData.data.skills

    const listSkills = skills && skills.map((skill) =>
        <div key={skill.id}>
            <img className="w-1/2" src={skill && skill.image} alt={skill.title} />
            <span>{skill.title}</span>
        </div>
    )

    return(
        <div id="skills" className="container mx-auto text-center">
            <div className="p-8">
                <h1>Mis conocimientos</h1>
                <div className="grid grid-cols-4 gap-4">
                    {listSkills}
                </div> 
            </div>
        </div>
    )

}

export default ApSkills