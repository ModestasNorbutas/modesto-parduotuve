import React, { useState } from "react";
import { Container, Card, Row } from "react-bootstrap";
import "./AdminAdd.css"

export default function AdminAdd(props) {

  const [formData, setFormData] = useState({
    "id": (props.products.length + 1),
    "name": "",
    "imageUrl": "",
    "price": "",
    "quantity": "",
    "description": ""
  })

  function handleChange(event) {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.type === "number" ?
        isNaN(event.target.valueAsNumber) ? 0 : event.target.valueAsNumber :
        event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewProduct(formData);
    setFormData(prevData => ({ ...prevData, "id": prevData.id + 1 }));
    alert("Product Added");
  }

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="col admin-add">
          <h4>New product id: {formData.id}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Product name:</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="product name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL, pvz.: https://picsum.photos/200/100</label>
              <input
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="imageUrl"
                placeholder="image URL" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                className="form-control"
                id="price"
                placeholder="price in euros"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                type="number"
                className="form-control"
                id="quantity"
                placeholder="quantity in storage"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                id="description"
                placeholder="product description"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Add product
            </button>
          </form>
        </Card>
      </Row>
    </Container>
  )
}

