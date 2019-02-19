import 'babel-polyfill';
import '@/assets/css/App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCApp from './components/pc/index';
import PCNewsContainer from './components/pc/com/news/news_container';
import PCNewsDetails from './components/pc/com/news/news_details';
import MobileApp from './components/mobile/index';
import MobileNewsDetails from './components/mobile/com/news_details';

class App extends Component {
  render() {
    return (
      <div>
        {/* PC端 */}
        <MediaQuery query='(min-device-width:1224px)'>
          <Router>
            <PCApp>
              <Route exact path='/' component={PCNewsContainer} />
              <Route path='/details/:uniquekey' component={PCNewsDetails} />
              <Route path='/top' component={PCNewsContainer}/>
              <Route path='/shehui' component={PCNewsContainer}/>
              <Route path='/guonei' component={PCNewsContainer}/>
              <Route path='/guoji' component={PCNewsContainer}/>
              <Route path='/yule' component={PCNewsContainer}/>
              <Route path='/tiyu' component={PCNewsContainer}/>
              <Route path='/keji' component={PCNewsContainer}/>
              <Route path='/shishang' component={PCNewsContainer}/>
            </PCApp>
          </Router>
        </MediaQuery>
        {/* 移动端 */}
        <MediaQuery query='(max-device-width:1224px)'>
          <Router>
            <Switch>
              <Route exact path='/' component={MobileApp}/>
              <Route path='/details/:uniquekey' component={MobileNewsDetails} />
            </Switch>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;