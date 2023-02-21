import ApCard from "./ApCard"

const ApProjects = (passData) =>{
    const projects = passData.data.projects

    const listProjects = projects && projects.map((project) =>
        <ApCard 
            key={project.id} 
            title={project.title} 
            body={project.body} 
            image={project.image} 
            links={project.links}
        />
    )
    
    return(
        <div className="projects text-center">
            <h1>Proyectos</h1>
            <div className="grid grid-cols-3 gap-4">
                {listProjects}
            </div>
        </div>
    )

}

export default ApProjects