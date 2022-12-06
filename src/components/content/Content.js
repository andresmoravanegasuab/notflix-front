import "./Content.css";

import { Card } from "../card/Card";

export const Content = () => {
  const movies = [
    {
      name: "titanic",
      description: "Una pelicula de amor",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      name: "terminator",
      description: "una pelicula de acción",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      name: "Avatara",
      description: "Una pelicula de amor y acción",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      name: "El silencio de los inocentes",
      description: "Una pelicula de crimen",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];

  return (
    <div className="flex">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          name={movie.name}
          description={movie.description}
          image={movie.image}
        />
      ))}
    </div>
  );
};
