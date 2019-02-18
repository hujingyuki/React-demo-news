import React from 'react';
import {Row,Col} from 'antd';


export default class PCFooter extends React.Component{
  render(){
    return (
      <footer>
        <Row>
          <Col span={2}/>
          <Col span={20} style={{ textAlign:'center'}}>
              &copy;&nbsp;2019 新闻头条。All Rights Reserved.
          </Col>
          <Col span={2}/>
        </Row>
    </footer>
    );
  }
}