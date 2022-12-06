import card from '../../assets/img/card.png';
import "./Card.css";

export const Card=({name,description,image})=>{

const viewMovie = ()=>{
    console.log("el nombre de la pelicula es",name)
}

 return (
    <div className="card">
        <img src={image} alt="imagen no encontrada"/>
        <div className="container">
            <h4><b>{name}</b></h4> 
            <p>{description}</p> 
            <button className='btn' onClick={viewMovie}>Ver</button>
        </div>
    </div>
 )   
}