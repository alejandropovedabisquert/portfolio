const ApHeader = (passData)=>{
    const header = passData.data.header
    const logos = passData.data.logos
    const profile = logos && <img src={logos && logos.logoPequenyo} alt="Perfil" width="300px"/>

    return(
        <div className="header">
            {/* Aqui deberia ir el logo o no pongo logo */}
            <div>
                <p>{header && header.title}</p>
                <p>{header && header.subtitle}</p>
            </div>
            <div>
                {profile} 
            </div>

        </div>
    )
}

export default ApHeader