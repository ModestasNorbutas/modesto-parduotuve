import React, { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

export function ProductProvider(props) {

  const [products, setProducts] = useState([]);
  const [update, updateProducts] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [update]);

  return (
    <ProductContext.Provider value={{ products, setProducts, updateProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}