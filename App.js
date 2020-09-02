import * as React from 'react';
import { Text, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Provider as AntdProvider } from '@ant-design/react-native'
import HomeDrawer from './pages/HomeDrawer'
import SearchScreen from './pages/SearchScreen'
import PlayScreen from './pages/PlayScreen'
// import SwiperHome from './pages/Index/test'
// import HomeTabNav from './pages/HomeTabNav'
import LoginScreen from './pages/LoginScreen'
// import player from './pages/Audio'
import GeDanScreen from './pages/GeDan'
import GeDanTabScreen from './pages/GeDanTab'
import RadioScreen from './pages/Radio'
import DayScreen from './pages/DaySuggest'
import RankScreen from './pages/ranklist'
import SingerScreen from './pages/singer'
import MVScreen from './pages/mv'

import DigitalScreen from './pages/digital'

const Stack = createStackNavigator();
import store from './redux/store'
import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'


class App extends React.Component {

    state = {
        userId: ''
    }
    componentDidMount = async () => {

        console.log(store.getState())
        try {
            const userId = await AsyncStorage.getItem('userId')
            if (userId) {
                this.setState({
                    userId
                })
            }
        } catch (error) {

        }
    }

    render() {
        const { userId } = this.state
        
        return (
            <Provider store={store}>
                <AntdProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName={!!userId ? 'Home' : 'Login'} >
                            <Stack.Screen name="Home" component={HomeDrawer} options={{
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                header: () => { return null }
                            }} />
                            <Stack.Screen name="Search" component={SearchScreen} options={{
                                title: "搜索",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                header: () => (null)
                            }} />
                            <Stack.Screen name="Play" component={PlayScreen} options={{
                                title: "播放",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />

                            <Stack.Screen name="Login" component={LoginScreen} options={{
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                header: () => { return null }
                            }} />


                            <Stack.Screen name="GeDan" component={GeDanScreen} options={
                                ({ navigation }) => ({
                                    title: "歌单",
                                    headerTitleAlign: "center",
                                    headerRight: () => <ToTab navigation={navigation} />,
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                    // header: () => { return null }

                                })
                            } />

                            <Stack.Screen name="GeDanTab" component={GeDanTabScreen} options={{
                                title: "全部歌单",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />

                            <Stack.Screen name="Radio" component={RadioScreen} options={{
                                title: "电台",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />

                            <Stack.Screen name="Day" component={DayScreen} options={{
                                title: "每日推荐",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />

                            <Stack.Screen name="Rank" component={RankScreen} options={{
                                title: "排行榜",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />
                            <Stack.Screen name="Singer" component={SingerScreen} options={{
                                title: "歌手",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />
                            <Stack.Screen name="MV" component={MVScreen} options={
                                ({ navigation }) => ({
                                    title: "MV",
                                    headerTitleAlign: "center",
                                    // headerRight: () => <ToTab navigation={navigation} />,
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                                })
                            } />
                            <Stack.Screen name="Digital" component={DigitalScreen} options={{
                                title: "数字专辑",
                                headerTitleAlign: "center",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }} />



                        </Stack.Navigator>
                    </NavigationContainer>
                </AntdProvider>
            </Provider>
        )
    }
}

class ToTab extends React.Component {
    render() {
        return (<TouchableHighlight onPress={() => this.props.navigation.push("GeDanTab")}>
            <Text style={{ marginRight: 20 }}>歌单分类</Text>
        </TouchableHighlight>)
    }
}
export default App