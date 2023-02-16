import bbdd from "../bbdd.json"

const ApMenu = ()=>{
    const data = bbdd.menu
    const listarMenu = data.map(menu=>
        <li key={menu.url}>{menu.title}</li>

    )
    return(
        <div className="link-list">
            <ul>{listarMenu}</ul>
        </div>
    )
}

export default ApMenu