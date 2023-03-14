import ApCardProject from "./ApCardProject"

const ApProjects = (props) =>{
    const projects = props.data.projects
    const titleClassStyle = props.titleClassStyle

    const listProjects = projects && projects.map((project) =>
        <ApCardProject 
            buttonClassStyle={props.buttonClassStyle}
            key={project.id}
            title={project.title} 
            body={project.body}
            image={project.image} 
            logo={project.logo}
            links={project.links}
        />

    )
    
    return(
        <div id="projects" className="text-center transition-all p-8 md:pt-8 md:px-0 lg:p-8">
            <div data-aos="fade-up">
                <h1 className={`${titleClassStyle} w-full md:w-7/12 mx-auto pb-4 md:pb-8`}>Proyectos</h1>
                <div className="flex flex-wrap justify-center">
                    {listProjects}
                </div>
            </div>
        </div>
    )

}

export default ApProjects