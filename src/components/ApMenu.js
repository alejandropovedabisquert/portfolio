
const ApMenu = (passData)=>{
    const menu = passData.data.menu
    const logos = passData.data.logos
    const logo = logos && <img src={logos && logos.logoGrande} alt="Perfil" width="300px"/>
    const listarMenu = menu && menu.map((listMenu)=>
        <li key={listMenu.url}>{listMenu.title}</li>
    )

    return(
        <nav>
            <div>
                {logo}
            </div>
            <div className="link-list">
                <ul>{listarMenu}</ul>
            </div>
        </nav>
    )
}

export default ApMenu