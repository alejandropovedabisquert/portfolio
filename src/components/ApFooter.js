import ApContact from "./ApContact"
import ApRRSS from "./ApRRRSS";

const ApFooter = (passData) =>{
    const data = passData.data
    const fondoFooter = data.logos
    const footer = data.header
    const rrssData = data.rrss
    
    const rrssList = rrssData && rrssData.map((rrss) =>
        <ApRRSS key={rrss.type} rrss={rrss} size={48}/>
    )
    
    return(
        <div id="footer" style={{backgroundImage: `url(${fondoFooter && fondoFooter.fondoFooterWave})`}} className="bg-cover bg-center">
            <ApContact titleClassStyle={passData.titleClassStyle} buttonClassStyle={passData.buttonClassStyle}/>
            <div className="flex flex-row justify-center pb-10 pt-20">
                <ul className="flex flex-row space-x-12">
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