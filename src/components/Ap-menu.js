const dataMenu = [
    {
        title: "Sobre Mi", 
        url:"sobre-mi"
    },
    {
        title: "Mis Proyectos", 
        url:"proyectos"
    },
    {
        title: "Servicios", 
        url:"servicios"
    },
    {
        title: "Contacto", 
        url:"contacto"
    }, ]

const Ap_menu = ()=>{
    const listarMenu = dataMenu.map((data)=>
        <li key={data.url}>{data.title}</li>
    )
    return(
        <div className="link-list">
            <ul>{listarMenu}</ul>
        </div>
    )
}

export default Ap_menu