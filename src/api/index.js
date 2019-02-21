/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 17:08:57 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-21 09:44:41
 */

/* 接口定义 */
const URL = '/Handler.ashx';

export default {
  apis: [{
      name: 'login',
      method: 'GET',
      desc: '登录',
      path: URL,
      params: {
        action: 'login'
      }
    },
    {
      name: 'getcomments',
      method: 'GET',
      desc: '获取评论',
      path: URL,
      params: {
        action: 'getcomments'
      }
    },
    {
      name: 'comment',
      method: 'GET',
      desc: '发布评论',
      path: URL,
      params: {
        action: 'comment'
      }
    },
    {
      name: 'register',
      method: 'GET',
      desc: '注册',
      path: URL,
      params: {
        action: 'register'
      }
    },
    {
      name: 'getnewsitem',
      method: 'GET',
      desc: '获取新闻条目',
      path: URL,
      params: {
        action: 'getnewsitem'
      }
    },
    {
      name: 'getnews',
      method: 'GET',
      desc: '获取新闻',
      path: URL,
      params: {
        action: 'getnews'
      }
    }
  ]
}