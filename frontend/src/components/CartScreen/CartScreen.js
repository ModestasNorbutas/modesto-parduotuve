import React from "react";
import { Container, Table, Row, Card } from "react-bootstrap";
import "./CartScreen.css";
import CartItem from "./CartItem/CartItem";

export default function CartScreen(props) {

  let totalQuantity = props.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  let itemsPrice = props.cartItems
    .map(item => props.products
      .find(product => product.id === item.id).price)
    .reduce((sum, price) => sum + price, 0);
  let totalPrice = props.cartItems
    .map(item => item.quantity * props.products
      .find(product => product.id === item.id).price)
    .reduce((sum, price) => sum + price, 0);

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="cart-screen">
          <h4>Manage your purchase, {props.username}</h4>
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
              {props.cartItems.map(item =>
                <CartItem
                  key={item.id}
                  item={item}
                  addRemoveItem={props.addRemoveItem}
                  product={props.products.find(product => product.id === item.id)}
                  updateQuantity={props.updateQuantity}
                />
              )}
              <tr>
                <td colSpan={3}></td>
                <td>{totalQuantity}</td>
                <td>{itemsPrice}</td>
                <td>{totalPrice}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  )
}