import { useState } from "react"
import ApModal from "../ApModal/ApModal"

const ApCard = (props) =>{
    const [open, setOpen] = useState(false)

    const title = props.title

    const body = props.body

    const image = props.image

    const links = props.links

    const classImage = props.classImage

    const classCard = props.classCard

    const classTitle = props.classTitle
    
    const classContent = props.classContent
    
    return (
            <div className={`card ${classCard}`} onClick={()=> setOpen(!open)}>
                <div className="card-image">
                    <img src={image} alt={title} className={`${classImage}`}/>
                </div>
                <div className={`card-content ${classContent}`}>
                    {
                        title ?
                            <div className={`card-title ${classTitle}`}>
                                <h1>{title}</h1>
                            </div>
                        :null
                    }
                </div>
                {
                    open ? 
                        <ApModal 
                            image={image} 
                            title={title} 
                            body={body} 
                            links={links} 
                        /> 
                    : null
                }
            </div>
    )

}

export default ApCard