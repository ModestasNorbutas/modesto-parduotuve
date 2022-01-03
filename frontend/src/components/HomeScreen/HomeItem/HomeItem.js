import React from "react";
import { Card, Button } from "react-bootstrap";
import "./HomeItem.css";

export default function HomeItem(props) {

  const { id, imageUrl, name, description, price } = props.product;

  const isInCart = props.cartItems.filter(item => item.id === props.product.id).length > 0 ? true : false

  const cartItem = {
    "id": id,
    "quantity": 1
  }

  return (
    <Card className="home-item">
      <Card.Img
        variant="top"
        className="home-item--image"
        src={imageUrl}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="home-item--description">{description}</Card.Text>
        <Card.Text>Price: {price} &euro;</Card.Text>
        <Button
          variant={isInCart ? "success" : "primary"}
          onClick={() => props.addRemoveItem(cartItem)}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  )
}