import ApContact from "../ApContact/ApContact"
import ApRRSS from "../ApRRSS/ApRRSS";

const ApFooter = (passData) =>{
    const data = passData.data

    const fondoFooter = data.logos

    const footer = data.header

    const rrssData = data.rrss

    
    const rrssList = rrssData && rrssData.map((rrss) =>
        <ApRRSS 
            key={rrss.type} 
            rrss={rrss} 
            classStyleSvg="w-8 h-8 md:w-12 md:h-12"
            classStyleLink="p-4 md:p-6 block bg-white rounded-full border-2 border-secondary-color shadow-md transition-all duration-300 hover:animate-wiggle hover:text-secondary-color"

        />
    )
    
    return(
        <div id="footer" style={{backgroundImage: `url(${fondoFooter && fondoFooter.fondoFooterWave})`}} className="bg-cover bg-center">
            <ApContact 
                titleClassStyle={passData.titleClassStyle} 
                buttonClassStyle={passData.buttonClassStyle}
            />
            <div className="flex flex-row justify-center pb-10 pt-20 items-center">
                <ul className="flex flex-row space-x-6 md:space-x-12 items-center">
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