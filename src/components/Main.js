import React, { useState } from "react";
import Menu from "./Menu";
import DISHES from "../dishes";
import PROMOTIONS from "../promotions";
import LEADERS from "../leaders";
import COMMENTS from "../comments";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import DishDetail from "../components/DishDetail";

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [comments, setComments] = useState(COMMENTS);

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promotion) => promotion.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={() => <About leaders={leaders} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
