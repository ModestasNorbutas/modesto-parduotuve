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
    } else if (value > props.product.quantity) {
      setChosenQty(props.product.quantity);
    } else {
      setChosenQty(value);
    }
  }

  function updateQuantity() {
    let newCartItem = { "productId": props.item.productId, "quantity": chosenQty };
    axios.put(`http://localhost:8080/${user.username}/cart`, newCartItem)
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }

  function removeItem() {
    axios.delete(`http://localhost:8080/${user.username}/${props.item.productId}`)
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }

  return (
    <tr>
      <td className="align-middle">
        <img
          className="cart-item--image"
          src={props.product.imageUrl}
          alt={props.product.name}
        />
      </td>
      <td className="align-middle">{props.product.name}</td>
      <td className="align-middle">{props.product.quantity}</td>
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
      <td className="align-middle">{props.product.price.toFixed(2)} &euro;</td>
      <td className="align-middle">{(props.product.price * props.item.quantity).toFixed(2)} &euro;</td>
      <th className="align-middle">
        <Button
          onClick={removeItem}
        >
          Remove
        </Button></th>
    </tr>
  )
}