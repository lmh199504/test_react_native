import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';

import SingerTab from './singer'
export default class BasicTabsExample extends React.Component {
    render() {
        const tabs = [
            { title: '首页' },
            { title: '歌手' },
            { title: '新碟' },
            { title: '排行榜' },
            { title: '分类歌单' },
            { title: '电台' },
            { title: '数字专辑' }
        ];

        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#fff',
        };
        return (
            <View style={{ flex: 1 }}>
                <Tabs  tabs={tabs} swipeable={true} tabBarActiveTextColor="#2ec17d" tabBarInactiveTextColor="#000" tabBarUnderlineStyle={{ backgroundColor:"#2ec17d" }}>
                    <View style={style}>
                        <Text>首页</Text>
                    </View>
                    <View style={style}>
                        <SingerTab />
                    </View>
                    <View style={style}>
                        <Text>新碟</Text>
                    </View>
                    <View style={style}>
                        <Text>排行榜</Text>
                    </View>
                    <View style={style}>
                        <Text>分类歌单</Text>
                    </View>
                    <View style={style}>
                        <Text>电台</Text>
                    </View>
                    <View style={style}>
                        <Text>数字专辑</Text>
                    </View>
                </Tabs>
            </View>
        );
    }
}
export const title = 'Tabs';
export const description = 'Tabs example';