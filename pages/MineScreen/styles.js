
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    ScrollView:{
        backgroundColor:"#1b1e23",
        paddingTop:40,
    },
    topCon:{
        padding:20
    },
    flexBet:{
        flexDirection:"row",
        justifyContent:"space-between",

    },
    userInfo:{
        flexDirection:'row'
    },
    userHeader:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10
    },
    userName:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        letterSpacing:1,
        marginTop:5
    },
    userLevel:{
        fontStyle:'italic',
        color:'#fff',
        backgroundColor:"#545358",
        width:40,
        textAlign:'center',
        borderRadius:10,
        fontSize:12,
        marginTop:10,
    },
    buyVip:{
        color:"#848388",
        fontSize:12
    },
    rightImg:{
        width:15,
        height:15
    },
    foruItem:{
        width:"100%",
        justifyContent:"space-around",
        flexDirection:'row',
        marginBottom:8
    },
    foruItemtext:{
        fontSize:13,
        textAlign:'center',
        color:"#fff"
    },
    iconImg:{
        width:25,
        height:25,
        justifyContent:'space-around'
    },
    mainCon:{
        backgroundColor:'#fff',
        padding:15,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    }
})

export default styles