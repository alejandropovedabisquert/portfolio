

const ApModal = (props) => {

    const links = props.links
    const open = props.open
    const setOpen = props.setOpen
    const buttonClassStyle= props.buttonClassStyle
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-light-gray" onClick={() => setOpen(!open)}></div>
            <div className="modal flex items-center justify-center h-full">
                <div className="modal-content bg-white grid grid-cols-1 xl:grid-cols-5 m-10 md:m-20 overflow-auto h-144 rounded-md z-50 ultrawide:w-464">
                    <div className="modal-content-left p-8 col-span-3">
                        <div className="modal-image">
                            <img src={props.image} alt={props.title} className="rounded-md"/>
                        </div>
                    </div>
                    <div className="modal-content-right max-w-xl p-8 col-span-2 text-left">
                        <h2 className="modal-title text-4xl mb-8">{props.title}</h2>
                        <div className="modal-body mb-8">{props.body}</div>
                        <div className="modal-links space-y-6 md:space-y-0 md:space-x-6">
                            {
                                links.webLink ?
                                    <a href={links.webLink} target="_blank" rel="noreferrer" className={buttonClassStyle}>Enlace Web</a>
                                : null    
                            }
                            {
                                links.gitHubLink ?
                                    <a href={links.gitHubLink} target="_blank" rel="noreferrer" className={buttonClassStyle}>Enlace Repositorio</a>
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