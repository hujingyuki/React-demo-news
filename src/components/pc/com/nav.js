import React from 'react';
import Logout from './logout';
import { Menu, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';
// 引入connect函数用来生成Redux组件
import { connect } from 'react-redux';
import { reverseNav } from '@/store/actions';

class Nav extends React.Component {
  render(){
    const userShow = this.props.hasLogined ? 
      (<Menu.Item key='logout'>
        <Logout logout = {this.props.logout} userName={this.props.userName}/>
      </Menu.Item>) :
      (<Menu.Item key='register'>
        <Icon type='login'/>注册/登录
      </Menu.Item>);
    
    let navList = this.props.MenuList.map((item,index)=> (
      <Menu.Item key={item.key}>
        <Link to={item.link}>
          <Icon type={item.icon}/>{item.name}
        </Link>
      </Menu.Item>
    ))
    return (
      <main>
        <Menu mode='horizontal' selectedKeys={[this.props.current]} onClick={this.props.menuItemClick}>
          {navList}
          {userShow}   
        </Menu>
        {/* <Button onClick={()=>{this.props.dispatch(reverseNav())}} type='primary'>反转菜单</Button> */}
        <Button onClick={this.props.handClick} type='primary'>倒置</Button>
      </main>
    )
  }
}

//redux
const mapStateToProps = (state, ownProps) => {
  return {
    MenuList: state.nav
  };
};

//也可以直接调用this.props.dispatch
const mapDispatchToProps = dispatch => ({
  handClick() {
    dispatch(reverseNav());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)