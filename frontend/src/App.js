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

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCart();
  }, [user.username])

  function getProducts() {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  function getCart() {
    fetch(`http://localhost:8080/${user.username}/cart`)
      .then(response => response.json())
      .then(data => setCartItems(data));
  }

  function handleLogin(event, newUser) {
    event.preventDefault();
    setUser(newUser);
  }

  function editProduct(product) {
    fetch("http://localhost:8080/api/products/edit", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product)
    }).then(setTimeout(() => { getProducts() }, 1000)).then(alert("Product Edited"));
  }

  function deleteProduct(product) {
    fetch(`http://localhost:8080/api/products/${product.id}`, { method: "DELETE" })
      .then(setTimeout(() => { getProducts() }, 1000));
  }

  function addNewProduct(product) {
    fetch("http://localhost:8080/api/products/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product)
    }).then(setTimeout(() => { getProducts() }, 1000)).then(alert("Product added"));
  }

  function addRemoveItem(cartItem) {
    if (cartItems.filter(item => item.productId === cartItem.productId).length > 0) {
      fetch(`http://localhost:8080/${user.username}/${cartItem.productId}`,
        { method: "DELETE" }).then(setTimeout(() => { getCart() }, 1000));
    } else {
      fetch(`http://localhost:8080/${user.username}/cart`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem)
      }).then(setTimeout(() => { getCart() }, 1000));
    }
  }

  function updateQuantity(productId, quantity) {
    let newCartItem = { "productId": productId, "quantity": quantity };
    fetch(`http://localhost:8080/${user.username}/cart`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newCartItem)
    }).then(setTimeout(() => { getCart() }, 1000));
  }

  return (
    <BrowserRouter>
      <div className="background">
        <NavigationBar
          username={user.username}
          cartItems={cartItems}
        />
        <RouteHandler
          addNewProduct={addNewProduct}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
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