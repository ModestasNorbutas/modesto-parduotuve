import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(response => setProducts(response.data))
      .catch(error => alert(error));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}