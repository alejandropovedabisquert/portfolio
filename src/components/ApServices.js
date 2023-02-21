import ApCard from "./ApCard"

const ApServices = (passData) =>{
    const services = passData.data.services

    const listServices = services && services.map((service) =>
        <ApCard
            key={service.id} 
            title={service.title}
            body={service.body} 
            image={service.image} 
        />
    )    
    return(
        <div className="services text-center">
            <h1>Mis servicios</h1>
            <div className="grid grid-cols-3 gap-4">
                {listServices}             
            </div>
        </div>
    )

}

export default ApServices