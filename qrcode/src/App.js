import React from "react";

import { Routes, Route } from "react-router-dom";
import Register from "./main_pages/Register";
import GetData from "./main_pages/GetData";
import QrMain from "./main_pages/QrMain";
import ShowDatas from "./main_pages/ShowDatas";
import NoFound from "./main_pages/NoFound";
function App(props) {
  console.log(props);
  return (
    <div>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/newUserData" element={<GetData />} />
        <Route path="/QR" element={<QrMain />} />
        <Route path="data/:roll" element={<ShowDatas />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
