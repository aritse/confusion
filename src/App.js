import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import "./components/Menu/Menu";
import Menu from "./components/Menu/Menu";
import DISHES from "./dishes";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES}></Menu>
    </div>
  );
}

export default App;
