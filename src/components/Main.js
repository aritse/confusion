import React, { useEffect } from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import DishDetail from "../components/DishDetail";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
});

function Main(props) {
  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dishes.isLoading}
        dishesErrMess={props.dishes.errMess}
        promotion={props.promotions.filter((promotion) => promotion.featured)[0]}
        leader={props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  useEffect(() => {
    props.fetchDishes();
  }, []);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        addComment={props.addComment}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={() => <About leaders={props.leaders} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
