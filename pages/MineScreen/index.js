import React from 'react'

import { View, Text, ScrollView, Image, TouchableHighlight } from "react-native"
import { connect } from 'react-redux'
import styles from './styles'
import { setLoveLists, setUserSheets } from '../../redux/actions'
import { formatMoment } from '../../utils'


class Mine extends React.Component {

    onPressAdd = () => {

    }

    componentDidMount = () => {
        this.props.setLoveLists()
        this.props.setUserSheets()
    }
    render() {
        const { user, userSheet } = this.props
        return (
            <ScrollView style={styles.ScrollView}>
                <View style={styles.topCon}>
                    <View style={styles.flexBet}>
                        <View style={styles.userInfo}>
                            <Image style={styles.userHeader} source={{ uri: user.headerImg }} />
                            <View>
                                <Text style={styles.userName}>{user.username}</Text>
                                <Text style={styles.userLevel}>Lv.9</Text>
                            </View>
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.buyVip}>开通黑胶VIP</Text>
                            <Image style={styles.rightImg} source={require('./images/right.png')} />
                        </View>
                    </View>


                    <View style={{ ...styles.flexBet, marginTop: 30 }}>
                        <View style={{ width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/local.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>本地音乐</Text>
                        </View>

                        <View style={{ width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/down.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>下载管理</Text>
                        </View>

                        <View style={{ width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/diantai.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>我的电台</Text>
                        </View>

                        <View style={{ width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/shoucan.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>我的收藏</Text>
                        </View>

                        <View style={{ width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/guanzhu.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>关注新歌</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainCon}>
                    <View style={styles.main_title}>
                        <Text style={styles.main_title_text}>我的音乐</Text>
                        <View style={styles.more_con}>
                            <Text style={styles.more}>更多</Text>
                            <Image style={styles.more_img} source={require('./images/right.png')} />
                        </View>
                    </View>
                    <View style={{ width: '100%', overflow: 'hidden', marginBottom: 10 }}>
                        <ScrollView horizontal={true} >

                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={styles.music_Item_bg} />
                                <Image source={require('./images/xin.png')} style={styles.center_img} />
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={styles.music_Item_bg} />
                                <Image source={require('./images/xin.png')} style={styles.center_img} />
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={styles.music_Item_bg} />
                                <Image source={require('./images/xin.png')} style={styles.center_img} />
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={styles.music_Item_bg} />
                                <Image source={require('./images/xin.png')} style={styles.center_img} />
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.main_title}>
                        <Text style={styles.main_title_text}>我的歌单</Text>
                        <View style={styles.more_con}>
                            <Text style={styles.more}>更多</Text>
                            <Image style={styles.more_img} source={require('./images/right.png')} />
                        </View>
                    </View>
                    <View style={styles.geDan}>

                        {
                            userSheet.map((item, index) => (
                                <View style={styles.geDan_Item} key={index}>
                                    <View>
                                        <Image style={styles.geDan_Item_bg} source={{ uri: item.sheetCover }} />
                                    </View>
                                    <View>
                                        <Text style={styles.geDan_Item_title}>{item.name}</Text>
                                        <Text style={styles.geDan_Item_subTitle}>{formatMoment(item.createTime)}</Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={styles.geDan_Item}>
                            <TouchableHighlight underlayColor="#fff" onPress={() => this.onPressAdd()}>
                                <View>
                                    <View style={ {...styles.geDan_Item_bg,backgroundColor: "#f3f3f3", borderRadius: 5}} >
                                        <Image style={{width:40,height:40,marginLeft:5,marginTop:5}} source={require('./images/add.png')} />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <View>
                                <Text style={{ ...styles.geDan_Item_title,color:"#000",lineHeight:40}}>创建歌单</Text>

                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}


export default connect(
    state => ({
        user: state.user,
        loveList: state.loveList,
        userSheet: state.userSheet
    }),
    { setLoveLists, setUserSheets }
)(Mine)