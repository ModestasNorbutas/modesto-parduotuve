import React, { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider(props) {

  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/${user.username}/cart`)
      .then(response => setCartItems(response.data))
      .catch(error => alert(error));
  }, [user])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}