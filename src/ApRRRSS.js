import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
const ApRRSS = (props) =>{
    const rrss = props.rrss
    
    return (
        <li>
            {rrss.type === 'linkedin' 
                ?<a href={rrss.url}><FaLinkedinIn size={24}/></a>
                :rrss.type === 'github'
                ?<a href={rrss.url}><FaGithub size={24}/></a>
                :rrss.type === 'email'
                ?<a href={rrss.url}><FaRegEnvelope size={24}/></a>
                :null
            }
        </li>
    )

}

export default ApRRSS