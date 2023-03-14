import { useState } from "react"
import ApModal from "../ApModal/ApModal"


const ApCardProject = (props) =>{
    const [open, setOpen] = useState(false)
    const title = props.title
    const body = props.body
    const image = props.image
    const logo = props.logo
    const links = props.links
    
    return (
            <div className="w-368px mb-5">
                <div className="project mx-5" data-aos="fade-up" data-aos-duration="1400">
                    <div className="project-image rounded-md transition-all hover:transform hover:scale-105 hover:rotate-6" onClick={()=> setOpen(!open)}>
                        <img src={logo ? logo : image} alt={title} className="w-full h-72 object-cover object-center cursor-pointer mx-auto rounded-md"/>
                    </div>
                    <div className="project-content">
                        <div className="project-title p-4 text-xl">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
                    {
                        open ? 
                            <ApModal 
                                image={image} 
                                title={title} 
                                body={body} 
                                links={links} 
                                setOpen={setOpen}
                                open={open}
                                buttonClassStyle={props.buttonClassStyle}
                            /> 
                        : null
                    }
            </div>
    )

}

export default ApCardProject