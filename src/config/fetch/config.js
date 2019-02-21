/*
 * @Author: jinghu5 
 * @Date: 2019-02-21 11:34:58 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-21 12:17:42
 */

// fetch 默认配置
export const FETCH_DEFAULT_URL = 'http://newsapi.gugujiankong.com';

export const FETCH_DEFAULT_CONFIG = {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json'
  // }, // 需要服务端支持OPTIONS请求
  mode: 'cors',
  body: null
};

// API 默认配置
export const API_DEFAULT_CONFIG = {
  mockBaseURL: 'http://yapi.demo.qunar.com/mock/', // mock地址
  mock: false, // 是否开启mock
  debug: false, // 是否开启debug模式
  sep: '/' // 接口调用分隔符
};