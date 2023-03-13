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
            classStyleSvg="w-8 h-8 md:w-8 md:h-8"
            classStyleLink="p-4 md:p-5 block bg-white rounded-full border-2 border-secondary-color shadow-md transition-all duration-300 hover:animate-wiggle hover:text-secondary-color"

        />
    )
    
    return(
        <div id="footer" style={{backgroundImage: `url(${fondoFooter && fondoFooter.fondoFooterWave})`}} className="bg-cover bg-center">
            <ApContact 
                titleClassStyle={passData.titleClassStyle} 
                buttonClassStyle={passData.buttonClassStyle}
            />
            <div className="flex justify-center pb-10 pt-10 items-center">
                <ul className="flex flex-row sm:space-x-6 md:space-x-12 items-center">
                    {rrssList}
                </ul>
            </div>
            <div className="md:flex w-auto text-center md:justify-center md:space-x-1.5 text-lg font-bold py-4 bg-white border-y-4 border-secondary-color">
                <p>Creado por {footer && footer.name} {footer && footer.surname}</p>
                <span>| {footer && footer.subtitle}</span>
            </div>
        </div>
    )

}

export default ApFooter