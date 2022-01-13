import React, { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export function CartProvider(props) {

  const { user } = useContext(UserContext);
  const { products } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/cart/${user.username}`)
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }, [user, products])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}