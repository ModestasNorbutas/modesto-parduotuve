import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../Context/ProductContext";
import HomeItem from "./HomeItem/HomeItem";

export default function HomeScreen() {

  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Row className="row">
        {products.map(product =>
          <Col className="col" key={product.id}>
            <HomeItem
              product={product}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
}