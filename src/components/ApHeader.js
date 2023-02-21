const ApHeader = (passData)=>{
    const header = passData.data.header
    const logos = passData.data.logos
    const profile = logos && <img className="rounded-full border-4 border-orange-400 mx-auto" src={logos && logos.logoPequenyo} alt="Perfil" width="300px"/>

    return(
        <div className="header">
            <div style={{backgroundImage: `url(${logos && logos.bannerLogoGrande})`}} className="bg-cover bg-center h-screen text-center items-center">
                <p className="blur-none">{header && header.title}</p>
                <p className="blur-none">{header && header.subtitle}</p>
            </div>
            <div className="absolute bottom-[-200px] mx-auto w-full">
                {profile} 
            </div>

        </div>
    )
}

export default ApHeader