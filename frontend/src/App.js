import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import RouteHandler from "./components/RouteHandler/RouteHandler";

export default function App() {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    "username": "Anonymous",
    "password": ""
  });
  const [cartItems, setCartItems] = useState([]);
  const [userCarts, setUserCarts] = useState([{
    "user": "Anonymous",
    "items": cartItems
  }]);

  useEffect(() => {
    updateProducts();
  }, []);

  function updateProducts() {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  function handleLogin(event, newUser) {
    event.preventDefault();
    setUserCarts(prevCarts => {
      return prevCarts.find(cart => cart.user === user.username) === undefined ?
        [...prevCarts, { "user": user.username, "items": cartItems }] :
        prevCarts.map(cart => cart.user === user.username ? { "user": user.username, "items": cartItems } : cart)
    })
    setUser(newUser);
    setCartItems(userCarts.find(cart => cart.user === newUser.username) === undefined ? [] :
      userCarts.find(cart => cart.user === newUser.username).items
    )
  }

  function addRemoveItem(cartItem) {
    setCartItems(prevItems => {
      if (prevItems.filter(item => item.id === cartItem.id).length > 0) {
        return prevItems.filter(item => item.id !== cartItem.id);
      } else {
        return [...prevItems, cartItem];
      }
    })
  }

  function updateQuantity(itemId, itemQuantity) {
    let newQuantity = parseInt(itemQuantity);
    let maxQuantity = products.find(product => product.id === itemId).quantity;
    if (newQuantity > maxQuantity) {
      newQuantity = maxQuantity;
    } else if (newQuantity <= 0 || isNaN(newQuantity)) {
      newQuantity = 1;
    }
    setCartItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { "id": itemId, "quantity": newQuantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="background">
        <NavigationBar
          username={user.username}
          cartItems={cartItems}
        />
        <RouteHandler
          cartItems={cartItems}
          addRemoveItem={addRemoveItem}
          handleLogin={handleLogin}
          username={user.username}
          products={products}
          updateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}