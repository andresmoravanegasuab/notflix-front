import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, name, description, image, staffList }) => {
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
