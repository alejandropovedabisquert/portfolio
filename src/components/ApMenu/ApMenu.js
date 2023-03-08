
import { useState } from 'react'
import './ApMenu.css'
import ApMenuButton from './ApMenuButton'
const ApMenu = (passData)=>{
    const [open, setOpen] = useState(false)

    const menu = passData.data.menu 
    const elementToView = (e) =>{
        e && e.preventDefault()
        const data = e.target.href.split('/')
        document.getElementById(data[3]).scrollIntoView()
        setOpen(!open)
    }

    const listarMenu = menu && menu.map((listMenu)=>
        <li key={listMenu.url}><a className=' hover:underline decoration-wavy' href={listMenu.url} onClick={elementToView.bind()}>{listMenu.title}</a></li>
    )

    return(
        <nav className="nav fixed top-0 z-50 w-full">
            <div className="grid">
                <div className="link-list w-full">
                    <ApMenuButton open={open} setOpen={setOpen}/>
                    <div className={`circle-menu shadow-xl origin-[100%_0%] absolute right-0 rounded-bl-[500px] ease duration-300 ${open ? 'w-[500px] h-[500px] bg-primary-color animate-menu-jelly': 'w-0 h-0'}`}>
                        <div className={`${open ? 'transition-menu': 'opacity-0'} `}>
                            {
                                open && 
                                        <ul className="absolute right-[100px] top-[100px] text-4xl leading-[50px] text-center">{listarMenu}</ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ApMenu