import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
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
        return (
            <ScrollView>
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
   
                    </ScrollView>
                </View>
            </ScrollView>

        )
    }
}
export default FindScreen