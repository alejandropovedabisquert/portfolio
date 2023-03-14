
import { useEffect, useRef, useState } from 'react'
import ApMenuButton from './ApMenuButton'
const ApMenu = (passData)=>{
    const [open, setOpen] = useState(false)
    const ref = useRef()

    const menu = passData.data.menu 

    const elementToView = (e) =>{
        e && e.preventDefault()
        //Separa el la url con la /
        const data = e.target.href.split('/')

        //Pilla el cuarto elemento de la url y te envia a la ubicacion
        document.getElementById(data[3]).scrollIntoView()

        setOpen(!open)

    }

    const listarMenu = menu && menu.map((listMenu)=>
        <li key={listMenu.url}>
            <a 
                className=' hover:underline decoration-wavy' 
                href={listMenu.url} 
                onClick={elementToView.bind()}
            >{listMenu.title}</a>
        </li>
    )

    useEffect(()=>{
        const checkIfClickedOutside = e => {
            // Si el menu está abierto y el target del click no esta en el menu
            // entonces cierra el menu
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        const detectKeyDown= (e) =>{
            //Si pulsas la tecla escape setea como falso  y cierra el menu
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener('keydown', detectKeyDown, true)
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Limpia el evento
            document.removeEventListener("mousedown", checkIfClickedOutside)
            document.removeEventListener('keydown', detectKeyDown, true)

          }

    })

    return(
        <nav className="nav fixed top-0 z-50 w-full">
            <div className="grid">
                <div ref={ref} className="link-list absolute right-0">
                    <ApMenuButton open={open} setOpen={setOpen}/>
                    <div className={`circle-menu shadow-xl origin-[100%_0%] absolute right-0 rounded-bl-[500px] ease duration-300 ${open ? 'w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-white border-l-4 border-b-4 border-secondary-color animate-menu-jelly': 'w-0 h-0'}`}>
                        <div className={`${open ? 'transition-opacity duration-300 opacity-100 delay-300': 'opacity-0'} `}>
                            {
                                open && 
                                        <ul className="absolute transition-all right-[80px] md:right-[100px] top-[70px] md:top-[100px] leading-[40px] md:leading-[50px] text-3xl md:text-4xl text-center">{listarMenu}</ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ApMenu