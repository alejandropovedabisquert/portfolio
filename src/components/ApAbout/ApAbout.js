import "./ApAbout.css"
const ApAbout = (passData) =>{
    const about = passData.data.about
    const titleClassStyle = passData.titleClassStyle
    const buttonClassStyle = "border-2 border-secondary-color p-2 px-4 mt-4 inline-block rounded shadow-md transition-all font-bold duration-300 relative hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"
    const profile = passData.data.logos && <img className="rounded-md" src={passData.data.logos && passData.data.logos.perfil} alt="Perfil" width="300px"/>
    return(
        <div id="about" className="container transition-all mx-auto text-center grid grid-cols-1 md:grid-cols-3">
            <div className="mx-auto">
                {profile} 
            </div>
            <div className="p-8 col-span-2">
                <h1 className={`${titleClassStyle} text-left`}>Sobre mi</h1>
                <p className="text-justify">{about && about.body}</p>
                <div className="text-left">
                    <a href={`https://${about && about.curriculum}`} className={buttonClassStyle}>Descargar CV</a>
                </div>
                
            </div>

        </div>
    )

}

export default ApAbout