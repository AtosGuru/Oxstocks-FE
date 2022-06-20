
import { combineReducers } from 'redux';
import alert from './alert';
import news from './news';
import auth from './auth';
import wallet from './wallet';

export default combineReducers({
  alert,
  auth,
  news,
  wallet
});
