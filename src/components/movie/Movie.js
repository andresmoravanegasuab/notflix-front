import Toast from "react-bootstrap/Toast";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { getToken } from "../../util/Util";
import Swal from "sweetalert2";

export const Movie = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState({});
  const [score, setScore] = useState([]);

  useEffect(() => {
    //getMovies();
    setMovieId(params.id);
    getMovie();
    setScoreData();
  }, []);

  const getMovie = async () => {
    let response = await fetch("http://localhost:8080/api/movie/" + params.id);
    response = await response.json();
    setMovie(response);
  };

  const sendScoreApi = async (score) => {
    const scoreDTO = {
      score: score,
      movieId: movieId,
    };

    const requestData = {
      method: "POST",
      body: JSON.stringify(scoreDTO),
      headers: {
        "Content-type": "application/json",
        Authorization: getToken(),
      },
    };
    let response = await fetch("http://localhost:8080/api/score", requestData);
    response = await response.json();
    if (response.status == true) {
      Swal.fire({
        title: "",
        text: response.message,
        icon: "success",
        confirmButtonText: "ok",
      });
    } else {
      Swal.fire({
        title: "",
        text: response.message,
        icon: "warning",
        confirmButtonText: "Reintentar",
      });
    }
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
  };

  const message = () => (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );

  return (
    <div className="movie-container">
      <iframe
        id="myVideo"
        width="560"
        height="515"
        src={
          !movie.trailerLink
            ? "https://www.youtube.com/embed/4Lp-Vc4i2QI"
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
            <select onChange={sendScore}>
              <option defaultValue={"Sin calificar"} selected disabled>
                Sin calificar
              </option>
              {score.map((element, idx) => (
                <option key={idx}>{element}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
