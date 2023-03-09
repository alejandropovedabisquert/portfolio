import ApCard from "../ApCard/ApCard"


const ApSkills = (passData) =>{
    const skills = passData.data.skills
    
    const titleClassStyle = passData.titleClassStyle

    const listSkills = skills && skills.map((skill) =>
        <ApCard 
            classImage="mt-1 ml-1 w-16"
            classCard="skills flex items-center border-b-2 border-b-secondary-color shadow-lg flex-col md:flex-row"
            classContent="flex items-end h-full md:relative md:text-xl md:w-full md:h-auto"
            classTitle="mx-auto"
            key={skill.id} 
            title={skill.title} 
            image={skill.image} 
        />
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