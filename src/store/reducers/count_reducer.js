/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 11:18:06 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-20 11:24:05
 */

//1.定义初始化变量
let initialState = 0;

//2.reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: action.count + 2
      }
    case 'DECREMENT':
      return {
        ...state,
        count: action.count - 1
      }
    default:
      return state
  }
}

//3.export
export default countReducer;