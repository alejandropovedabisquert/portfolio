
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
const ApMenu = (passData)=>{
    const [open, setOpen] = useState(false)
    const menu = passData.data.menu
    const logos = passData.data.logos
    const logo = logos && <img className="rounded-full border-4 border-orange-400 w-16" src={logos && logos.logoGrande} alt="Perfil"/>
    const listarMenu = menu && menu.map((listMenu)=>
        <li key={listMenu.url}>{listMenu.title}</li>
    )

    return(
        <nav className="nav fixed top-0 z-50 w-full">
            <div className="grid grid-cols-2">
                <div>
                    {logo}
                </div>
                <div className="link-list w-full">
                    <Bars3Icon className='h-16 w-16 text-right'onClick={() => setOpen(!open)}/>
                    {open && <ul className="flex flex-row">{listarMenu}</ul>}
                </div>
            </div>
        </nav>
    )
}

export default ApMenu