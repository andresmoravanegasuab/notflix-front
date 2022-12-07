import { useEffect, useState } from "react";
import "./TopMenu.css"

export const TopMenu=()=>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {          
      getCategoriesAsync();      
    }, []);
  
   
  
    const getCategoriesAsync = async () => {
      let response = await fetch("http://localhost:8080/api/category");
      response = await response.json();    
      setCategories(response);    
    };


    const items=[
        "Inicio",
        "Categorías",
        "Más vistas",
        "Mis listas",
        "Mis calificados",
        "Mi cuenta",
    ]

    const subMenu = ()=>(        
            <div class="navbar">
            <a href="#home">Home</a>
            <div class="subnav">
                <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
                </div>
            </div> 
            <div class="subnav">
                <button class="subnavbtn">Categorías <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                    {categories.map((item,idx)=>(
                    <a key={idx} href="#bring">{item.name}</a>
                    ))}
                
                </div>
            </div> 
            <div class="subnav">
                <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                <a href="#link4">Link 4</a>
                </div>
            </div>
            <a href="#contact">Contact</a>
            </div>
    )

    const oldMenu = ()=>(
        (
            <div className="scrollmenu">
                {items.map((item,idx)=>(
                    <a key={idx} href="#home">{item}</a>
                ))}        
          </div>
        ) 
    )

    return subMenu()  
   }