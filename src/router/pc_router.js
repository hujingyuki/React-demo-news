/*
 * @Author: jinghu5 
 * @Date: 2019-02-19 15:59:12 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-19 17:32:08
 */
import Bundle from './bundle';
import React from 'react';

const PCNewsContainer = (props) => (
  <Bundle load={() => import('@/components/pc/com/news/news_container')}>
    {(PCNewsContainer) => <PCNewsContainer {...props}/>}
  </Bundle>
);

const PCNewsDetails = (props) => (
  <Bundle load={() => import('@/components/pc/com/news/news_details')}>
    {(PCNewsDetails) => <PCNewsDetails {...props}/>}
  </Bundle>
);

              
const PC_Router = [
  { 
    path: '/',
    exact: true,
    component: PCNewsContainer,
  },
  {
    path: '/details/:uniquekey',
    component: PCNewsDetails,
  },
  {
    path: '/top',
    component: PCNewsContainer,
  },
  {
    path: '/shehui',
    component: PCNewsContainer,
  },
  {
    path: '/guonei',
    component: PCNewsContainer,
  },
  {
    path: '/guoji',
    component: PCNewsContainer,
  },
  {
    path: '/yule',
    component: PCNewsContainer,
  },
  {
    path: '/tiyu',
    component: PCNewsContainer,
  },
  {
    path: '/keji',
    component: PCNewsContainer,
  },
  {
    path: '/shishang',
    component: PCNewsContainer,
  }
]

export default PC_Router;