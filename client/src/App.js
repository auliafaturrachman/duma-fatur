import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "./css/style.scss";

import PageContainer from "./components/PageContainer";
import WaChat from "./components/WaChat";
import Wishlist from "./components/Wishlist";

const App = () => (
  <>
    <PageContainer/>
    <WaChat/>
    <Wishlist/>
  </>
)

export default App;