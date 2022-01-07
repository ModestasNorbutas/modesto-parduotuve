import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./HomeItem.css";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

export default function HomeItem(props) {

  const { user } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { id, imageUrl, name, description, price } = props.product;
  const isInCart = cartItems.filter(item => item.productId === props.product.id).length > 0 ? true : false;

  const cartItem = {
    "productId": id,
    "quantity": 1
  }

  function addRemoveItem() {
    if (isInCart) {
      axios.delete(`http://localhost:8080/${user.username}/${id}`)
        .then(response => setCartItems(response.data))
        .catch(error => alert(error));
    } else {
      axios.post(`http://localhost:8080/${user.username}/cart`, cartItem)
        .then(response => setCartItems(response.data))
        .catch(error => alert(error));
    }
  }

  return (
    <Card className="home-item">
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