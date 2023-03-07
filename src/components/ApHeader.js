const ApHeader = (passData)=>{
    const logos = passData.data.logos
    const header = passData.data.header

    return(
        <div id="header">
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(${logos && logos.fondoTeclado})`}} className="bg-cover bg-fixed bg-center flex flex-col h-screen text-center items-center justify-center">
                <h1 className="text-white font-semibold text-7xl">{header && header.title}</h1>
                <p className="text-white text-xl font-light">{header && header.subtitle}</p>
            </div>
        </div>
    )
}

export default ApHeader