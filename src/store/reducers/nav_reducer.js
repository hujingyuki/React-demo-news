/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 13:37:06 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-20 13:43:40
 */

//1.定义初始化变量
let initialState = [{
    key: 'top',
    link: '/top',
    name: '头条',
    icon: 'fire'
  },
  {
    key: 'shehui',
    link: '/shehui',
    name: '社会',
    icon: 'api'
  },
  {
    key: 'guonei',
    link: '/guonei',
    name: '国内',
    icon: 'trademark'
  },
  {
    key: 'guoji',
    link: '/guoji',
    name: '国际',
    icon: 'global'
  },
  {
    key: 'yule',
    link: '/yule',
    name: '娱乐',
    icon: 'gold'
  },
  {
    key: 'tiyu',
    link: '/tiyu',
    name: '体育',
    icon: 'paper-clip'
  },
  {
    key: 'keji',
    link: '/keji',
    name: '科技',
    icon: 'rocket'
  },
  {
    key: 'shishang',
    link: '/shishang',
    name: '时尚',
    icon: 'crown'
  },
];

//2.reducer
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REVERSE':
      return [...state].reverse();
    default:
      return state;
  }
}

//3.export
export default navReducer;