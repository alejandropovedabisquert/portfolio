
const ApServices = (passData) =>{
    const services = passData.data.services

    const listServices = services && services.map((service) =>
    <li key={service.id}><p>{service.image}</p><p>{service.title}</p><span>{service.body}</span></li>
)    
    return(
        <div className="services">
            <h1>Mis servicios</h1>
            <ul>
                {listServices}             
            </ul>
        </div>
    )

}

export default ApServices