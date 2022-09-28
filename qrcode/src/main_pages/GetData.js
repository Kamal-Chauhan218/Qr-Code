import React from "react";
import Fetch from "../pages/Fetch";
import Navbar from "../pages/Navbar";
import "../styles/form.css"
function GetData() {
  return (
    <div className="fetch_container">
      <Navbar />
      <Fetch />
    </div>
  );
}

export default GetData;
