import React from "react";
import Navbar from "../pages/Navbar";
import Qr from "../pages/Qr";
import "../styles/form.css";
function QrMain() {
  return (
    <div className="fetch_container">
      <Navbar />
      <Qr />
    </div>
  );
}

export default QrMain;
