import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

const ApRRSS = (props) =>{
    const rrss = props.rrss

    const classStyleSvg = props.classStyleSvg
    const classStyleLi = props.classStyleLi
    const classStyleLink = props.classStyleLink

    return (
        <li className={classStyleLi}>
            {
                rrss.type === 'linkedin' ?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaLinkedinIn className={classStyleSvg}/></a>

                :rrss.type === 'github'?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaGithub className={classStyleSvg}/></a>

                :rrss.type === 'email'?
                    <a href={rrss.url} target="_blank" rel="noreferrer" className={classStyleLink}><FaRegEnvelope className={classStyleSvg}/></a>
                    
                :null
            }
        </li>
    )

}

export default ApRRSS