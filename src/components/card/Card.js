import { Link } from 'react-router-dom';
import card from '../../assets/img/card.png';
import "./Card.css";

export const Card=({id,name,description,image,staffList})=>{

const viewMovie = ()=>{
    console.log("el nombre de la pelicula es",name)
}

 return (
    <div className="card">
        <img src={image} alt="imagen no encontrada"/>
        <div className="container">
            <h4><b>{name}</b></h4>             
            {/* <button  onClick={viewMovie}></button> */}
            <Link className='btn' to={`/movie/${id}`}>Ver</Link>
        </div>
    </div>
 )   
}