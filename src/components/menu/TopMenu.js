import "./TopMenu.css"

export const TopMenu=()=>{

    const items=[
        "Inicio",
        "Categorías",
        "Más vistas",
        "Mis listas",
        "Mis calificados",
        "Mi cuenta",
    ]

    return (
        <div className="scrollmenu">
            {items.map((item,idx)=>(
                <a key={idx} href="#home">{item}</a>
            ))}        
      </div>
    )   
   }