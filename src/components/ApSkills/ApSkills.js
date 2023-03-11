const ApSkills = (props) =>{
    const skills = props.data.skills
    
    const titleClassStyle = props.titleClassStyle

    const listSkills = skills && skills.map((skill) =>
        <div key={skill.id} className="skill flex max-w-xs items-center h-full border-b-2 border-b-secondary-color shadow-lg flex-col md:flex-row">
            <div className="skill-image">
                <img src={skill.image} alt={skill.title} className="mt-1 ml-1 w-16"/>
            </div>
            <div className="skill-content flex items-end h-full md:relative md:text-xl md:w-full md:h-auto">
                <div className="skill-title mx-auto">
                    <h1>{skill.title}</h1>
                </div>
            </div>
        </div>
    )

    return(
        <div id="skills" className="transition-all container mx-auto text-center pb-8">
            <div className="p-8 md:p-0 md:pt-8 lg:p-8">
                <h1 className={`${titleClassStyle} w-full md:w-7/12 mx-auto pb-4 md:pb-8`}>Habilidades</h1>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {listSkills}
                </div> 
            </div>
        </div>
    )

}

export default ApSkills