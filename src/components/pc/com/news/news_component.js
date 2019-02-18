import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './news_component.scss'

export default class NewsComponent extends React.Component {
  render(){
    let news=this.props.news;
    let newsList=news.map((newsItem, index) => (
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`}>
          {newsItem.title}
        </Link>
      </li>
    ));

    return (
      <Card className='news_card'>
        <ul>
          {newsList}
        </ul>
      </Card>
    );
  }
}