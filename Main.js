import React, { useState, useEffect } from "react";
import { ProductForm } from "../Components/ProductForm";
import { ProductList } from "../Components/ProductList";
import axios from "axios";

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        setProducts(res.data.products);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeProductFromDom = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && (
        <ProductList
          products={products}
          removeProductFromDom={removeProductFromDom}
        />
      )}
    </div>
  );
};
