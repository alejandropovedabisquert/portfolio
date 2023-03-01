
const ApCard = (props) =>{

    const title = props.title
    const body = props.body
    const image = props.image
    const links = props.links
    const classImage = props.classImage
    const classCard = props.classCard
    const classTitle = props.classTitle
    const classContent = props.classContent
    const borderComputer = props.borderComputer
    
    return (
        <div className={`carta ${classCard}`}>
            <div style={borderComputer ? {backgroundImage: `url(${borderComputer})`, backgroundSize:`100%`, backgroundRepeat: `no-repeat`, height: `23rem`} :null} className="contenedor imagen">
                <img src={image} alt={title} className={`${classImage}`}/>
            </div>
            <div className={`contenido ${classContent}`}>
                {
                    title ?
                        <div className={`titulo ${classTitle}`}>
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