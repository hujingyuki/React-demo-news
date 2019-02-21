import React from 'react';
import {Icon} from 'antd';
import ImageSingleComponent from './image_single_component';
import { $api } from '@/config';

export default class PCNewsImageSingle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {news: ''};
  }

  //页面渲染之前
  componentDidMount() {
    this.getNews();
  }

  render(){
    const news = this.state.news;
    const newsList = news.length
      ? <ImageSingleComponent news={news} ImageWidth={this.props.ImageWidth} width={this.props.width} title={this.props.title}/>
      : (<div><span>玩命加载中...</span>&nbsp;<Icon type="loading" /></div>);

    return(
      <div>{newsList}</div>
    );
  }

  //获取新闻
  async getNews(){
    let res = await $api['apis/getnews']({type:this.props.type,count:this.props.count});
    this.setState({news: res});
  }
}
