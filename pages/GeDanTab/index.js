
import React from 'react'
import { reqGetSongListCategories } from '../../api'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class GeDanTab extends React.Component {


    state = {
        categories: [],
        param: {
            page: 1,
            limit: 20,
            sortId: '5',
            categoryId: 10000000
        },
        loading: false,
        songList: [],
        total: 10000
    }
    componentDidMount = async () => {
        const res = await reqGetSongListCategories()
        this.setState({
            categories: res.response.data.categories
        })
        console.log(this.state.categories)
    }


    render() {
        const { categories } = this.state

        return (
            <ScrollView style={styles.ScrollView}>
                <View>
                    {
                        categories.map((item, index) => (
                            <View key={index}>
                                <Text style={styles.categoryGroupName}>
                                    {item.categoryGroupName}
                                </Text>
                                <View styles={ styles.categoryNameCon }>
                                    {
                                        item.items.map((category, i )=> (
                                            <TouchableOpacity key={i} style={styles.name_item}>
                                                <View>
                                                    <Text>{category.categoryName}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

export default GeDanTab