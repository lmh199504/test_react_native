
import React from 'react'
import { View, Image, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
// import { InputItem } from '@ant-design/react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'

class Login extends React.Component {

    state = {
		username:'',
		password:''
    }
    
    _onChangeText = (name,input) => {
        this.setState({
            [name]:input.trim()
        })
    }

    onSubmit = () => {
		this.props.login(this.state)
    }
    componentDidUpdate = async () => {

        const { username }  = this.props.user
        const userId = await AsyncStorage.getItem('userId')
        if(username && userId){
            this.props.navigation.push('Home')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" backgroundColor='#362d32' StatusBarAnimation="fade" />
                <Image style={styles.bgImg} source={require('./images/bg.jpg')} />

                <View style={styles.login_box}>
                    <View>
                        <TextInput textContentType="username" placeholderTextColor="#8c8c8c" placeholder="用戶名" style={styles.TextInput} 
                            onChangeText={ (input) => this._onChangeText('username',input) }
                        />
                        <TextInput textContentType="password" placeholderTextColor="#8c8c8c" placeholder="密码" style={styles.TextInput} 
                            onChangeText={ (input) => this._onChangeText('password',input) }/>
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={ () => this.onSubmit() } >
                            <View>
                                <Text style={styles.loginText}>
                                    登陆
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registerBtn}>
                            <View>
                                <Text style={styles.registerText}>
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

export default connect(
    state => ({
        user: state.user
    }),
    { login }
)(Login)