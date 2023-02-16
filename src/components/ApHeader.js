import bbdd from "../bbdd.json"
import ApMenu from "./ApMenu"

const ApHeader = ()=>{
    const data = bbdd.header
    return(
        <div className="header">
            <nav>
                <ApMenu/>
            </nav>
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
        </div>
    )
}

export default ApHeader