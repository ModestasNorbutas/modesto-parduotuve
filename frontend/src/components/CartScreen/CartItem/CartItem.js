import React from "react";
import { Button } from "react-bootstrap";
import "./CartItem.css";

export default function CartItem(props) {

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
        <input
          name="quantity"
          className="cart-item--quantity"
          value={props.item.quantity}
          type="number"
          onChange={(event) => props.updateQuantity(props.item.id, event.target.value)}

        />
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