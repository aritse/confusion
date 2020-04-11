import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import DISHES from "../dishes";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header />
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer></Footer>
    </div>
  );
}

export default Main;
