import ApRRSS from "../../ApRRRSS"
import "./ApAbout.css"
const ApAbout = (passData) =>{
    const about = passData.data.about
    const rrssData = passData.data.rrss
    const titleClassStyle = passData.titleClassStyle
    const buttonClassStyle = passData.buttonClassStyle
    const profile = passData.data.logos && <img className="rounded-md" src={passData.data.logos && passData.data.logos.perfil} alt="Perfil" width="300px"/>
    const rrssList = rrssData && rrssData.map((rrss) =>
        <ApRRSS key={rrss.type} rrss={rrss}/>
    )
    return(
        <div id="about" className="container transition-all mx-auto text-center grid grid-cols-1 md:grid-cols-3 pb-8">
            <div className="mx-auto">
                {profile} 
            </div>
            <div className="p-8 md:pr-0 col-span-2 lg:pr-8">
                <h1 className={`${titleClassStyle} grid-cols-about md:w-96`}>Sobre mi</h1>
                <div className="flex flex-row justify-left pb-4">
                    <ul className="flex flex-row space-x-3 ml-[10%] md:ml-10">
                        {rrssList}
                    </ul>
                </div>
                <p className="text-justify">{about && about.body}</p>
                <div className="text-left">
                    <a href={`https://${about && about.curriculum}`} className={buttonClassStyle}>Descargar CV</a>
                </div>
                
            </div>

        </div>
    )

}

export default ApAbout