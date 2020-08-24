// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
const TopTab = createMaterialTopTabNavigator()

const Tab = createBottomTabNavigator()
function HomeScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button title="跳转" onPress={ () => navigation.push('Detail',{
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //       }) }></Button>
    // </View>


    // <Tab.Navigator>
    //   <Tab.Screen name="Feed" component={FeedScreen} />
    //   <Tab.Screen name="Messages" component={Messages} />
    // </Tab.Navigator>
    <TopTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen name="Feed" component={FeedScreen} />
      <TopTab.Screen name="Messages" component={Messages} />
    </TopTab.Navigator>
  )
}


function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
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

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.Text style={{ opacity }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


class FeedScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>FeedScreen</Text>
      </View>
    )
  }
}

class Messages extends React.Component{
  render(){
    return(
      <View>
        <Text>Messages</Text>
      </View>
    )
  }
}

class DetailScreen extends React.Component {

  componentDidMount = () => {
    const { route } = this.props
    const { itemId,otherParam } = route.params;
    alert(itemId + '/n' + otherParam)
  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button title="回去" onPress={ () => this.props.navigation.goBack() }></Button>
      </View>
    )
  }
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/images/center_set.png')}
    />
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}    options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
        }}/>
        <Stack.Screen name="Detail" component={DetailScreen}  options={{ title: 'My Detail' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;