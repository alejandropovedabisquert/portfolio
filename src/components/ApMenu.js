
const ApMenu = (passData)=>{
    const menu = passData.data.menu
    const logos = passData.data.logos
    const logo = logos && <img className="rounded-full w-16" src={logos && logos.logoGrande} alt="Perfil"/>
    const listarMenu = menu && menu.map((listMenu)=>
        <li key={listMenu.url}>{listMenu.title}</li>
    )

    return(
        <nav className="nav sticky top-0">
            <div className="grid grid-cols-2">
                <div>
                    {logo}
                </div>
                <div className="link-list">
                    <ul className="flex flex-row">{listarMenu}</ul>
                </div>
            </div>
        </nav>
    )
}

export default ApMenu