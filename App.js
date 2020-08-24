import * as React from 'react';
import { Text, View, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

class MyTabBar extends React.Component{
  render(){
    const { state, descriptors, navigation, position } = this.props
    return (
      <View style={{ flexDirection: 'row',paddingLeft:30,paddingRight:20, paddingTop: 20,justifyContent:'space-between' }}>
        <TouchableOpacity>
          <Button title="菜单" onPress={ () => navigation.openDrawer() }></Button>
        </TouchableOpacity>
        
        <View style={{ flexDirection:'row',justifyContent:"space-between",flex:4 }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
  
            const isFocused = state.index === index;
            const key = index
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
  
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
  
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            // modify inputRange for custom behavior
            const inputRange = state.routes.map((_, i) => i);
            const opacity = Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
            });
  
            const fontSize = Animated.interpolate(position, {
              inputRange:[0,100],
              outputRange: inputRange.map(i => (i === index ? 18 : 16)),
            });
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                key={key}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1}}
              >
                <Animated.Text style={{ opacity,textAlign:'center',fontSize}}>{label}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity >
          <Button onPress={ () => navigation.navigate('Search')} title="搜索"/>
        </TouchableOpacity >
      </View>
    );
  }
  
}

function Search(){
  return (
    <Text>
      搜索
    </Text>
  )
}


function HomeScreen() {
  return (
    
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();
class DrawerContent extends React.Component{
  render(){
    const { state, descriptors, navigation, position } = this.props
    return(
      <View><Text>11111</Text></View>
    )
  }
}


const Stack = createStackNavigator();

class NoHeader extends React.Component{
  render(){
    const { scene, previous, navigation } = this.props
    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return (
      <MyHeader
        title="111111"
        leftButton={
          previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
        }
        style={options.headerStyle}
      />
    );
  }
  
};
class StackCom extends React.Component{
  render(){
    return (
      <Stack.Navigator initialRouteName="Home" options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Home" component={HomeScreen} header={ props => {<NoHeader {...props}/>} } options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}/>
        <Stack.Screen name="Search" component={Search} options={{ title:"搜索" }} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}/>
      </Stack.Navigator>
    )
  }
}





export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}
      <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="StackCom" component={StackCom} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
