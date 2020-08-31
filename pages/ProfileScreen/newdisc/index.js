
import React from 'react'
import { ScrollView, View, Text,TouchableHighlight } from 'react-native'
import { reqGetNewDisks } from '../../../api'
import styles from './styles'
import MyImg from '../../../components/Image'
import {
    ActivityIndicator
} from '@ant-design/react-native';

class NewDisc extends React.Component {
    state = {
        param: {
            page: 1,
            area: 1,
            num: 20,
        },
        loading: false,
        discList: [],
        total: 0
    }
    componentDidMount = () => {
        this.getData()
    }
    setArea = (item) => {
        const { param } = this.state
        param.area = item.id
        this.setState({
            param
        })
        this.getData()
    }

    setParam = (name, value) => {
        const { param } = this.state
        param[name] = value
        this.setState({
            param
        })
        this.getData()
    }


    getData = () => {
        const { param } = this.state
        this.setState({
            loading: true
        })
        reqGetNewDisks(param).then(res => {
            this.setState({
                loading: false,
                discList: res.response.new_album.data.albums,
                total: res.response.new_album.data.total
            })
        }).catch(() => {
            this.setState({
                loading: false
            })
        })
    }
    render() {
        const { loading, param, discList, total } = this.state
        const tags = [
            { id: 1, name: "内地" },
            { id: 2, name: "港台" },
            { id: 3, name: "欧美" },
            { id: 4, name: "韩国" },
            { id: 5, name: "日本" },
            { id: 6, name: "其他" }
        ]
        return (
            <ScrollView style={styles.ScrollView}>
                <ActivityIndicator
                    animating={loading}
                    size="large"
                    text="Loading..."
                    style={ styles.loading }
                />
                <View style={styles.tagCon}>
                    {
                        tags.map(item => (
                            <TouchableHighlight underlayColor='#f73c40' key={item.id} onPress={() => this.setArea(item)} style={[styles.tagItem,item.id === param.area ? styles.tagItem_active:'']}>
                                <View>
                                    <Text style={[styles.tagItem_name,item.id === param.area ? styles.tagItem_name_active:'']}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                            
                        ))
                    }
                </View>
                <View style={ styles.playlist__list }>
                    {
                        discList.map(item => (
                            <View style={styles.playlist__item} key={item.id}>
                                <View>
                                    <MyImg uri={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.photo.pic_mid}.jpg?max_age=2592000`} style={ styles.coverImg }/>
                                </View>
                                <Text style={ styles.itemName } numberOfLines={1}>{item.name}</Text>
                                <Text style={ styles.singer } numberOfLines={1}>{item.singers[0].name}</Text>
                                <Text style={ styles.release_time } numberOfLines={1}>{item.release_time}</Text>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>

        )
    }
}

export default NewDisc