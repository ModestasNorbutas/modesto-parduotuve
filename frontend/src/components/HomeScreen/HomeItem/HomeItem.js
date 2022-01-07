import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./HomeItem.css";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

export default function HomeItem(props) {

  const { user } = useContext(UserContext);
  const { cartItems, updateCart } = useContext(CartContext);
  const { id, imageUrl, name, description, price } = props.product;
  const isInCart = cartItems.filter(item => item.productId === props.product.id).length > 0 ? true : false;

  const cartItem = {
    "productId": id,
    "quantity": 1
  }

  function addRemoveItem() {
    if (isInCart) {
      fetch(`http://localhost:8080/${user.username}/${id}`,
        { method: "DELETE" }).then(updateCart(prevState => prevState + 1));
    } else {
      fetch(`http://localhost:8080/${user.username}/cart`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem)
      }).then(updateCart(prevState => prevState + 1));
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