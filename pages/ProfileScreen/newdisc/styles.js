import { StyleSheet,Dimensions } from 'react-native'
var {height,width} =  Dimensions.get('window');

const styles = StyleSheet.create({
    ScrollView:{
        width:'100%',
        padding:15,
        marginBottom:50
    },
    loading:{
        marginBottom:10
    },
    tagCon:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    tagItem:{
        width:60,
        borderRadius:5,
        paddingTop:2,
        paddingBottom:2
    },
    tagItem_active:{
        backgroundColor:"#f73c40",
    },

    tagItem_name:{
        textAlign:"center",
        color:"#000"
    },
    tagItem_name_active:{
        color:"#fff"
    },
    playlist__list:{
        flexDirection:"row",
        flexWrap:'wrap'
    },
    playlist__item:{
        marginTop:15,
        width:'25%'
    },
    coverImg:{
        width:width/4 - 40,
        height:width/4 - 40,
        borderRadius:10
    },
    itemName:{
        color:"#000",
        width:'100%',
        overflow:"hidden"
    },
    singer:{
        color:'#999',
        fontSize:12
    },
    release_time:{
        color:'#999',
        fontSize:12 
    }
})

export default styles