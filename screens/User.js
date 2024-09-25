import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { fetchUserContact } from "../utils/api"
import colors from "../utils/colors"
import ContactThumbNail from "../components/ContactThumbnail"

const User=()=>{
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    useEffect(()=>{
        fetchUserContact()
        .then(
            users=>{
                setUser(users)
                setLoading(false)
                setError(false)
            }
        )
        .catch(
            e=>{
                setLoading(false)
                setError(true)
            }
        )
    })
    const {avatar,name,phone}=user
    return(
        <View style={myStyle.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <ContactThumbNail avatar={avatar} name={name} phone={phone}/>
            )}
        </View>
    )
}
export default User
const myStyle=StyleSheet.create({
    container:{
        backgroundColor:"aqua",
        justifyContent:"center",
        flex:1,
        alignItems:"center"
    }
})