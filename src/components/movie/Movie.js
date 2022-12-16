import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { API_URL, getToken, showMessage } from "../../util/Util";

export const Movie = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState({});
  const [score, setScore] = useState([]);
  const [scoreSelected, setScoreSelected] = useState("");
  const [scoreId, setScoreId] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    //getMovies();
    setMovieId(params.id);
    getMovie();
    setScoreData();
    checkScore();
    checkIsInList();
  }, [scoreSelected]);

  const getMovie = async () => {
    let response = await fetch(API_URL + "movie/" + params.id);
    response = await response.json();
    setMovie(response);
  };

  const checkScore = async () => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken(),
      },
    };
    let response = await fetch(
      API_URL + "score/check/" + params.id,
      requestData
    );
    response = await response.json();
    //const response = { id: "6399cfadc9e9a77c999e8306", score: 6 };
    if (response.id != null && response.score != null) {
      setScoreSelected(response.score);
      setScoreId(response.id);
    }
  };

  const sendScoreApi = async (score) => {
    let method = "post";
    if (scoreSelected !== "") {
      method = "put";
    }

    const scoreDTO = {
      score: score,
      movieId: movieId,
    };

    const requestData = {
      method,
      body: JSON.stringify(scoreDTO),
      headers: {
        "Content-type": "application/json",
        Authorization: getToken(),
      },
    };

    let response = await fetch(API_URL + "score/" + scoreId, requestData);
    response = await response.json();
    const title = "";
    let icon = "warning";
    let confirmButtonText = "Reintentar";
    if (response.status === true) {
      icon = "success";
      confirmButtonText = "Ok";
    }
    const message = response.message;
    showMessage(title, message, icon, confirmButtonText);
  };

  const setScoreData = () => {
    const scores = [];
    for (let index = 1; index <= 10; index++) {
      scores.push(index);
    }
    setScore(scores);
  };

  const sendScore = async (event) => {
    const { value } = event.target;
    await sendScoreApi(value);
    setScoreSelected(value);
  };

  const checkIsInList = () => {
    //consumir el api
    //validar si está activa
    setIsActive(true);
  };

  const handleAddList = async () => {
    //comunicación con backend, enviandoles el id de esta pelicula y enviandole el token
    //backend debería tomar ese id pelicula, buscar esa pelicula en la bd, después el usuarios
    //debería guardar en una entidad playlist->id cliente, id pelicula, la fecha,state =>1 activo, 2=>oculto
    //mensaje indicanole al usuario que ya se agregó
  };

  return (
    <div className="movie-container">
      <iframe
        id="myVideo"
        width="560"
        height="515"
        src={
          !movie.trailerLink
            ? "https://www.youtube-nocookie.com/embed/4Lp-Vc4i2QI"
            : movie.trailerLink
        }
        title={movie.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="main-container">
        <div className="content">
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
          <div className="staff-list">
            {movie.staffList && movie.staffList.length > 0
              ? movie.staffList.map((staff, idx) => (
                  <p key={idx}>
                    {staff.name} {staff.lastName} ({staff.rol})
                  </p>
                ))
              : "No hay elenco definido"}
          </div>
          <div className="category-list">
            {movie.categories && movie.categories.length > 0
              ? movie.categories.map((staff, idx) => (
                  <p key={idx}>
                    {staff.name} {staff.lastName} {staff.rol}
                  </p>
                ))
              : "No hay categorías definidas"}
          </div>
          <div className="rate">
            <p>Calificar pelicula</p>
            <select value={scoreSelected} onChange={sendScore}>
              <option>Sin calificar</option>
              {score.map((element, idx) => (
                <option key={idx}>{element}</option>
              ))}
            </select>
            <button
              onClick={handleAddList}
              className={isActive ? "active" : ""}
            >
              Agregar a mi lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
