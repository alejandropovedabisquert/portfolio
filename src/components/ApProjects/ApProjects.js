import ApCard from "../ApCard"
import "./ApProjects.css"
import borderComputer from "./border-computer.svg"

const ApProjects = (passData) =>{
    const projects = passData.data.projects

    const listProjects = projects && projects.map((project) =>
        <ApCard 
            classCard="projects cursor-pointer"
            classImage="w-full h-72 object-cover mx-auto"
            classTitle="font-bold p-2"
            key={project.id} 
            title={project.title} 
            //image={project.image} 
            borderComputer={borderComputer}
            links={project.links}
        />
    )
    
    return(
        <div id="projects" className="text-center">
            <h1 className="text-4xl pb-5 font-bold">Proyectos</h1>
            <div className="grid gap-4 lg:grid-cols-3">
                {listProjects}
            </div>
        </div>
    )

}

export default ApProjects