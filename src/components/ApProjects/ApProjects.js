import ApCard from "../ApCard/ApCard"

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
                body={project.body}
                image={project.image} 
                links={project.links}
            />

    )
    
    return(
        <div id="projects" className="text-center transition-all p-8 md:pt-8 md:px-0 lg:p-8">
            <h1 className={`${titleClassStyle} w-full md:w-7/12 mx-auto pb-4 md:pb-8`}>Proyectos</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:p-0 lg:grid-cols-3">
                {listProjects}
            </div>
        </div>
    )

}

export default ApProjects