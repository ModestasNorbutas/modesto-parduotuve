import React, { useContext } from "react";
import { Container, Table, Row, Card } from "react-bootstrap";
import "./CartScreen.css";
import CartItem from "./CartItem/CartItem";
import { ProductContext } from "../Context/ProductContext";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";

export default function CartScreen() {

  const { cartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  let emptyProduct = {
    "id": 0,
    "name": "Item is not available",
    "imageUrl": "",
    "price": 0,
    "quantity": 0,
    "description": "Item is not available"
  }

  let totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  let itemsPrice = cartItems
    .map(item => (products.find(product => product.id === item.productId) || emptyProduct).price)
    .reduce((sum, price) => sum + price, 0);
  let totalPrice = cartItems
    .map(item => item.quantity * (products
      .find(product => product.id === item.productId) || emptyProduct).price || 0)
    .reduce((sum, price) => sum + price, 0);

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
                  key={item.productId}
                  item={item}
                  product={products.find(product => product.id === item.productId) || emptyProduct}
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