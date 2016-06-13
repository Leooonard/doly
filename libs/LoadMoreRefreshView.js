/**
 * @detail：为ListView的renderFooter属性提供的ui组件
 * @use: 根据数据请求状态可传递相应的文字到组件内
 *	1，'上拉获取更多信息'；
 *	2，'上拉获取更多信息'；
 *	3，'正在加载中...'；
 *	4，'没有更多消息'；
 * @eg:
 *	<ListView
 *		renderFooter={this.func.bind(this)}
 *  />
 *
 *  func(){
 *  	//...deal with the text
 *		return <LoadMorerefreshView texts={your text} />
 *  }
 */

'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class LoadMorerefreshView extends Component {

	render() {
		let text = '正在加载中...';

		if(this.props.texts) {
			text = this.props.texts;
		}

		return (
			<View style={styles.MoreView}>
				<Text allowFontScaling=false style={styles.MoreText}>
					{text}
				</Text>
			</View>);
	}
};

let styles = React.StyleSheet.create({
	 MoreView:{
        alignItems:'center',
        justifyContent:'center',
        height:30,
        backgroundColor:'#efefef'
    },
    MoreText:{
        fontSize:12,
    }
})