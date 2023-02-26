import ApCard from "../ApCard"
import "./ApSkills.css"

const ApSkills = (passData) =>{
    const skills = passData.data.skills

    const listSkills = skills && skills.map((skill) =>
        <ApCard 
            classImage="w-20 sm:w-24 lg:w-28"
            classCard="skills grid content-center justify-center mb-2"
            classTitle="relative top-[-5px] mx-auto opacity-0 border-2 border-secondary-color"
            key={skill.id} 
            title={skill.title} 
            image={skill.image} 
        />
    )

    return(
        <div id="skills" className="container mx-auto text-center">
            <div className="p-8">
                <h1 className="text-4xl pb-5 font-bold">Mis conocimientos</h1>
                <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 ">
                    {listSkills}
                </div> 
            </div>
        </div>
    )

}

export default ApSkills