import React, { useState, useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./CartItem.css";

import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

export default function CartItem(props) {

  const { user } = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);
  const [chosenQty, setChosenQty] = useState(props.item.quantity)

  function handleChange(event) {
    let value = parseInt(event.target.value);
    if (value < 0) {
      setChosenQty(0);
    } else if (value > props.item.product.quantity) {
      setChosenQty(props.item.product.quantity);
    } else {
      setChosenQty(value);
    }
  }

  const cartRequest = {
    "username": user.username,
    "itemId": props.item.id,
    "productId": props.item.product.id,
    "quantity": chosenQty
  }

  function updateQuantity() {
    axios.put(`http://localhost:8080/api/cart/edit`, cartRequest)
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }

  function removeItem() {
    axios.delete(`http://localhost:8080/api/cart/delete`, { data: cartRequest })
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }

  return (
    <tr>
      <td className="align-middle">
        <img
          className="cart-item--image"
          src={props.item.product.imageUrl}
          alt={props.item.product.name}
        />
      </td>
      <td className="align-middle">{props.item.product.name}</td>
      <td className="align-middle">{props.item.product.quantity}</td>
      <td className="align-middle">
        <div className="quantity-container">
          {props.item.quantity}
          <input
            name="chosenQty"
            value={chosenQty}
            onChange={handleChange}
            type="number"
            className="cart-item--form-control"
          />
          <button
            onClick={updateQuantity}
            className="btn btn-primary"
          >Ok</button>
        </div>
      </td>
      <td className="align-middle">{props.item.product.price.toFixed(2)} &euro;</td>
      <td className="align-middle">{(props.item.product.price * props.item.quantity).toFixed(2)} &euro;</td>
      <th className="align-middle">
        <Button
          onClick={removeItem}
        >
          Remove
        </Button></th>
    </tr>
  )
}