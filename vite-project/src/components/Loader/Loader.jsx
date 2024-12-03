import React from "react";
import { FadeLoader } from "react-spinners";

function Loader({ color = "#36d7b7", size = 150 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <FadeLoader color={color} height={size} />
    </div>
  );
}

export default Loader;
