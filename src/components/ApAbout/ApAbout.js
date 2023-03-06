
const ApAbout = (passData) =>{
    const about = passData.data.about
    const titleClassStyle = passData.titleClassStyle
    
    return(
        <div id="about" className="container mx-auto text-center">
            <div className="p-8">
                <h1 className={titleClassStyle}>Sobre mi</h1>
                <p className="text-justify">{about && about.body}</p>
                
            </div>

        </div>
    )

}

export default ApAbout