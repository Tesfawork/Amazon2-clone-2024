import React, { useState, useEffect } from "react";
import classes from "./results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]); // State for storing products
  const [isLoading, setIsLoading] = useState(true); // State for loading spinner
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Start loading
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data); // Set fetched data
        setIsLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, [categoryName]); // Re-run when categoryName changes

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              ))
            ) : (
              <p style={{ padding: "30px" }}>No products found.</p>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
