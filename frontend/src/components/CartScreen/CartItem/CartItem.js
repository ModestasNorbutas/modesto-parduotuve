import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import "./CartItem.css";

export default function CartItem(props) {

  const { user } = useContext(UserContext);
  const { updateCart } = useContext(CartContext);
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
    let newCartItem = { "productId": props.product.id, "quantity": chosenQty };
    fetch(`http://localhost:8080/${user.username}/cart`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newCartItem)
    }).then(updateCart(prevState => prevState + 1));
  }

  function removeItem() {
    fetch(`http://localhost:8080/${user.username}/${props.product.id}`,
      { method: "DELETE" }).then(updateCart(prevState => prevState + 1));
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
      <td className="align-middle">{props.product.price} &euro;</td>
      <td className="align-middle">{props.product.price * props.item.quantity} &euro;</td>
      <th className="align-middle">
        <Button
          onClick={removeItem}
        >
          Remove
        </Button></th>
    </tr>
  )
}