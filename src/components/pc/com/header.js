import React from 'react';
import { Row, Col, Icon } from "antd";
import Nav from './nav';
import LoginRegisterModal from '../../common/modal';
import '@/assets/css/header.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PCHeader extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      current: '',
      modalVisible: false
    }
  }
  //组件加载之前
  componentWillMount(){
    this.setState({ current: this.getCurrentPath() });
    
    if (localStorage.userId && localStorage.userId !== '') {
      this.props.toLogin({userId:localStorage.userId,userName:localStorage.userName,hasLogined:true});
    }
  }
  
  render(){
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a className='logo' href='/'>
              <Icon type="dropbox" />
              <span>新闻头条</span>
            </a>
          </Col>
          <Col span={18}>
            <Nav hasLogined={this.props.userInfo.hasLogined} logout={this.props.toLogout}
                 userName={this.props.userInfo.userName} current={this.state.current}
                 menuItemClick={this.MenuItemClick.bind(this)}/>
            <LoginRegisterModal setModalVisible={this.setModalVisible.bind(this)}
                                login={this.login.bind(this)} 
                                visible={this.state.modalVisable}/>
          </Col>
        </Row>
      </header>
    )
  }
  
  MenuItemClick(e) {
    //注册登录MenuItem点击后，设置current值，显示注册登录的模态框
    if (e.key === 'register') {
      //高亮显示当前点击的MenuItem
      this.setState({current: 'register'});
      //显示模态框
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key});
    }
  }
  
  //设置注册和登录模态框是否显示，默认不显示
  setModalVisible(value) {
    this.setState({modalVisable: value});
  }
  
  //点击登录表单中的登录按钮,直接设置为登录状态
  login(userLogin) {
    this.props.toLogin({userName: userLogin.userName, hasLogined: true, userId: userLogin.userId});
  }

  /**
   * 根据路由选中菜单
   * @returns {String} 当前路径
   */
  getCurrentPath() {
    const PATH = this.context.router ? this.context.router.history.location.pathname : null;
    return (PATH && PATH !== '/') ? PATH.replace('/','') : 'top';
  }
}

PCHeader.contextTypes = {
  router:PropTypes.object.isRequired
};

//redux
const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

//也可以直接调用this.props.dispatch
const mapDispatchToProps = dispatch => ({
  //登录
  toLogin(user) {
    console.log('toLogin',user)
    localStorage.userName = user.userName;
    localStorage.userId = user.userId;
    dispatch({type:'LOGIN',user:user});
  },
  //登出
  toLogout() {
    localStorage.userName = '';
    localStorage.userId = '';
    dispatch({type:'LOGOUT'});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PCHeader)