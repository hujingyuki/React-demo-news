import React from 'react';
import {Row, Col} from 'antd';
import PCNewsImageBlock from './image_block';
import Comment from '../../../common/comment';

export default class PCNewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: ''
    };
  }

  componentDidMount() {
    let fetchOption = { method: 'GET' };
    let uniquekey = this.props.match.params ? this.props.match.params.uniquekey : '';
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + uniquekey, fetchOption)
      .then(response => response.json())
      .then(json => {
        this.setState({newsItem: json});
        document.title = this.state.newsItem.title + "-新闻头条";
      });
  }

  createMarkup() {
    return {__html: this.state.newsItem.pagecontent};
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={2}/>
          <Col span={14}>
            <div style={{marginTop: '50px'}} dangerouslySetInnerHTML={this.createMarkup()}/>
            <Comment uniquekey={this.props.match.params.uniquekey}/>
          </Col>
          <Col span={1}/>
          <Col span={6}>
            <PCNewsImageBlock imageWidth='150px' width='100%'  count={40} type='top' cartTitle='推荐'/>
          </Col>
          <Col span={1}/>
        </Row>
      </div>
    );
  }
}