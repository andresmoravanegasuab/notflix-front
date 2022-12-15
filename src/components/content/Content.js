import "./Content.css";

import { Card } from "../card/Card";
import { useEffect, useState } from "react";
import { API_URL } from "../../util/Util";

export const Content = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //getMovies();
    getMoviesAsync();
  }, []);

  const getMovies = () => {
    console.log(1);
    fetch(API_URL + "movie")
      .then((response) => response.json())
      .then((response) => {
        console.log(`2`, 2);
        //console.log(response);
        setMovies(response);
      });
    console.log(`3`, 3);
  };

  const getMoviesAsync = async () => {
    let response = await fetch(API_URL + "movie");
    response = await response.json();
    setMovies(response);
  };

  return (
    <div className="row">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          name={movie.name}
          description={
            !movie.description ? "No hay descripción" : movie.description
          }
          staffList={movie.staffList}
          image={
            !movie.imageLink
              ? "https://picsum.photos/seed/picsum/200/300"
              : movie.imageLink
          }
          id={movie.id}
        />
      ))}
    </div>
  );
};
