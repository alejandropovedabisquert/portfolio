import ApContact from "./ApContact"

const ApFooter = (passData) =>{
    const data = passData.data
    const fondoFooter = passData.data.logos
    const footer = data.header
    const rrssData = data.rrss

    const rrssList = rrssData && rrssData.map((rrss) =>
        <p key={rrss.type}>{rrss.url}</p>
    )
    
    return(
        <div id="footer" style={{backgroundImage: `url(${fondoFooter && fondoFooter.fondoFooterWave})`}} className="bg-cover bg-center">
            <ApContact titleClassStyle={passData.titleClassStyle}/>
            <div className="text-center">
                <p>{footer && footer.title}</p>
                <span>{footer && footer.subtitle}</span>
            </div>
            <div className="flex flex-row justify-center">
                {rrssList}
            </div>
        </div>
    )

}

export default ApFooter