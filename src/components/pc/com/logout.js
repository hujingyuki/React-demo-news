import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

export default class Logout extends React.Component{
  render(){
    return (
      <div>
        <a href='/'>
          <Button type='primary'>
            {this.props.userName}
          </Button>
        </a>
        &nbsp;&nbsp;
        <Button type='ghost' onClick={this.props.logout}>注销用户</Button>
      </div>
    )
  }
}

//设置必须需要userName属性
Logout.propTypes = {
  userName:PropTypes.string.isRequired
};