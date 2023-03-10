

const ApModal = (props) => {

    const links = props.links

    return(
        <div className="modal fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-gray-400 z-50">
            <div className="modal-content bg-white grid grid-cols-1 md:grid-cols-2 m-20 overflow-auto max-h-[40rem] rounded-md">
                <div className="modal-content-left p-8">
                    <div className="modal-image">
                        <img src={props.image} alt={props.title} className="rounded-md"/>
                    </div>
                </div>
                <div className="modal-content-right max-w-xl p-8">
                    <h2 className="modal-title text-4xl mb-8">{props.title}</h2>
                    <div className="modal-body mb-8">{props.body}</div>
                    <div className="modal-links">
                        {
                            links.webLink ?
                                <a href={links.webLink} target="_blank">Enlace Web</a>
                            : null    
                        }
                        {
                            links.gitHubLink ?
                                <a href={links.gitHubLink} target="_blank">Enlace Repositorio</a>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ApModal