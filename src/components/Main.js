import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import DISHES from "../dishes";
import DishDetail from "./DishDetail";

function Main() {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState();

  useEffect(() => {
    setDishes(DISHES);
    setSelectedDish(0);
  }, []);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
    </div>
  );
}

export default Main;
