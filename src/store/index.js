/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 11:07:17 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-20 15:54:47
 */
import {
  combineReducers
} from 'redux';

import userReducer from './reducers/user_reducer';
import countReducer from './reducers/count_reducer';
import navReducer  from "./reducers/nav_reducer";

const appReducer = combineReducers({
  userInfo: userReducer,
  count: countReducer,
  nav: navReducer
});

export default appReducer;