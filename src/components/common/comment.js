import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import FormComment from './form_comment';
import { message} from 'antd';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments: ''};
  }

  componentDidMount() {
    let myFetchOptions = { method: 'GET' };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
    .then(response => response.json()).then(json => {
      this.setState({comments: json});
    })
  };

  handleSubmit(data) {
    let myFetchOptions = { method: 'GET' };
    //如果用户登录了
    console.log(localStorage.userId)
    if (localStorage.userId) {
      //提交了之后发送请求添加评论
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey + "&commnet=" + data , myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //请求成功之后，重新加载页面
        this.componentDidMount();
        message.success('评论成功啦~');
      })
    } else {
      message.info('请先登录哦亲~');
      return;
    }
  }
  render() {
    const comments = this.state.comments;
    //只显示最近10条评论
    const lastComments = comments.length ? (comments.length > 10 ? comments.slice(comments.length - 10, comments.length): comments) : [];
    const commnetList = lastComments.length ? 
    lastComments.map((comment,index)=>(
      <Card key={index} title={comment.UserName} extra={<span>发布于 {comment.datetime}</span>}>
        <p>{comment.Comments}</p>
      </Card>
    )):(<div><span>玩命加载中...</span>&nbsp;<Icon type="loading" /></div>);

    return (
      <Row>
        <Col span={24}>
          {commnetList}
          <FormComment submitFn={this.handleSubmit.bind(this)}/>
        </Col>
      </Row>
    );
  }
}