import api from '../utils/api';
import {
  GET_NEWS,
  GET_NEW
} from './types';

// Load User
export const getNews = () => async dispatch => {
  try {
    const res = await api.get('/news');

    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "Error"
    });
  }
};


export const getNew = (id) => async dispatch => {
  try {
    const res = await api.get(`/news/${id}`);

    dispatch({
      type: GET_NEW,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "Error"
    });
  }
}
 
