import * as ActionTypes from "./ActionTypes";

const defaultState = {
  isLoading: true,
  errMess: null,
  leaders: [],
};

export const Leaders = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return { ...state, isLoading: false, errMess: null, leaders: action.payload };
    case ActionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };
    case ActionTypes.LEADERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, leaders: [] };
    default:
      return state;
  }
};
