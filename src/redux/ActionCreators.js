import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../baseUrl";

// comment creators
export const addComment = (dishId, rating, author, comment) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
    },
  };
};

// dishes creators
export const dishesLoading = () => {
  return {
    type: ActionTypes.DISHES_LOADING,
  };
};

export const dishesFailed = (errMess) => {
  return {
    type: ActionTypes.DISHES_FAILED,
    payload: errMess,
  };
};

export const addDishes = (dishes) => {
  return {
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
  };
};

// comments creators
export const commentsFailed = (errMess) => {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess,
  };
};

export const addComments = (comments) => {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
  };
};

// promotions creators
export const promotionsLoading = () => {
  return {
    type: ActionTypes.PROMOTIONS_LOADING,
  };
};

export const promotionsFailed = (errMess) => {
  return {
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess,
  };
};

export const addPromotions = (promotions) => {
  return {
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions,
  };
};

// leaders creators
export const leadersLoading = () => {
  return {
    type: ActionTypes.LEADERS_LOADING,
  };
};

export const leadersFailed = (errMess) => {
  return {
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess,
  };
};

export const addLeaders = (leaders) => {
  return {
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
  };
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());
  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)));
};

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());
  return fetch(baseUrl + "leaders")
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)));
};
