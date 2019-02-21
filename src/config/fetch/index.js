/*  封装fetch方法 */
/*
 * @Author: jinghu5 
 * @Date: 2019-02-20 16:58:00 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-21 11:40:01
 */

import _assign from 'lodash/assign';
import _merge from 'lodash/merge';
import API_CONFIG from '@/api';
import {
  FETCH_DEFAULT_URL,
  FETCH_DEFAULT_CONFIG,
  API_DEFAULT_CONFIG
} from './config';
/**
 * 生成api接口类
 */
class Api {
  constructor(options) {
    this.api = {};
    this.apiBuilder(options);
  }

  /**
   * 创建工程接口
   * @param sep 分隔符
   * @param config 接口配置对象
   * @param mock 是否开启mock
   * @param debug 是否开启debug模式
   * @param mockBaseURL mock接口地址
   * @returns {null} null
   */
  apiBuilder({
    sep = '/',
    config = {},
    mock = false,
    debug = false,
    mockBaseURL = ''
  }) {
    // eslint-disable-next-line
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        mock,
        mockBaseURL,
        sep,
        debug,
        config: config[namespace]
      });
    });
  }

  /**
   * 创建单个接口
   * @param sep 分隔符
   * @param config 接口配置对象
   * @param mock 是否开启mock
   * @param debug 是否开启debug模式
   * @param mockBaseURL mock接口地址
   */
  _apiSingleBuilder({
    namespace,
    sep = '/',
    config = {},
    mock = false,
    debug = false,
    mockBaseURL = ''
  }) {
    config.forEach(api => {
      const {
        name,
        desc,
        params,
        method,
        path
      } = api;
      let apiname = `${namespace}${sep}${name}`; // 接口调用名称 this.$api['apiname']({参数},{HTTP请求的配置})
      let url = path; // 接口地址
      const baseURL = mock ? mockBaseURL : FETCH_DEFAULT_URL; // 接口base地址

      debug && assert(name, `${url} :接口name属性不能为空`);
      //debug && assert(url.indexOf('/') === 0, `${url} :接口路径path，首字符应为/`);
      // value可以使用函数调用符号
      Object.defineProperty(this.api, `${apiname}`, {
        value(outerParams, outerOptions) {
          //todo FormData 则需要手动的设置请求头 Content-type:multipart/form-data
          let _data =
            Array.isArray(outerParams) || outerParams instanceof FormData ?
            outerParams :
            _merge({}, params, outerParams);

          let options = _normoalize(_assign({
            url,
            desc,
            baseURL,
            _data
          }), _assign(FETCH_DEFAULT_CONFIG, {
            method: method
          }, outerOptions));
          console.log('fetch', options);
          return fetch(options.reqURL, options.config).then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              return Promise.reject('请求失败！');
            }
          }).then(json => { return json;})
          .catch(err => {
            return Promise.reject(err);
          })
        }
      });
    });
  }
}

/**
 * 根据请求类型处理axios参数
 * @param options
 * @param data
 * @returns {*}
 * @private
 */
function _normoalize(options, config) {
  let reqURL = options.baseURL + options.url;
  if (config.method === 'POST') {
    config.body = JSON.stringify(options._data);
  } else if (config.method === 'GET') {
    let queryStr = urlEncode(options._data);
    reqURL += queryStr ? ('?' + queryStr) : '';
  }
  return _assign({
    reqURL,
    config
  });
}

function urlEncode(obj) {
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return '';
  }
  let params = [];
  for (let key in obj) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return params.join('&');
}

//断言的内容
function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`);
}

/**
 * 导出接口
 */
export default new Api({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG
})['api'];