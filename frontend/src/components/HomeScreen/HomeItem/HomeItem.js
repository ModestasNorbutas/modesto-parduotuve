import React, { useContext } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./HomeItem.css";

import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

export default function HomeItem(props) {

  const { user } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { id, imageUrl, name, description, price } = props.product;

  const cartItem = cartItems.filter(item => item.product.id === id)[0] || 0;
  const isInCart = cartItem ? true : false;

  const cartRequest = {
    "username": user.username,
    "itemId": cartItem.id,
    "productId": id,
    "quantity": cartItem.quantity
  }

  function addRemoveItem() {
    if (isInCart) {
      axios.delete(`http://localhost:8080/api/cart/delete`, { data: cartRequest })
        .then(response => setCartItems(response.data))
        .catch(error => alert(error));
    } else {
      axios.post(`http://localhost:8080/api/cart/add`, cartRequest)
        .then(response => setCartItems(response.data))
        .catch(error => alert(error));
    }
  }

  return (
    <Card className="home-item--card">
      <Card.Img
        variant="top"
        className="home-item--image"
        src={imageUrl}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="home-item--description">{description}</Card.Text>
        <Card.Text>Price: {price} &euro;</Card.Text>
        <Button
          variant={isInCart ? "success" : "primary"}
          onClick={addRemoveItem}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  )
}