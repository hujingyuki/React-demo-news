import React from 'react';
import {Row, Col} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import Comment from '../../common/comment';
import { $api } from '@/config';

export default class MobileNewsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    };
  }

  componentDidMount() {
    this.getnewsitem();
  }

  createMarkup() {
    return {__html: this.state.newsItem.pagecontent};
  }

  render() {
    return (
    <div>
      <MobileHeader/>
        <Row style={{marginTop:'1em'}}>
          <Col span={1}/>
          <Col span={22}>
            <div dangerouslySetInnerHTML={this.createMarkup()}/>
            <Comment uniquekey={this.props.match.params.uniquekey}/>
          </Col>
          <Col span={1}/>
        </Row>
      <MobileFooter/>
    </div>
    );
  }

  async getnewsitem() {
    let uniquekey = this.props.match.params ? this.props.match.params.uniquekey : '';
    let res = await $api['apis/getnewsitem']({uniquekey:uniquekey});
    this.setState({newsItem: res});
    document.title = this.state.newsItem.title + "-新闻头条";
  }

}