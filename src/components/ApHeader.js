const ApHeader = (passData)=>{
    const logos = passData.data.logos
    const profile = logos && <img className="rounded-full border-4 border-orange-400 mx-auto" src={logos && logos.logoPequenyo} alt="Perfil" width="300px"/>

    return(
        <div id="header">
            <div style={{backgroundImage: `url(${logos && logos.fondoTeclado})`}} className="bg-cover bg-fixed bg-center h-screen text-center items-center brightness-50"></div>
            <div className="absolute bottom-[-150px] mx-auto w-full">
                {profile} 
            </div>

        </div>
    )
}

export default ApHeader