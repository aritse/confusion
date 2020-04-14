import * as ActionTypes from "./ActionTypes";

const defaultState = {
  errMess: null,
  comments: [],
};

export const Comments = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload, comments: [] };
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
