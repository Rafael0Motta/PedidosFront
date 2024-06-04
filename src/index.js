import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* PAGES */
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";

/* GLOBAL STYLE */
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>

    <GlobalStyle />
  </>
);
