import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./AdminItem.css";

export default function AdminItem(props) {

  const { id, imageUrl, name, quantity, price } = props.product;

  let history = useHistory();

  return (
    <tr>
      <td className="align-middle">{id}</td>
      <td className="align-middle">
        <img
          className="cart-item--image"
          src={imageUrl}
          alt={name}
        />
      </td>
      <td className="align-middle">{name}</td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">{price} &euro;</td>
      <th className="align-middle">
        <Button onClick={() => history.push("/admin/edit/", { params: props.product })}>Edit</Button>
      </th>
    </tr>
  )
}