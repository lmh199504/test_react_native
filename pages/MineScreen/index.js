import React from 'react'

import { View,Text,ScrollView,Image } from "react-native"
import styles from './styles'

class Mine extends React.Component{
    render(){
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
                    
                </View>
            </ScrollView>
        )
    }
}


export default Mine