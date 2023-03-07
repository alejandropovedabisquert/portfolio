import ApContact from "./ApContact"
import ApRRSS from "../ApRRRSS";

const ApFooter = (passData) =>{
    const data = passData.data
    const fondoFooter = data.logos
    const footer = data.header
    const rrssData = data.rrss
    
    const rrssList = rrssData && rrssData.map((rrss) =>
        <ApRRSS key={rrss.type} rrss={rrss}/>
    )
    
    return(
        <div id="footer" style={{backgroundImage: `url(${fondoFooter && fondoFooter.fondoFooterWave})`}} className="bg-cover bg-center">
            <ApContact titleClassStyle={passData.titleClassStyle}/>
            <div className="flex flex-row justify-center pb-4">
                <ul className="flex flex-row space-x-3">
                    {rrssList}
                </ul>
            </div>
            <div className="text-center">
                <p>{footer && footer.title}</p>
                <span>{footer && footer.subtitle}</span>
            </div>
        </div>
    )

}

export default ApFooter