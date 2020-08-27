import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Animated,Image } from 'react-native';
import { Carousel } from '@ant-design/react-native';
export default class BasicCarouselExample extends React.Component {

    state = {
        index:0
    }

    onHorizontalSelectedIndexChange(index) {
        /* tslint:disable: no-console */
        console.log('horizontal change to', index);
    }

    render() {
        const {index} = this.props
        return (
            <View>
                <View style={{ width:'100%',flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 20,paddingBottom:10, justifyContent: 'space-between', overflow: "visible",position:'absolute',zIndex:5 }}>
                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={() => navigation.openDrawer()}>
                        <View>
                            <Image source={require('../../assets/images/caidan.png')} style={{ width: 15, height: 15, marginTop: 6 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => this.setState({index:0}) }>
                        <Animated.Text style={ index === 0 ? styles.navText :styles.navTextSm}>我的</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => this.setState({index:1})}>
                        <Animated.Text style={ index === 1 ? styles.navText :styles.navTextSm}>发现</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => this.setState({index:2})}>
                        <Animated.Text style={ index === 2 ? styles.navText :styles.navTextSm}>云村</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityRole="button" onPress={ () => this.setState({index:3})}>
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
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={index}
                    autoplay={false}
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    <View
                        style={styles.containerHorizontal}
                    >
                        <Text>Carousel 1</Text>
                    </View>
                    <View
                        style={{ ...styles.containerHorizontal, backgroundColor: "blue" }}
                    >
                        <Text>Carousel 2</Text>
                    </View>
                    <View
                        style={styles.containerHorizontal}
                    >
                        <Text>Carousel 3</Text>
                    </View>
                    <View
                        style={{ ...styles.containerHorizontal, backgroundColor: "blue" }}
                    >
                        <Text>Carousel 4</Text>
                    </View>
                </Carousel>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: '#fff',
        // height:150
        height: '100%'
    },
    containerHorizontal: {
        // flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: 'red',
        width: "100%",
        flex: 1
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});