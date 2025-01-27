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
import { postFeedback, postComment, fetchDishes, fetchComments, fetchPromotions, fetchLeaders } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromotions: () => dispatch(fetchPromotions()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedbackForm: () => dispatch(actions.reset("feedback")),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
});

function Main(props) {
  const HomePage = () => {
    return (
      <Home
        // dish
        dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dishes.isLoading}
        dishesErrMess={props.dishes.errMess}
        // promotion
        promotion={props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
        promotionsLoading={props.promotions.isLoading}
        promotionsErrMess={props.promotions.errMess}
        // leader
        leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={props.leaders.isLoading}
        leadersErrMess={props.leaders.errMess}
      />
    );
  };

  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromotions();
    props.fetchLeaders();
  }, []);

  const DishWithId = ({ match }) => {
    const dishId = parseInt(match.params.dishId);
    return (
      <DishDetail
        dish={props.dishes.dishes.filter((dish) => dish.id === dishId)[0]}
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter((comment) => comment.dishId === dishId)}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
      />
    );
  };

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch key={props.location.key} classNames="page" timeout={300}>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contact" component={() => <Contact postFeedback={postFeedback} resetFeedbackForm={props.resetFeedbackForm} />} />
            <Route exact path="/about" component={() => <About leaders={props.leaders} />} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
