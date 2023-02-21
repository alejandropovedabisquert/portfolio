
const ApCard = (props) =>{

    const title = props.title
    const body = props.body
    const image = props.image
    const links = props.links

    return (
        <div className="carta contenedor">
            <div className="contenedor imagen">
                <img src={image} alt={title} width="200px"/>
            </div>
            <div className="carta contenido">
                {
                    title ?
                        <div className="carta titulo">
                            <h1>{title}</h1>
                        </div>
                    :null
                }  
                {
                    body ?
                    <div className="carta cuerpo">
                        <p>{body}</p>
                    </div>
                    :null
                }
            </div>
        </div>
    )

}

export default ApCard