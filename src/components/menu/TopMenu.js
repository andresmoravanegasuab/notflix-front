import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";

export const TopMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesAsync();
  }, []);

  const getCategoriesAsync = async () => {
    let response = await fetch("http://localhost:8080/api/category");
    response = await response.json();
    setCategories(response);
  };

  const items = [
    "Inicio",
    "Categorías",
    "Más vistas",
    "Mis listas",
    "Mis calificados",
    "Mi cuenta",
  ];

  const subMenu = () => (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <div className="subnav">
        <button className="subnavbtn">
          Categorías <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          {categories.map((item, idx) => (
            <Link key={idx} to={`/category/${item.name}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          Partners <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <a href="#contact">Contact</a>
    </div>
  );

  const oldMenu = () => (
    <div classNameName="scrollmenu">
      {items.map((item, idx) => (
        <a key={idx} href="#home">
          {item}
        </a>
      ))}
    </div>
  );

  return subMenu();
};
