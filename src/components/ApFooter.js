
const ApFooter = (passData) =>{
    const data = passData.data
    const footer = data.header
    const rrssData = data.rrss

    const rrssList = rrssData && rrssData.map((rrss) =>
        <p key={rrss.type}>{rrss.url}</p>
    )
    
    return(
        <div className="footer">
            <div>
                {footer && footer.title}
                {footer && footer.subtitle}
            </div>
            <div>
                {rrssList}
            </div>
        </div>
    )

}

export default ApFooter