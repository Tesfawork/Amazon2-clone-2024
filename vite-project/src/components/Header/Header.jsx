import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Classes from "./header.module.css"; // Fixed the import (ensure proper naming)
import { TfiLocationPin } from "react-icons/tfi";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
// import { AmazonLogo } from "../../assets/image/Amazon-icon.png";

function Header() {
  const [{ basket }] = useContext(DataContext);

  // Calculate total items in the basket
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <>
      <section className={Classes.fixed}>
        <div className={Classes.header_container}>
          {/* Logo */}
          <div className={Classes.logo_container}>
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1XSwtJLWmkQnv6XVQNv_VnV0Pz82bfk9s8jwitFC02y2idezKxguarSJ3dWaUDKprtg&usqp=CAU"
                alt="Amazon logo"
              />
            </Link>
          </div>

          {/* Delivery */}
          <div className={Classes.delivery}>
            <span>
              <TfiLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search */}
          <div className={Classes.search_container}>
            <select name="category" id="category">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search products"
              className={Classes.search_input}
            />
            <button className={Classes.search_button}>
              <FaSearch />
            </button>
          </div>

          {/* Right-side Links */}
          <div className={Classes.right_links}>
            {/* Language */}
            <div className={Classes.language_container}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="USA flag"
              />
              <select name="language" id="language">
                <option value="en">EN</option>
              </select>
            </div>

            {/* Account */}
            <Link to="/signin" className={Classes.account_link}>
              <p>Sign in</p>
              <span>Account & Lists</span>
            </Link>

            {/* Orders */}
            <Link to="/orders" className={Classes.orders_link}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={Classes.cart}>
              <FaCartArrowDown size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
