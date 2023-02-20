
const ApProjects = (passData) =>{
    const projects = passData.data.projects

    const listProjects = projects && projects.map((project) =>
        <li key={project.id}><p>{project.image}</p><span>{project.title}</span></li>
    )
    
    return(
        <div className="projects">
            <h1>Proyectos</h1>
            <ul>
                {listProjects}             
            </ul>
        </div>
    )

}

export default ApProjects