import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loader from "../Loader/Loader";
import classes from "./product.module.css";

function Product() {
  const [products, setProducts] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true); // Correct loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); // Update products state
        setIsLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching products:", err); // Handle errors
        setIsLoading(false); // Stop loading even on error
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
