import React, { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export function CartProvider(props) {

  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [update, updateCart] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/${user.username}/cart`)
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, [update, user])

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {props.children}
    </CartContext.Provider>
  );
}