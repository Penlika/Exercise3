import { StyleSheet, TouchableHighlight, View } from "react-native"
import { Text } from "react-native-paper"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailListItem=(props)=>{
    const{icon, label, value}=props
    return(
        <TouchableHighlight>
            <View style={myStyle.container}>
            <MaterialIcons name={icon} size={24} color="black" />
                <View style={{marginLeft:10}}>
                    <Text variant="labelLarge">{label}</Text>
                    <Text>{value}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
export default DetailListItem
const myStyle=StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:5,
        borderBottomWidth:1
    }
})