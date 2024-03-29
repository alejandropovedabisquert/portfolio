const ApHeader = (passData)=>{
    const logos = passData.data.logos
    
    const header = passData.data.header

    return(
        <div id="header">
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(${logos && logos.fondoTeclado})`}} className="bg-cover bg-fixed bg-center flex flex-col h-screen text-center items-center justify-center">
                <h1 className="bg-gradient-to-r from-primary-color via-secondary-color to-primary-color text-transparent bg-clip-text animate-gradient-animation pb-4 font-bold md:font-semibold sm:tracking-widest text-6xl md:text-8xl">
                    {header && header.name}
                    <span> {header && header.surname}</span>
                </h1>
                <p className="text-white text-xl md:text-3xl font-normal tracking-widest">{header && header.subtitle}</p>
            </div>
        </div>
    )
}

export default ApHeader