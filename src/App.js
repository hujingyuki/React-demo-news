import 'babel-polyfill';
import '@/assets/css/App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCApp from './components/pc';
import { renderRoutes } from 'react-router-config'
import {PC_Router,Mobile_Router} from './router'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  appReducer from './store';

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        {/* PC端 */}
        <MediaQuery query='(min-device-width:1224px)'>
          <Router>
            <PCApp>
              {renderRoutes(PC_Router)}
            </PCApp>
          </Router>
        </MediaQuery>
        {/* 移动端 */}
        <MediaQuery query='(max-device-width:1224px)'>
          <Router>
            <div>
              {renderRoutes(Mobile_Router)}
            </div>
          </Router>
        </MediaQuery>
      </Provider>
    );
  }
}

export default App;