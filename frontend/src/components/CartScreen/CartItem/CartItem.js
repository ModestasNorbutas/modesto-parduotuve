import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./CartItem.css";

export default function CartItem(props) {

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
            onClick={() => props.updateQuantity(props.item.productId, chosenQty)}
            className="btn btn-primary"
          >Ok</button>
        </div>
      </td>
      <td className="align-middle">{props.product.price} &euro;</td>
      <td className="align-middle">{props.product.price * props.item.quantity} &euro;</td>
      <th className="align-middle">
        <Button
          onClick={() =>
            props.addRemoveItem(props.item)}
        >
          Remove
        </Button></th>
    </tr>
  )
}