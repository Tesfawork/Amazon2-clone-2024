/** @format */

// import ksa from '../../assets/ksa.jpg'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import style from "./Header.module.css";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  return (
    <section className={style.fixed}>
      <div className={style.header_container}>
        <div className={style.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
          {/* delivery */}
          <div className={style.delivery}>
            <span>{<FaLocationDot />}</span>
            <div>
              <p>Deliver to</p>
              <span>
                {" "}
                Addis Ababa,
                <br />
                Ethiopia
              </span>
            </div>
          </div>
        </div>
        <div className={style.search}>
          {/* search bar */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder=" search product" />
          {<FaSearch size={25} />}
        </div>
        {/* rightSide  */}

        <div>
          <div className={style.order_container}>
            <a href="" className={style.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/188px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* three components  */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span> Account & Lists</span>
              </div>
            </Link>
            {/* order */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={style.cart}>
              {<CiShoppingCart size={35} />}
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
