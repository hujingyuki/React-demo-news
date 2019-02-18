import React from 'react';
import MobileHeader from './com/mobile_header';
import MobileFooter from './com/mobile_footer';
import MobileContent from './com/mobile_content';

export default class MobileApp extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <MobileContent/>
        <MobileFooter/>
      </div>
    );
  }
}