import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeItem from "./HomeItem/HomeItem";

export default function HomeScreen(props) {

  return (
    <Container>
      <Row className="row">
        {props.products.map(product =>
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