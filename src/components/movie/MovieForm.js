import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { API_URL } from "../../util/Util";

export const MovieForm = () => {
  const [formData, setFormData] = useState({
    name: null,
    trailerLink: null,
    imageLink: null,
    description: null,
    categories: null,
    staffList: null,
  });

  useEffect(() => {
    getCategoriesAsync();
  }, []);

  const [categories, setCategories] = useState([]);

  const getCategoriesAsync = async () => {
    let response = await fetch(API_URL + "category");
    response = await response.json();
    setCategories(response);
  };

  const sendMovieApi = async () => {
    const requestData = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };
    let response = await fetch(API_URL + "movie", requestData);
    response = await response.json();
    return response;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name == "categoryList") {
      setFormData((values) => ({ ...values, [name]: { id: value } }));
    } else {
      setFormData((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await sendMovieApi();
    console.log(`response`, formData);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombres"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellidos"
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Select
          name="categoryList"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option>Seleccione la categoría</option>
          {categories.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="number"
            placeholder="Teléfono de contacto"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            No compartiremos el email con nadie más
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/">Ya tengo una cuenta</Link>
    </div>
  );
};
