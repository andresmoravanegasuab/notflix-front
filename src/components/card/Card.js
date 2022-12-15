import { Link } from "react-router-dom";
import card from "../../assets/img/card.png";
import "./Card.css";

export const Card = ({ id, name, description, image, staffList }) => {
  const viewMovie = () => {
    console.log("el nombre de la pelicula es", name);
  };

  const oldCardRender = () => (
    <div className="card">
      <Link className="btn" to={`/movie/${id}`}>
        <img src={image} alt="imagen no encontrada" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          {/* <button  onClick={viewMovie}></button> */}
        </div>
      </Link>
    </div>
  );

  return (
    <div className="card col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <Link className="btn btn-primary" to={`/movie/${id}`}>
        <img src={image} className="card-img-top" alt="imagen no encontrada" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </Link>
    </div>
  );
};
