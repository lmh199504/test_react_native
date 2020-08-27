import React from 'react'

import { View,Text,ScrollView,Image } from "react-native"
import Swiper from 'react-native-swiper'
import styles from './styles'

class Mine extends React.Component{
    render(){
        const swiperOption = {
            autoplay:false,
            showsButtons:false,
            loop:false,
            index:0,
            showsPagination:false,
            loadMinimal:true,
            loadMinimalSize:3
        }

        return(
            <ScrollView style={styles.ScrollView}>
                <View style={styles.topCon}>
                    <View style={ styles.flexBet }>
                        <View style={styles.userInfo}>
                            <Image style={styles.userHeader} source={ require('../../assets/images/timg.jpg') } />
                            <View>
                                <Text style={ styles.userName }>星风做浪啊</Text>
                                <Text style={ styles.userLevel }>Lv.9</Text>
                            </View>
                        </View>
                        <View style={styles.userInfo }>
                            <Text style={ styles.buyVip}>开通黑胶VIP</Text>
                            <Image style={styles.rightImg} source={ require('./images/right.png') }/>
                        </View>
                    </View>


                    <View style={ {...styles.flexBet,marginTop:30} }>
                        <View style={{  width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/local.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>本地音乐</Text>
                        </View>

                        <View style={{  width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/down.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>下载管理</Text>
                        </View>

                        <View style={{  width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/diantai.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>我的电台</Text>
                        </View>

                        <View style={{  width: '20%' }}>
                            <View style={styles.foruItem}>
                                <Image style={styles.iconImg} source={require('./images/shoucan.png')} />
                            </View>
                            <Text style={styles.foruItemtext}>我的收藏</Text>
                        </View>

                        <View style={{  width: '20%' }}>
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
                            <Image style={styles.more_img} source={require('./images/right.png')}/>
                        </View>
                    </View>
                    <View style={{ width:'100%',overflow:'hidden',marginBottom:10 }}>
                        <ScrollView horizontal={true}>
                            
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                            <View style={styles.mymusic_item}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>

                            <View style={{...styles.mymusic_item,marginRight:0}}>
                                <Image source={require('./images/bg.jpg')} style={ styles.music_Item_bg }/>
                                <Image source={require('./images/xin.png')} style={ styles.center_img }/>
                                <Text style={styles.music_Item_Text}>我喜欢的音乐</Text>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.main_title}>
                        <Text style={styles.main_title_text}>我的歌单</Text>
                        <View style={styles.more_con}>
                            <Text style={styles.more}>更多</Text>
                            <Image style={styles.more_img} source={require('./images/right.png')}/>
                        </View>
                    </View>
                    <View style={ styles.geDan }>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静安静安静安静安静安</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>
                        <View style={ styles.geDan_Item }>
                            <View>
                                <Image style={styles.geDan_Item_bg } source={require('./images/bg.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.geDan_Item_title}>安静</Text>
                                <Text style={styles.geDan_Item_subTitle}>100首</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        )
    }
}


export default Mine