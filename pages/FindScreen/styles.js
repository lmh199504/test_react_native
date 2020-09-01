

import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        padding:15,
    },
    swiperCon:{
        marginBottom:10,
        height:220,
        overflow:"hidden"
    },
    top_slider:{
        padding:5,
        borderRadius:10,
        overflow:"hidden"
    },
    top_slider_img:{
        width:'100%',
        borderRadius:10,
        height:'100%',
        overflow:'hidden'
    },
    red_menu:{
        width:50,
        height:80,
        // backgroundColor:'red',
        marginRight:30
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
    },
    menu_text:{
        marginTop:5,
        fontSize:12,
        color:'#404040',
        textAlign:'center'
    },
    titelCon:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:10
    },
    titelCon_Text:{
        fontWeight:"bold",
        fontSize:16,
        color:"#000",
        
    },
    checkMoreView:{
        height:30,
        width:80,
        borderRadius:15,
        borderStyle:"solid",
        borderColor:'#f2f2f2',
        borderWidth:2,
        marginTop:-5
    },
    checkMoreText:{
        textAlign:"center",
        lineHeight:28,
        color:"#515151",
        fontSize:14,
    },
    hotsItem:{
        width:110,
        position:'relative',
        marginRight:15
    },
    hotsMusic:{
        width:110,
        height:110,
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:'gray'
    },
    hotsMusicTitle:{
        marginTop:10,
        color:"#898989"
    },
    playCon:{
        position:"absolute"
    },
    playBg:{
        width:'100%',
        height:'100%'
    },
    playCon:{
        position:'absolute',
        top:5,
        right:5,
        flexDirection:"row"
    },
    playImg:{
        width:15,
        height:15,
        marginTop:3
    },
    playNum:{
        color:"#fff"
    },
    suggest:{
        width:'100%',
        marginRight:15,
    },
    musicItem:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:10
    },
    left_MusicItem:{
        flexDirection:"row"
    },
    musicItemCon:{
        width:50,
        height:50,
        borderRadius:5,
        overflow:"hidden",
        marginRight:5
    },
    musicItem_bg:{
        width:'100%',
        height:'100%',
        borderRadius:5,
        overflow:"hidden"
    },
    right_play:{
        width:30,
        height:30
    },
    songName:{
        color:"#1b1b1b",
        fontSize:14
    },
    singerName:{
        color:'#bdbdbd',
        fontSize:13
    }
})

export default styles