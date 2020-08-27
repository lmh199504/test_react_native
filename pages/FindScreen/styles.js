

import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        padding:15,
    },
    swiperCon:{
        marginBottom:10,
        height:200
    },
    top_slider:{
        padding:5,
        borderRadius:10,
        overflow:"hidden"
    },
    top_slider_img:{
        width:'100%',
        borderRadius:10,
        height:'100%'
    },
    red_menu:{
        width:70,
        height:70,
        // backgroundColor:'red',
        marginRight:10
    },
    menu_Icon:{
        backgroundColor:"red",
        width:50,
        height:50,
        borderRadius:25,
        position:"relative"
    },
    mene_Icon_img:{
        width:25,
        height:25,
        position:'absolute',
        top:'50%',
        left:"50%",
        marginLeft:-12.5,
        marginTop:-12.5
    }
})

export default styles