import React from 'react';
import { Tabs, Carousel } from 'antd';
import MobileNews from './news';
import { connect } from 'react-redux';

const img1 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/tOEt-htacqww4180823.jpg';
const img2 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/TcwR-htacqww4226037.jpg';
const img3 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/KW11-htacqww4182952.jpg';
const img4 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/Snc5-htacqww4236947.jpg';

class MobileContent extends React.Component {
  render() {
    const tabList = this.props.MenuList.map((item,index)=>(
      <Tabs.TabPane tab={item.name} key={index}>
        <div>
          <Carousel autoplay>
            <div><img src={img1} alt='1' width='100%'/></div>
            <div><img src={img2} alt='2' width='100%'/></div>
            <div><img src={img3} alt='3' width='100%'/></div>
            <div><img src={img4} alt='4' width='100%'/></div>
          </Carousel>
        </div>
        <MobileNews count={50} type={item.key} ImageWidth='112px' width='100%'/>
      </Tabs.TabPane>
    ));

    return(
      <Tabs>
        {tabList}
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    MenuList: state.nav
  };
};

export default connect(mapStateToProps)(MobileContent);