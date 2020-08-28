
import React from 'react'
import { View, Image, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native'

// import { InputItem } from '@ant-design/react-native'
import styles from './styles'

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" backgroundColor='#362d32' StatusBarAnimation="fade" />
                <Image style={styles.bgImg} source={require('./images/bg.jpg')} />

                <View style={styles.login_box}>
                    <View>
                        <TextInput textContentType="username" placeholderTextColor="#8c8c8c" placeholder="用戶名" style={ styles.TextInput }/>
                        <TextInput textContentType="password" placeholderTextColor="#8c8c8c" placeholder="密码"  style={ styles.TextInput }/>
                        <TouchableOpacity style={styles.loginBtn}>
                            <View>
                                <Text style={ styles.loginText }>
                                    登陆
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registerBtn}>
                            <View>
                                <Text style={ styles.registerText }>
                                    注册
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
}

export default Login