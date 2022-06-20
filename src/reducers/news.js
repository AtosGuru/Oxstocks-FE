import { GET_NEWS, GET_NEW } from '../actions/types';

const initialState = {
  new: {},
  news: []
}

function news(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
      };
    case GET_NEW:
      return {
        ...state,
        new: payload,
      };
    default:
      return state;
  }
}

export default news;
