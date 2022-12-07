import "./Content.css";

import { Card } from "../card/Card";
import { useEffect, useState } from "react";

export const Content = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {    
    //getMovies();
    getMoviesAsync();
    setTimeout(() => {
      console.log("hola esperé 3 segundos")
    }, 3000);
  }, []);

  const getMovies = () => {
    console.log(1);
    fetch("http://localhost:8080/api/movie")
      .then((response) => response.json())
      .then((response) => {
        console.log(`2`, 2);
        //console.log(response);
        setMovies(response);
      });
    console.log(`3`, 3);
  };

  const getMoviesAsync = async () => {
    let response = await fetch("http://localhost:8080/api/movie");
    response = await response.json();    
    setMovies(response);    
  };

  return (
    <div className="flex">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          name={movie.name}
          description={!movie.description?"No hay descripción":movie.description}
          staffList={movie.staffList}
          image={
            !movie.image
              ? "https://picsum.photos/seed/picsum/200/300"
              : movie.image          
          }
        />
      ))}
    </div>
  );
};
