
const ApAbout = (passData) =>{
    const about = passData.data.about
    
    return(
        <div id="about" className="container mx-auto text-center">
            <div className="p-8">
                <h1 className="text-4xl pb-5 font-bold">Sobre mi</h1>
                <p className="text-justify">{about && about.body}</p>
                
            </div>

        </div>
    )

}

export default ApAbout