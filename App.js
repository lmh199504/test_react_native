import * as React from 'react';
import { Text, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeDrawer from './pages/HomeDrawer'
import SearchScreen from './pages/SearchScreen'
import PlayScreen from './pages/PlayScreen'
// import SwiperHome from './pages/Index/test'
// import HomeTabNav from './pages/HomeTabNav'
import LoginScreen from './pages/LoginScreen'
// import player from './pages/Audio'
import GeDanScreen from './pages/GeDan'
import GeDanTabScreen from './pages/GeDanTab'


const Stack = createStackNavigator();

class App extends React.Component {


    render() {


        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'} >
                    <Stack.Screen name="Home" component={HomeDrawer} options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        header: () => { return null }
                    }} />
                    <Stack.Screen name="Search" component={SearchScreen} options={{ title: "搜索" }} options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} />
                    <Stack.Screen name="Play" component={PlayScreen} options={{ title: "播放" }} options={{
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
                            headerRight: () => <ToTab navigation={navigation}/>,
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                            // header: () => { return null }

                        })
                    } />

                    <Stack.Screen name="GeDanTab" component={GeDanTabScreen} options={{
                        title: "全部歌单",
                        headerTitleAlign: "center",
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
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