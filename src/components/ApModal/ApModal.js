import { useEffect } from "react"


const ApModal = (props) => {
    const links = props.links
    const usedSkills = props.usedSkills
    const open = props.open
    const setOpen = props.setOpen
    const buttonClassStyle= props.buttonClassStyle
    const closeButton = "border-2 cursor-pointer absolute rounded-bl-md rounded-tr-md sm:rounded-tl-md right-0 top-0 sm:bottom-0 px-2 border-secondary-color shadow-md transition-all font-bold duration-300 hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"
    useEffect(()=>{
        const detectKeyDown= (e) =>{
            if (e.key === "Escape") {
                setOpen(!open)
            }
        }
        document.addEventListener('keydown', detectKeyDown, true)
    })

    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-light-gray" onClick={() => setOpen(!open)}></div>
            <div className="modal flex items-center justify-center h-full">
                <div className="modal-content relative flex flex-wrap basis-5/6 md:basis-3/4 xl:basis-320 bg-white overflow-auto h-96 sm:h-160 md:h-auto rounded-md z-50 ultrawide:w-464">
                    <div className="modal-content-left xl:basis-4/6 p-8">
                        <div className="modal-image">
                            <a href={props.image} target="_blank" rel="noreferrer"><img src={props.image} alt={props.title} className="rounded-md"/></a>
                        </div>
                    </div>
                    <div className="modal-content-right xl:basis-2/6 p-8 text-left">
                        <h2 className="modal-title text-4xl mb-8">{props.title}</h2>
                        <div className="modal-body mb-4" dangerouslySetInnerHTML={{__html: `${props.body}`}}></div>
                        {usedSkills 
                            ? <div className="modal-usedSkils py-4 flex flex-wrap">
                                {usedSkills && usedSkills.map((skill, index) =>(
                                    <span key={index} className="border-2 text-sm shadow mr-2 mb-2 px-4 border-secondary-color rounded-full p-1">{skill}</span>
                                ))}
                            </div>
                            : null
                        }
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
                    <div className={closeButton} onClick={() => setOpen(!open)} >x</div>
                </div>
            </div>
        </div>
    )

}

export default ApModal