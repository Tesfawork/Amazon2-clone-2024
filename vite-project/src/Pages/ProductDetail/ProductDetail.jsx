import React, { useState, useEffect } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams(); // Fixed parameter case to match the URL param
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setIsLoading(false);
      });
  }, [productId]); // Dependency array includes productId to refetch if it changes

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_detail}>
          <ProductCard
            product={product}
            flex={true}
            renderDesc={true}
            renderAdd={true} // Fixed prop name spelling
          />
        </div>
      )}
    </LayOut>
  );
}

export default ProductDetail;
