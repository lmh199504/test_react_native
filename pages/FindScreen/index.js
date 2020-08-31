import React from 'react'
import { View, Text, Image, ScrollView,TouchableHighlight } from 'react-native'
import styles from './styles'
import Swiper from 'react-native-swiper'

class FindScreen extends React.Component {

    

    render() {
        const sweperOptions = {
            loop: true,
            showsButtons: false,
            showsPagination: true,
            index: 0
        }
        const { navigation } = this.props
        return (
            <ScrollView style={ {marginBottom:50} }>
                <View style={styles.container}>
                    <Swiper style={styles.swiperCon} {...sweperOptions}>
                        <View style={styles.top_slider}>
                            <Image style={styles.top_slider_img} source={require('./images/1.jpg')} />
                        </View>
                        <View style={styles.top_slider}>
                            <Image style={styles.top_slider_img} source={require('./images/1.jpg')} />
                        </View>
                        <View style={styles.top_slider}>
                            <Image style={styles.top_slider_img} source={require('./images/1.jpg')} />
                        </View>
                        <View style={styles.top_slider}>
                            <Image style={styles.top_slider_img} source={require('./images/1.jpg')} />
                        </View>
                        <View style={styles.top_slider}>
                            <Image style={styles.top_slider_img} source={require('./images/1.jpg')} />
                        </View>
                    </Swiper>

                    <ScrollView horizontal={true}>
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>每日推荐</Text>
                        </View>
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>每日推荐</Text>
                        </View>

                        <TouchableHighlight onPress={ () => navigation.push('GeDan') } >
                            <View style={styles.red_menu}>
                                <View style={styles.menu_Icon}>
                                    <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                                </View>
                                <Text style={ styles.menu_text}>歌单</Text>
                            </View>
                        </TouchableHighlight>

                        
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>排行榜</Text>
                        </View>
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>电台</Text>
                        </View>
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>直播</Text>
                        </View>
                        <View style={styles.red_menu}>
                            <View style={styles.menu_Icon}>
                                <Image style={ styles.mene_Icon_img } source={require('./images/rili.png')}/>
                            </View>
                            <Text style={ styles.menu_text}>每日推荐</Text>
                        </View>
   
                    </ScrollView>

                    <View style={ styles.titelCon }>
                        <View>
                            <Text style={styles.titelCon_Text}>人气推荐歌单</Text>
                        </View>
                        <View style={styles.checkMoreView}>
                            <Text style={styles.checkMoreText}>查看更多</Text>
                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={ styles.hotsItem }>
                            <View style={styles.hotsMusic}>
                                <Image style={ styles.playBg } source={require('./images/1.jpg')} />
                                <View style={ styles.playCon }>
                                    <Image style={ styles.playImg } source={ require('./images/play.png') }/>
                                    <Text style={ styles.playNum }>639万</Text>
                                </View>
                            </View>
                            <Text style={ styles.hotsMusicTitle }>这是什么东西</Text>
                        </View>
                        <View style={ styles.hotsItem }>
                            <View style={styles.hotsMusic}>
                                <Image style={ styles.playBg } source={require('./images/1.jpg')} />
                                <View style={ styles.playCon }>
                                    <Image style={ styles.playImg } source={ require('./images/play.png') }/>
                                    <Text style={ styles.playNum }>639万</Text>
                                </View>
                            </View>
                            <Text style={ styles.hotsMusicTitle }>这是什么东西</Text>
                        </View>
                        <View style={ styles.hotsItem }>
                            <View style={styles.hotsMusic}>
                                <Image style={ styles.playBg } source={require('./images/1.jpg')} />
                                <View style={ styles.playCon }>
                                    <Image style={ styles.playImg } source={ require('./images/play.png') }/>
                                    <Text style={ styles.playNum }>639万</Text>
                                </View>
                            </View>
                            <Text style={ styles.hotsMusicTitle }>这是什么东西</Text>
                        </View>
                        <View style={ styles.hotsItem }>
                            <View style={styles.hotsMusic}>
                                <Image style={ styles.playBg } source={require('./images/1.jpg')} />
                                <View style={ styles.playCon }>
                                    <Image style={ styles.playImg } source={ require('./images/play.png') }/>
                                    <Text style={ styles.playNum }>639万</Text>
                                </View>
                            </View>
                            <Text style={ styles.hotsMusicTitle }>这是什么东西</Text>
                        </View>
                    </ScrollView>

                    <View style={ styles.titelCon }>
                        <View>
                            <Text style={styles.titelCon_Text}>歌曲推荐</Text>
                        </View>
                        <View style={styles.checkMoreView}>
                            <Text style={styles.checkMoreText}>播放全部</Text>
                        </View>
                    </View>

                    <Swiper horizontal={true} style={{height:180}}>
                        <View style={ styles.suggest }>
                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>
                        </View>
                        
                        <View style={ styles.suggest }>
                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>
                        </View>

                        <View style={ styles.suggest }>
                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>
                        </View>

                        <View style={ styles.suggest }>
                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>

                            <View style={styles.musicItem}>
                                <View style={styles.left_MusicItem}>
                                    <View style={ styles.musicItemCon }>
                                        <Image style={ styles.musicItem_bg } source={require('./images/1.jpg')}/>
                                    </View>
                                    <View>
                                        <Text style={ styles.songName }>雅俗共赏</Text>
                                        <Text style={ styles.singerName }>许嵩</Text>
                                    </View>
                                </View>

                                <View style={styles.right_MusicItem}>
                                    <Image style={ styles.right_play } source={ require('./images/red_play.png') }/>
                                </View>
                            </View>
                        </View>
                    </Swiper>

                </View>
            </ScrollView>

        )
    }
}
export default FindScreen