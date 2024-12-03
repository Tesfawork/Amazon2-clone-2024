import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Classes from "./header.module.css";

function LowerHeader() {
  return (
    <div className={Classes.Lower_container}>
      <ul>
        <li>
          <p>All</p>
        </li>
        <li>Todays Deals</li>
        <li></li>
        <li>Custumer Service</li>
        <li>Registery</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
