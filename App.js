import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeDrawer from './pages/HomeDrawer'
import SearchScreen from './pages/SearchScreen'
import PlayScreen from './pages/PlayScreen'
// import SwiperHome from './pages/Index/test'
// import HomeTabNav from './pages/HomeTabNav'


const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
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
                </Stack.Navigator>

            </NavigationContainer>
        )
    }
}

export default App