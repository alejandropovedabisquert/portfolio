import ApCard from "../ApCard"
import "./ApProjects.css"

const ApProjects = (passData) =>{
    const projects = passData.data.projects
    const titleClassStyle = passData.titleClassStyle

    const listProjects = projects && projects.map((project) =>
        <ApCard 
            classCard="projects cursor-pointer"
            classImage="w-full h-72 object-cover mx-auto rounded-md"
            classTitle="font-bold p-2"
            key={project.id} 
            title={project.title} 
            image={project.image} 
            links={project.links}
        />
    )
    
    return(
        <div id="projects" className="text-center md:pt-8">
            <h1 className={titleClassStyle}>Proyectos</h1>
            <div className="grid gap-4 p-8 sm:grid-cols-2 md:p-0 lg:p-8 lg:grid-cols-3">
                {listProjects}
            </div>
        </div>
    )

}

export default ApProjects