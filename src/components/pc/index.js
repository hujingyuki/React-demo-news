import React from 'react';
import PCHeader from './com/header';
import PCFooter from './com/footer';

export default class PCApp extends React.Component{
  render(){
    return(
      <div>
        <PCHeader/>
        {this.props.children}
        <PCFooter/>
      </div>
    )
  }
}