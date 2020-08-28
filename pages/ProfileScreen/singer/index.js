import React from 'react'
import { ScrollView,View,Text } from 'react-native'
import styles from './styles'

class SingerTab extends React.Component{
    render() {
        return (
            <ScrollView style={{width:'100%'}}>
               <ScrollView horizontal={true}>
                    <View style={styles.tabItem}>
                        <Text>
                            全部
                        </Text>
                    </View>
                    <View>
                        <Text>
                            全部
                        </Text>
                    </View>
                    <View>
                        <Text>
                            全部
                        </Text>
                    </View>
               </ScrollView>
               <ScrollView horizontal={true}>
                   
               </ScrollView>
               <ScrollView horizontal={true}>
                   
               </ScrollView>
               
            </ScrollView>
        )
    }
}

export default SingerTab