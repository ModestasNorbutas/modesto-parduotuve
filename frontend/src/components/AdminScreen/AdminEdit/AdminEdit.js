import React, { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import "./AdminEdit.css"
import { ProductContext } from "../../Context/ProductContext";
import axios from "axios";

export default function AdminEdit() {

  const location = useLocation();
  const history = useHistory();

  const { setProducts } = useContext(ProductContext);
  const [formData, setFormData] = useState(location.state.params)

  function handleChange(event) {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.type === "number" ?
        isNaN(event.target.valueAsNumber) ? 0 : event.target.valueAsNumber :
        event.target.value
    }))
  }

  function deleteProduct() {
    axios.delete(`http://localhost:8080/api/products/${formData.id}`)
      .then(response => setProducts(response.data))
      .catch(error => alert(error))
      .then(history.push("/admin"));
  }

  function editProduct() {
    axios.put("http://localhost:8080/api/products/edit", formData)
      .then(response => setProducts(response.data))
      .catch(error => alert(error))
      .then(history.push("/admin"));
  }

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="col admin-edit">
          <h4>Product id: {formData.id}</h4>
          <div>
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
              onClick={editProduct}
            >
              Edit Product
            </button>
            <button
              className="btn btn-danger"
              onClick={deleteProduct}
            >
              Delete product
            </button>
            <button
              className="btn btn-primary"
              onClick={() => history.push("/admin")}
            >
              Cancel
            </button>
          </div>
        </Card>
      </Row>
    </Container >
  )
}
