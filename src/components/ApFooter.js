
const ApFooter = (passData) =>{
    const data = passData.data
    const footer = data.header
    const rrssData = data.rrss

    const rrssList = rrssData && rrssData.map((rrss) =>
        <p key={rrss.type}>{rrss.url}</p>
    )
    
    return(
        <div className="footer grid grid-cols-2">
            <div className="flex flex-row">
                <p>{footer && footer.title}</p>
                <span>{footer && footer.subtitle}</span>
            </div>
            <div className="flex flex-row">
                {rrssList}
            </div>
        </div>
    )

}

export default ApFooter