import React from "react";
import ReactDOM from "react-dom/client";

/* PAGES */
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";

/* GLOBAL STYLE */
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Home />
    <GlobalStyle />
  </>
);
