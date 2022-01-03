import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeItem from "./HomeItem/HomeItem";

export default function HomeScreen(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Container>
      <Row className="row">
        {products.map(product =>
          <Col className="col" key={product.id}>
            <HomeItem
              product={product}
              addRemoveItem={props.addRemoveItem}
              cartItems={props.cartItems}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
}