import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import DISHES from "../dishes";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

function Main() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(DISHES);
  }, []);

  const HomePage = () => <Home />;

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
