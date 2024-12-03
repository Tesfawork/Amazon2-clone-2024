import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import currencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import classes from "./cart.module.css";
import { Type } from "../../Utility/action.type";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const totalAmount = basket?.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, item });
  };

  const decrement = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div>
          <h2>Hello, {user?.name || "Guest"}</h2>
          <h3>Your Shopping Basket</h3>
          <br />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket?.map((item, i) => (
              <section className={classes.cart_product} key={i}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <FaCircleArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <FaCircleArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items):</p>
                <CurrencyFormat amount={totalAmount} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments" className={classes.checkout_link}>
                Continue to Checkout
              </Link>
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
