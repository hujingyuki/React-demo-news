import React from 'react';
import Logout from './logout';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      MenuList:[
        {key:'top',link:'/top',name:'头条',icon:'fire'},
        {key:'shehui',link:'/shehui',name:'社会',icon:'api'},
        {key:'guonei',link:'/guonei',name:'国内',icon:'trademark'},
        {key:'guoji',link:'/guoji',name:'国际',icon:'global'},
        {key:'yule',link:'/yule',name:'娱乐',icon:'gold'},
        {key:'tiyu',link:'/tiyu',name:'体育',icon:'paper-clip'},
        {key:'keji',link:'/keji',name:'科技',icon:'rocket'},
        {key:'shishang',link:'/shishang',name:'时尚',icon:'crown'},
      ]
    }
  }
  render(){
    const userShow = this.props.hasLogined ? 
      (<Menu.Item key='logout'>
        <Logout logout = {this.props.logout} userName={this.props.userName}/>
      </Menu.Item>) :
      (<Menu.Item key='register'>
        <Icon type='login'/>注册/登录
      </Menu.Item>);
    
    let navList = this.state.MenuList.map((item,index)=> (
      <Menu.Item key={item.key}>
        <Link to={item.link}>
          <Icon type={item.icon}/>{item.name}
        </Link>
      </Menu.Item>
    ))
    return (
      <Menu mode='horizontal' selectedKeys={[this.props.current]} onClick={this.props.menuItemClick}>
        {navList}
        {userShow}
      </Menu>
    )
  }
}