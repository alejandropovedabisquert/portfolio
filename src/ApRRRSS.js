import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
const ApRRSS = (props) =>{
    const rrss = props.rrss
    
    return (
        <li>
            {rrss.type === 'linkedin' 
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaLinkedinIn size={24}/></a>
                :rrss.type === 'github'
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaGithub size={24}/></a>
                :rrss.type === 'email'
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaRegEnvelope size={24}/></a>
                :null
            }
        </li>
    )

}

export default ApRRSS