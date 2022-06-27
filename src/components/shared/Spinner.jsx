import React from "react";
import loadingGif from "../assets/R.gif";
const Spinner = () => {
  return (
    <img
      src={loadingGif}
      alt="loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    ></img>
  );
};

export default Spinner;
