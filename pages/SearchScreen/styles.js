
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        padding:15
    },
    header:{
        flexDirection:'row',
    },
    back:{
        width:"15%",
        padding:10,
        paddingTop:20,
        paddingLeft:20
    },
    goBack:{
        width:20,
        height:18
    },
    TextInputCon:{
        width:"85%"
    },
    TextInput:{
        borderBottomColor:"#999",
        borderBottomWidth:1,
        borderStyle:'solid',
        height:40,
        width:320,
        padding:0
    },
    hotItem:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingTop:10
    },
    hotLeft:{
        flexDirection:'row'
    },
    number:{
        marginRight:10
    },
    number_Text:{
        color:'#999'
    },
    red:{
        color:"red"
    },
    title:{
        marginBottom:15,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    history:{
        marginBottom:15,
        flexDirection:'row',
        flexWrap:"wrap"
    },
    historyItem:{
        backgroundColor:"#f3f3f3",
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        marginRight:15,
        marginBottom:5
    },
    historyItem_Text:{
        textAlign:"center",
        color:"#363636"
    },
    delImg:{
        width:20,
        height:20,
        marginRight:10
    },
    searchResult:{
        position:"absolute",
        top:60,
        backgroundColor:"#f5f5f5",
        zIndex:6,
        width:330,
        left:"17%",
        padding:10,
        borderRadius:10,
    },
    resultItem:{
        flexDirection:"row",
        marginBottom:3
    },
    singer:{
        color:"#999",
    },
    resultTitle:{
        fontSize:16,
        marginBottom:10,
        marginTop:10,
        color:"#f2323c"
    },
    name:{
        letterSpacing:2
    }
})

export default styles