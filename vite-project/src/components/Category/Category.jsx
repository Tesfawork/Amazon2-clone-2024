import React from "react";
import categoryFullInfo from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryFullInfo.map((infos) => {
        <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category;
