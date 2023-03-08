import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
const ApRRSS = (props) =>{
    const rrss = props.rrss
    const size = props.size
    return (
        <li>
            {rrss.type === 'linkedin' 
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaLinkedinIn size={size}/></a>
                :rrss.type === 'github'
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaGithub size={size}/></a>
                :rrss.type === 'email'
                ?<a href={rrss.url} target="_blank" rel="noreferrer"><FaRegEnvelope size={size}/></a>
                :null
            }
        </li>
    )

}

export default ApRRSS