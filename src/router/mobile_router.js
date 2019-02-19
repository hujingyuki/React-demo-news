/*
 * @Author: jinghu5 
 * @Date: 2019-02-19 15:59:05 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-19 17:32:28
 */
import Bundle from './bundle';
import React from 'react';

const MobileApp = (props) => (
  <Bundle load={() => import('@/components/mobile')}>
    {(MobileApp) => <MobileApp {...props}/>}
  </Bundle>
);

const MobileNewsDetails = (props) => (
  <Bundle load={() => import('@/components/mobile/com/news_details')}>
    {(MobileNewsDetails) => <MobileNewsDetails {...props}/>}
  </Bundle>
);
            
const Mobile_Router = [
  { 
    path: '/',
    exact: true,
    component: MobileApp,
  },
  {
    path: '/details/:uniquekey',
    component: MobileNewsDetails,
  }
]

export default Mobile_Router;