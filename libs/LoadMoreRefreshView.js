/**
 * @detail：为ListView的renderFooter属性提供的ui组件
 * @use: 根据数据请求状态可传递相应的文字到组件内
 *	1，'上拉获取更多信息'；
 *	2，'加载失败，请重试'；
 *	3，'正在加载中...'；
 *	4，'没有更多消息'；
 * @eg:
 *	<ListView
 *		renderFooter={this.func.bind(this)}
 *  />
 *
 *  func(){
 *  	//...deal with the text
 *		return <LoadMorerefreshView texts={your text} loadIcon={your gif image}/>
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

	propTypes: {
		texts: React.PropTypes.string,
		loadIcon: React.PropTypes.string
	}

	render() {
		let text = '没有更多消息';
		let imgSource = <Text></Text>;

		if(this.props.texts) {
			text = this.props.texts;
		}

		if(this.props.loadIcon) {
			imgSource = <Image style={styles.Moreloadimg} source={{uri:this.props.loadIcon}} />;
		}

		return (
			<View style={styles.MoreView}>
				<View style={styles.Morebox}>
					{imgSource}
					<Text allowFontScaling={false} style={styles.MoreText}>
						{text}
					</Text>
				</View>
				<Image style={styles.bottomImage} source={{uri:'http://pic.c-ctrip.com/platform/h5/my/history/slogan@2x.jpg'}}/>
			</View>);
	}
};

let styles = React.StyleSheet.create({
	MoreView:{
        alignItems:'center',
        justifyContent:'center',
        height:80,
        backgroundColor:'#efefef'
    },
    Morebox:{
    	flexDirection: 'row',
    	alignItems:'center',
    	justifyContent:'center',
    },
    Moreloadimg:{
    	width:25,
    	height:25,
    	marginRight: 10
    },
    MoreText:{
        fontSize:12,
    },
    bottomImage:{
    	width: 150,
    	height: 25,
    	top: 10
    }
})