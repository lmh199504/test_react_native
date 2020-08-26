import React from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from '../HomeTabNav'
import NotificationsScreen from '../NotificationsScreen'
import  DrawerContent from '../../components/DrawerContent'

const Drawer = createDrawerNavigator();

class DrawerNav extends React.Component{
    render(){
        return(
            <Drawer.Navigator initialRouteName="TabNav" drawerContent={ props => <DrawerContent {...props}/>} drawerStyle={{width:310}}>
                <Drawer.Screen name="TabNav" component={TabNav} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>     
        )
    }
}


export default DrawerNav