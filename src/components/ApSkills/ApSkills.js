import ApCard from "../ApCard"
import "./ApSkills.css"

const ApSkills = (passData) =>{
    const skills = passData.data.skills
    const titleClassStyle = passData.titleClassStyle

    const listSkills = skills && skills.map((skill) =>
        <ApCard 
            classImage="w-20 mt-1 ml-1 sm:w-24 lg:w-16"
            classCard="skills flex items-center border-b-2 border-b-secondary-color shadow-lg"
            classContent="relative text-xl w-full"
            key={skill.id} 
            title={skill.title} 
            image={skill.image} 
        />
    )

    return(
        <div id="skills" className="container mx-auto text-center">
            <div className="p-8">
                <h1 className={titleClassStyle}>Mis conocimientos</h1>
                <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 ">
                    {listSkills}
                </div> 
            </div>
        </div>
    )

}

export default ApSkills