import ApCard from "../ApCard/ApCard"

const ApServices = (passData) =>{
    const services = passData.data.services
    const titleClassStyle = passData.titleClassStyle
    const listServices = services && services.map((service) =>
        <ApCard
            key={service.id} 
            title={service.title}
            body={service.body} 
            image={service.image} 
        />
    )    
    return(
        <div id="services" className="text-center">
            <h1 className={titleClassStyle}>Mis servicios</h1>
            <div className="grid grid-cols-3 gap-4">
                {listServices}             
            </div>
        </div>
    )

}

export default ApServices