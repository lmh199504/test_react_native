
import React from 'react'

import Swiper from 'react-native-swiper'

import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, Animated } from 'react-native'
import { Button,Carousel } from '@ant-design/react-native';

var { height, width } = Dimensions.get('window');
class SwiperHome extends React.Component {

    state = {
        index:0
    }

    ChangeIndex = (index) => {
        console.log(index)
        this.setState({
            index
        })
    }

    scrollBy = (index) => {
        
        console.log(index)
        this.setState({
            index
        })
        this.swiper.scrollBy(index,true)
    }
    render() {
        const { index } = this.state 
        const sweperOptions = {
            loop:false,
            showsButtons:false,
            showsPagination:false,
            index:index
        }
        const { navigation } = this.props
       
        return (
            <View style={{ width: '100%', height: "100%" }}>
                <View style={{ width:'100%',flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 20,paddingBottom:10, justifyContent: 'space-between', overflow: "visible",position:'absolute',zIndex:5 }}>
                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={() => navigation.openDrawer()}>
                        <View>
                            <Image source={require('../../assets/images/caidan.png')} style={{ width: 15, height: 15, marginTop: 6 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => {this.scrollBy(0)}}>
                        <Animated.Text style={ index === 0 ? styles.navText :styles.navTextSm}>我的</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => {this.swiper.scrollBy(1, true)}}>
                        <Animated.Text style={ index === 1 ? styles.navText :styles.navTextSm}>发现</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => {this.swiper.scrollBy(2, true)}}>
                        <Animated.Text style={ index === 2 ? styles.navText :styles.navTextSm}>云村</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => {this.swiper.scrollBy(3, true)}}>
                        <Animated.Text style={ index === 3 ? styles.navText :styles.navTextSm}>视频</Animated.Text>
                    </TouchableOpacity>
                    {/* <Button title="我的" onPress={() => this.swiper.scrollBy(0, true)}></Button>
                    <Button title="发现" onPress={() => this.swiper.scrollBy(1, true)}></Button>
                    <Button title="云村" onPress={() => this.swiper.scrollBy(2, true)}></Button>
                    <Button title="视频" onPress={() => this.swiper.scrollBy(3, true)}></Button> */}

                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={() => navigation.navigate('Search')}
                    >
                        <View >
                            <Image source={require('../../assets/images/shousuo.png')} style={{ width: 15, height: 15, marginTop: 6 }} />
                        </View>
                    </TouchableOpacity >
                </View>
                <Swiper ref={(swiper) => {this.swiper = swiper;}} style={styles.wrapper}  {...sweperOptions} onIndexChanged={ index => this.ChangeIndex(index) } >
                    <View style={styles.slide3}>
                        <Text style={styles.text}>我的</Text>
                    </View>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>发现</Text>
                        <Button type="warning">warning</Button>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>云村</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>视频</Text>
                    </View>
                </Swiper>
                <View style={{ marginBottom: 1,zIndex: 100, backgroundColor: 'red', width: width, height: 50 }}><Text>111</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    navText:{
        fontSize:18,
    },
    navTextSm:{
        fontSize:16
    }
})
export default SwiperHome