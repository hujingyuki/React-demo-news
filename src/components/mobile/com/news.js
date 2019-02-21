import React from 'react';
import MobileNewsComponent from './news_component';
import LoadMore from './load_more';
import {Icon} from 'antd';
import { $api } from '@/config';

export default class MobileNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			count: 10,
			isLoading:false,
			hasMore:true,
		};
	}

	componentDidMount() {
		this.getnews();
	}

	//加载更多方法
	loadMoreFn(){
		this.setState({isLoading:true});
		let count=this.state.count+10;
		if (count>0&&count<300){
			this.setState({count:count});
			this.getnews();
			this.setState({isLoadingMore: false});
		}else {
			this.setState({isLoading:false, hasMore:false})
		}
	}

	render() {
		const news = this.state.news;
		const newsList = news.length ?
			<MobileNewsComponent news={news} ImageWidth={this.props.ImageWidth}/>
			: (<div><span>玩命加载中...</span>&nbsp;<Icon type="loading" /></div>);

		return (
			<div className='mobile_news'>
				{newsList}
				{
					this.state.hasMore?
					<LoadMore isLoading={this.state.isLoading} loadMoreFn={this.loadMoreFn.bind(this)}/>
					:<div style={{textAlign:'center',backgroundColor:'#F8F8F8'}}>木有更多咯</div>
				}
			</div>
		);
	}

	async getnews(){
    let res = await $api['apis/getnews']({type: this.props.type , count: this.state.count});
    this.setState({news: res});
  }
}