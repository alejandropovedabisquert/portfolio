import ApRRSS from "../ApRRSS/ApRRSS"

const ApAbout = (passData) =>{
    const about = passData.data.about

    const rrssData = passData.data.rrss

    const titleClassStyle = passData.titleClassStyle

    const buttonClassStyle = passData.buttonClassStyle

    const profile = passData.data.logos && <img className="rounded-md mt-8" src={passData.data.logos && passData.data.logos.perfil} alt="Perfil" width="300px"/>

    const rrssList = rrssData && rrssData.map((rrss) =>
        <ApRRSS 
            key={rrss.type} 
            rrss={rrss} 
            classStyleSvg="transition-all w-8 h-8 duration-300 hover:animate-wiggle hover:text-secondary-color"
        />
    )

    return(
        <div id="about" className="container transition-all mx-auto text-center grid grid-cols-1 md:grid-cols-3 pb-8">
            <div className="mx-auto" data-aos="fade-right">
                {profile} 
            </div>
            <div className="p-8 md:pr-0 col-span-2 lg:pr-8" data-aos="fade-left">
                <h1 className={`${titleClassStyle} grid-cols-title md:grid-cols-about md:w-96`}>Sobre mi</h1>
                {about && about.body ? <p className="text-justify text-lg max-w-4xl" dangerouslySetInnerHTML={{__html: `${about && about.body}`}}></p> : null}
                <div className="md:text-left md:flex md:flex-row items-center">
                    <a href={`${about && about.curriculum}`} className={`${buttonClassStyle} mt-8`}>Descargar CV</a>
                    <div className="flex flex-row mt-8">
                        <ul className="flex flex-row space-x-6 mx-auto md:ml-10">
                            {rrssList}
                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
    )

}

export default ApAbout