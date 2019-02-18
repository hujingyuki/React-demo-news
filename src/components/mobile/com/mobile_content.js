import React from 'react';
import { Tabs, Carousel } from 'antd';
import MobileNews from './news';
const img1 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/tOEt-htacqww4180823.jpg';
const img2 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/TcwR-htacqww4226037.jpg';
const img3 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/KW11-htacqww4182952.jpg';
const img4 = 'https://n.sinaimg.cn/news/transform/579/w340h239/20190218/Snc5-htacqww4236947.jpg';

export default class MobileContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const tabList = this.state.MenuList.map((item,index)=>(
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