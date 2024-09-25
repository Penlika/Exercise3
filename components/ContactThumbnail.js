import { StyleSheet, View } from "react-native"
import { Text, Avatar } from "react-native-paper"

const ContactThumbNail=({avatar,name,phone})=>{
    return(
        <View style={myStyle.container}>
            <Avatar.Image source={{uri: avatar}} size={100}/>
            <Text variant="displaySmall" style={{fontWeight:"bold",margin:10}}>{name}</Text>
            <Text variant="headlineSmall">{phone}</Text>
        </View>
    )
}
export default ContactThumbNail
const myStyle=StyleSheet.create({
    container:{
        paddingVertical:30,
        marginHorizontal:15,
        justifyContent:"center",
        alignItems:"center"
    }
})