import React from 'react';
import {Row, Col, Carousel, Tabs} from 'antd';
import PCNewsImageBlock from './image_block';
import PCNewsBlock from './news_block';
import PCNewsImageSingle from './image_single';

export default class News extends  React.Component{
  render(){
    return (
      <div className='container'> 
        <Row>
          <Col span={2}/>
          <Col span={21}>
            <Row className='top_news'>
              <Col span={6}>
                <div className='top_left'>
                  <Carousel autoplay>
                    <div><img src='https://n.sinaimg.cn/news/transform/579/w340h239/20190218/tOEt-htacqww4180823.jpg' alt='1' width='100%' /></div>
                    <div><img src='https://n.sinaimg.cn/news/transform/579/w340h239/20190218/TcwR-htacqww4226037.jpg' alt='2' width='100%' /></div>
                    <div><img src='https://n.sinaimg.cn/news/transform/579/w340h239/20190218/KW11-htacqww4182952.jpg' alt='3' width='100%' /></div>
                    <div><img src='https://n.sinaimg.cn/news/transform/579/w340h239/20190218/Snc5-htacqww4236947.jpg' alt='4' width='100%' /></div>
                  </Carousel>
                  <PCNewsImageBlock count={6} type='guoji' width='100%' cartTitle='国际新闻' justifyContent='space-around' imageWidth='112px' />
                </div>
              </Col>
              <Col span={12}>
                <div className='top_center'>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab='头条新闻' key='1'>
                        <PCNewsBlock count={30} type='top' width='100%' bordered='false'/>
                    </Tabs.TabPane>
                  </Tabs>
              </div>
              </Col>
              <Col span={6}>
                <div className='top_right'>
                  <PCNewsImageSingle width='100%' ImageWidth='100px' type='shehui' count={6} title='社会新闻'/>
                </div>
              </Col>
            </Row>
            <Row>
              <PCNewsImageBlock count={16} type='guonei' width='100%' imageWidth='112px' cartTitle='国内新闻'  justifyContent='space-start'/>
              <PCNewsImageBlock count={16} type='yule' width='100%' imageWidth='112px' cartTitle='娱乐新闻' justifyContent='space-start'/>
            </Row>
          </Col>
          <Col span={1}/> 
        </Row>
      </div>
    )
  }
}