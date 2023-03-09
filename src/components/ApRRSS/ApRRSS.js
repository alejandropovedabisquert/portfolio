import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

const ApRRSS = (props) =>{
    const rrss = props.rrss

    const classStyleSvg = props.classStyleSvg
    const classStyleLi = props.classStyleLi
    const classStyleLink = props.classStyleLink

    const size = props.size

    return (
        <li className={classStyleLi}>
            {
                rrss.type === 'linkedin' ?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaLinkedinIn size={size} className={classStyleSvg}/></a>

                :rrss.type === 'github'?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaGithub size={size} className={classStyleSvg}/></a>

                :rrss.type === 'email'?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaRegEnvelope size={size} className={classStyleSvg}/></a>
                    
                :null
            }
        </li>
    )

}

export default ApRRSS