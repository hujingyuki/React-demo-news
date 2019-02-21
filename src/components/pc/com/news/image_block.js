import React from 'react';
import {Icon} from 'antd';
import ImageNewsComponent from './image_news_component';
import { $api } from '@/config';

export default class PCNewsImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: ''};
  }

  componentDidMount() {
    this.getnews();
  }

  render() {
    const news = this.state.news;
    let newsImage = news.length 
      ? <ImageNewsComponent news={news} imageWidth={this.props.imageWidth} cartTitle={this.props.cartTitle} justifyContent={this.props.justifyContent}/>
      : (<div><span>玩命加载中...</span>&nbsp;<Icon type="loading" /></div>);
    return (
      <div>{newsImage}</div>
    );
  }

  async getnews(){
    let res = await $api['apis/getnews']({type: this.props.type , count: this.props.count});
    this.setState({news: res});
  }
}