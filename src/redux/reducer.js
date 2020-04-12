import DISHES from "../dishes";
import PROMOTIONS from "../promotions";
import LEADERS from "../leaders";
import COMMENTS from "../comments";

export const initialState = {
  dishes: DISHES,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
