/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 11:17:28 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-20 14:45:15
 */

//1.定义初始化变量
let initialState = {
  userName: '',
  hasLogined: false,
  userId: null
};

//2.reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.user
      }
    case 'LOGOUT':
    return {
      ...state,
      user: initialState
    }
    default:
      return state
  }
}

//3.export
export default userReducer;