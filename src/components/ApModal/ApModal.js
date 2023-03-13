import { useEffect } from "react"


const ApModal = (props) => {
    const links = props.links
    const open = props.open
    const setOpen = props.setOpen
    const buttonClassStyle= props.buttonClassStyle

    useEffect(()=>{
        document.addEventListener('keydown', detectKeyDown, true)
    })

    const detectKeyDown= (e) =>{
        if (e.key === "Escape") {
            setOpen(!open)
        }
    }

    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-light-gray" onClick={() => setOpen(!open)}></div>
            <div className="modal flex items-center justify-center h-full">
                <div className="modal-content flex flex-wrap basis-3/4 bg-white  overflow-auto h-144 rounded-md z-50 ultrawide:w-464">
                    <div className="modal-content-left xl:basis-4/6 p-8">
                        <div className="modal-image">
                            <a href={props.image} target="_blank" rel="noreferrer"><img src={props.image} alt={props.title} className="rounded-md"/></a>
                        </div>
                    </div>
                    <div className="modal-content-right xl:basis-2/6 p-8 text-left">
                        <h2 className="modal-title text-4xl mb-8">{props.title}</h2>
                        <div className="modal-body mb-8">{props.body}</div>
                        <div className="modal-links space-y-6 md:space-y-0 md:space-x-6">
                            {
                                links.webLink ?
                                    <a href={links.webLink} target="_blank" rel="noreferrer" className={buttonClassStyle}>Página Web</a>
                                : null    
                            }
                            {
                                links.gitHubLink ?
                                    <a href={links.gitHubLink} target="_blank" rel="noreferrer" className={buttonClassStyle}>Repositorio</a>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ApModal