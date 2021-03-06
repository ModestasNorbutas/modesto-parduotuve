import React, { useContext } from "react";
import { Container, Table, Row, Card } from "react-bootstrap";
import "./CartScreen.css";

import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem/CartItem";

export default function CartScreen() {

  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);

  let totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  let itemsPrice = cartItems
    .map(item => item.product.price)
    .reduce((sum, price) => sum + price, 0).toFixed(2);
  let totalPrice = cartItems
    .map(item => item.quantity * item.product.price)
    .reduce((sum, price) => sum + price, 0).toFixed(2);

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="cart-screen">
          <h4>Manage your purchase, {user.username}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Available</th>
                <th>Quantity</th>
                <th>Unit price</th>
                <th>Total price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item =>
                <CartItem
                  key={item.id}
                  item={item}
                />
              )}
              <tr>
                <td colSpan={3}></td>
                <td>{totalQuantity}</td>
                <td>{itemsPrice} &euro;</td>
                <td>{totalPrice} &euro;</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  )
}